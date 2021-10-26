const { validationResult } = require("express-validator");
const fs = require("fs");
const db = require("../database/models");

module.exports = {
  categories: (req, res) => {
    db.Category.findAll().then((category) => {
      res.render("admin/categories/adminCategories", {
        category,
        session: req.session,
      });
    });
  },
  categoryCreate: (req, res) => {
    res.render("admin/categories/adminCategoriesCreateForm", {
      session: req.session,
    });
  },
  categoryStore: (req, res) => {
    let errors = validationResult(req);
    if (req.fileValidatorError) {
      let image = {
        param: "image",
        msg: req.fileValidatorError,
      };
      errors.push(image);
    }
    if (errors.isEmpty()) {
      db.Category.create({
        name: req.body.name,
        banner: req.file ? req.file.filename : "default-image.png",
      }).then((result) => {
        res.redirect("/admin/categories");
      }).catch(error => console.log(error))
    } else {
      res.render("adminProductCreateForm", {
        errors: errors.mapped(),
        old: req.body,
        session: req.session,
      });
    }
  },
  categoryEdit: (req, res) => {
    db.Category.findByPk(req.params.id).then((categorie) => {
      res.render("admin/categories/adminCategoriesEditForm", {
        categorie,
        session: req.session,
      });
    });
  },
  categoryUpdate: (req, res) => {
    let errors = validationResult(req);
    if (req.fileValidatorError) {
      let image = {
        param: "image",
        msg: req.fileValidatorError,
      };
      errors.push(image);
    }
    if (errors.isEmpty()) {
      db.Category.findByPk(req.params.id).then((categorie) => {
        db.Category.update(
          {
            name: req.body.name,
            banner: req.file ? req.file.filename : categorie.image,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        ).then((result) => {
          res.redirect("/admin/categories");
        });
      });
    } else {
      db.Category.findByPk(req.params.id).then((categorie) => {
        res.render("admin/categories/adminCategoriesEditForm", {
          categorie,
          errors: errors.mapped(),
          old: req.body,
          session: req.session,
        });
      });
    }
  },
  categoryDestroy: (req, res) => {
    db.Subcategories.destroy({
      where: {
        categoryId: req.params.id,
      },
    }).then((result) => {
      db.Categories.findByPk(req.params.id).then((category) => {
        fs.existsSync("./public/images/categorias/", category.banner)
          ? fs.unlinkSync("./public/images/categorias/" + category.banner)
          : console.log("-- No se encontró");
        db.Categories.destroy({
          where: {
            id: req.params.id,
          },
        }).then((result) => {
          return res.redirect("/admin/categories");
        });
      });
    });
  },
};