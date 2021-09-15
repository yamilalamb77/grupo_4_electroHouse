const { products , carousel, categories} = require('../data/dataBase');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
    index: (req,res) => {
        let productsSlider = products.filter(product => product.discount >= 5)

        res.render('index', {
            titleSlider : "Ofertas especiales",
            productsSlider,
            bannerSlides : carousel,
            categories
            
        })
    },
    search: (req, res) => {
		let result = []
		products.forEach(product => {
			if(product.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
				result.push(product)
			}
		});
		res.render('users/search', {
			result,
			toThousand,
			search: req.query.keywords
		})
	},
  
    contact: (req,res) => {
        res.render('users/contact')
    },
    enConstruccion: (req,res) => {
        res.render('product/enConstruccion')
    },
    termsYConditions: (req,res) => {
        res.render('termsYConditions')
    },
    error: (req,res) => {
        res.render('product/error')
    }


}