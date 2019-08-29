const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//function hhmm () {
//   var now = new Date();
//   return now.getHours() + ':' + now.getMinutes();
//}


// Create Schema
const IdeaSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  details:{
    type: String,
    required: true
  },
  qty:{
      type:Number , 
      required: true   
  },
  dateadd:{
      type:Date , 
      required: true   
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('ideas', IdeaSchema);