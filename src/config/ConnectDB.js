const mongoose = require('mongoose')

 const connectMongodb = ()=>{
    try {
        mongoose.connect('mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority')
       console.log('connect successed')
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = connectMongodb;