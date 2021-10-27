const { validationResult } = require("express-validator");
const fs = require("fs");
const db = require("../database/models");

module.exports = {
  subcategories: (req, res) => {
    db.Subcategory.findAll().then((Subcategory) => {
      res.render("admin/subcategories/adminSubcategories", {
        Subcategory,
        session: req.session,
        usuario : req.session.user ? req.session.user : ""
      });
    });
  },
  subcategoryCreate: (req, res) => {
    res.render("admin/subcategories/adminSubcategoriesCreateForm", {
      session: req.session,
      usuario : req.session.user ? req.session.user : ""
    });
  },
  subcategoryStore: (req, res) => {
    let errors = validationResult(req);
    if (req.fileValidatorError) {
      let image = {
        param: "image",
        msg: req.fileValidatorError,
      };
      errors.push(image);
    }
    if (errors.isEmpty()) {
      db.Subcategory.create({
        name: req.body.name,
        categoriesId: req.body.category,
      }).then((result) => {
        res.redirect("/admin/subcategories");
      });
    } else {
      res.render("adminSubcategoriesCreateForm", {
        errors: errors.mapped(),
        old: req.body,
        session: req.session,
        usuario : req.session.user ? req.session.user : ""
      });
    }
  },
  subcategoryEdit: (req, res) => {
    db.Subcategory.findByPk(req.params.id).then((Subcategories) => {
      res.render("admin/subcategories/adminSubcategoriesEditForm", {
        Subcategories,
        session: req.session,
        usuario : req.session.user ? req.session.user : ""
      });
    });
  },
  subcategoryUpdate: (req, res) => {
    let errors = validationResult(req);
    if (req.fileValidatorError) {
      let image = {
        param: "image",
        msg: req.fileValidatorError,
      };
      errors.push(image);
    }
    if (errors.isEmpty()) {
        db.Subcategory.update(
          {
            name: req.body.name,
            categoriesId: req.body.categoriesId
          },
          {
            where: {
              id: req.params.id,
            },
          }
        ).then((result) => {
          res.redirect("/admin/subcategories");
        });
    } else {
      db.Subcategory.findByPk(req.params.id).then((Subcategories) => {
        res.render("admin/subcategories/adminSubcategoriesEditForm", {
            Subcategories,
          errors: errors.mapped(),
          old: req.body,
          session: req.session,
          usuario : req.session.user ? req.session.user : ""
        });
      });
    }
  },
  subcategoryDestroy: (req, res) => {
    db.Products.findAll({
      where: {
        subcategoriesId: req.params.id
      }
    }).then(products => {
      products.forEach(product => {
        db.ProductImage.findAll({
          where: {
            productId: product.id
          }
        }).then(images => {
          images.forEach((image) => {
            fs.existsSync("./public/images/productos/", image.image)
              ? fs.unlinkSync("./public/images/productos/" + image.image)
              : console.log("-- No se encontró");
          });
        })
        db.ProductImage.destroy({
          where: {
            productId: product.id
          }
        }).then((result)=> {})
      })
      db.Products.destroy({
        where: {
          subcategoriesId: req.params.id,
        },
      }).then((result) => {
        db.Subcategory.destroy({
          where: {
            id: req.params.id,
          },
        }).then((result) => {
          return res.redirect("/admin/subcategories");
        });
      });
    })
  },
};