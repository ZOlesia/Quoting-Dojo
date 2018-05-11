const   mongoose = require('mongoose'),
         Quote = mongoose.model('Quote');


module.exports = function(){
    return{
        index: function(req, res){
            res.render("index");
        },

        newQuote: function(req, res){
            console.log("111111111");
            var quote = new Quote({ name: req.body.name, quote: req.body.quote });
            quote.save(function(err){
                if(err){
                    console.log('ERROR!!!!');
                    for(var key in err.errors){
                        req.flash('quote_creation', err.errors[key].message);
                    }
                    return res.redirect('/');
                }
                else{
                    console.log('222222222');
                    console.log(quote);
                    res.redirect('/quotes');
                }
            })
        },

        allQuotes: function(req, res){
            Quote.find({}, null, {sort: '-createdAt'}, function(err, result)
            {
                if(err)
                {
                    console.log('ERROR CANNOT DISPLAY QUOTES');
                }
                else
                {
                    console.log("*********************");
                    console.log(result);
                    res.render("quotes", {all_quotes: result});
                }
            })
        }  
    }
}