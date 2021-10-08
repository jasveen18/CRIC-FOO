const User = require('./model/schema');
const Data = require('./constant/data');

const DefaultData = async () =>{
    try{
        await User.deleteMany({});
        await User.insertMany(Data);

        console.log('Data imported successfully')
    } catch(err){
        console.log('Error:', err.message);
    }
};

module.exports = DefaultData;