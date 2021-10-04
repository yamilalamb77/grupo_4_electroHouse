const { products, carousel, categories } = require('../data/dataBase');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
    index: (req, res) => {
        let productsSlider = products.filter(product => product.discount >= 5)
        console.log(req.session.user)
        res.render('index', {
            titleSlider: "Ofertas especiales",
            toThousand,
            productsSlider,
            bannerSlides: carousel,
            categories,
            usuario: req.session.user ? req.session.user : ""
        })
    },
    search: (req, res) => {
        let result = []
        products.forEach(product => {
            if (product.name.toLowerCase().includes(req.query.keywords.toLowerCase())) {
                result.push(product)
            }
        });
        res.render('users/search', {
            result,
            toThousand,
            search: req.query.keywords,
            usuario: req.session.user ? req.session.user : ""
        })
    },

    contact: (req, res) => {
        res.render('users/contact', { usuario: req.session.user ? req.session.user : "" })

    },
    enConstruccion: (req, res) => {
        res.render('product/enConstruccion', { usuario: req.session.user ? req.session.user : "" })
    },
    termsYConditions: (req, res) => {
        res.render('termsYConditions', { usuario: req.session.user ? req.session.user : "" })
    },
    error: (req, res) => {
        res.render('product/error')
    }


}