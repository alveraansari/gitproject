var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
 
var Superhero = new Schema(
    {name : String, email : String,password :String, address : String , city:String}
   
    );
 
mongoose.model('superheros', Superhero);