const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    Profile:{
        default:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F220453%2Fpexels-photo-220453.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&tbnid=GdyEc-NZ0mitnM&vet=12ahUKEwjXhLP1vsn-AhUL-nMBHVOgAPUQMygCegUIARDtAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fperson%2F&docid=lrXLklXghG-NqM&w=500&h=750&q=person%20image&ved=2ahUKEwjXhLP1vsn-AhUL-nMBHVOgAPUQMygCegUIARDtAQ"

    },
    Name:{
        default:"Utkarsh"
    },
    Bio:{
        default:"he is a software developer"
    },
    Phone:{
        default:"1234567891"
    },
    email:String,
    password:String


})

const UserModel = mongoose.model("user",userSchema)

module.exports = {
UserModel
}