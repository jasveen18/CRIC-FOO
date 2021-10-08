const mongoose = require('mongoose');

const DB = `mongodb+srv://jasveensingh:jasveen18@cluster0.h2d0q.mongodb.net/information?retryWrites=true&w=majority`

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(()=>{
    console.log(`connection successful`);

}).catch((err)=>console.log(err));