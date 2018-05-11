const mongoose = require('mongoose');
module.exports = ( () => {
    var QuoteSchema = new mongoose.Schema({
        name : {type: String, required: true, minlength: 2},
        quote : {type: String, required: true, minlength: 6}
    }, {timestamps: true});
    
    mongoose.model('Quote', QuoteSchema);
})();
