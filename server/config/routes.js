const  quotes = require("../controllers/quotes.js")();

module.exports = function(app){

    app.get('/', function(req, res) 
    {
        quotes.index(req, res);
    })
    
    app.post('/newQuote', function(req, res){
        quotes.newQuote(req, res);
    })
    
    app.get('/quotes', function(req, res){
        quotes.allQuotes(req, res);
    })
}