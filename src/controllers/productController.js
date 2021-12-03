const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let axios = require('axios')

const BASE_URL = "http://localhost:3030/api";

module.exports = {

  productDetail: (req, res) => {
    db.Products.findOne({
      where: {
        id: +req.params.id
      },
      include: [
        { association: "images" },

      ]
    })
      .then(product => {
        db.Products.findAll({
          where: {
            subcategoriesId: product.subcategoriesId
          },
          include: [
            { association: "images" },
            { association: 'subcategory' }
          ]
        })
          .then(products => {
            res.render('product/productDetail', {
              titleSlider: "Productos relacionados",
              productSlider: products,
              toThousand,
              product,
              usuario: req.session.user ? req.session.user : ""
            })
          })

      })

  },

  category: (req, res) => {

    db.Category.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          association: 'subcategory',
          include: [
            {
              association: 'product',
              include: [
                { association: "images" }
              ]
            }
          ]
        }
      ]
    })
      .then(category => {
        let subCategories = category.subcategory
        let products = []
        subCategories.forEach(subcategory => {
          subcategory.product.forEach(product => products.push(product))
        });
        res.render('categories', {
          category,
          products,
          toThousand,
          subCategories,
          usuario: req.session.user ? req.session.user.id : ""
        })
      })

  },


  subcategory: (req, res) => {
    db.Subcategory.findByPk(req.params.id, {
      include: [
        {
          association: "product",
          include: [
            {
              association: "images",
            },
          ],
        },
      ],
    })
      .then((subcategory) => {
        db.Category.findByPk(subcategory.categoriesId, {
          include: [{ association: "subcategory" }],
        }).then((category) =>
          res.render('subcategory', {
            category,
            product: subcategory.product,
            toThousand,
            usuario: req.session.user ? req.session.user : "",
          })
        );
      })
      .catch((err) => console.log(err));
  },

  shoppingCart: (req, res) => {

    res.render('product/shoppingCart', { usuario: req.session.user ? req.session.user : "" })
  },

  cart: (req, res) => {
    let user = req.session.user
    axios({
      method: 'get',
      url: `http://localhost:3000/api/cart/${user}`,
    })
      .then(response => {
        let products = response.data.data?.order_items.map(item => {
          return {
            ...item.products,
            quantity: item.quantity
          }
        })
        res.render('productCart', {
          session: req.session,
          products: products !== undefined ? products : [],
          user: req.session.user?.id || null,
        })
      }

      )
      .catch(error => res.send(error))
  }


}