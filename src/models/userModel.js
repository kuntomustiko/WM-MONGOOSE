const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    // username dengan type data string
    username: {
        type: String, // tipe data yang akan simpan
        unique: true, // harus unik / tidak boleh sama
        required: true, // gak boleh kosong / wajib di isi
        set: val => val.replace(/ /g, ""), // mengubah data  / mengatur ulang = 
        // akan menggantikan semua spasi dengan string kosong yang ada di antara karakter / mengahapus spasi
        validate(value) { // yang diketik oleh user akan masuk ke value lalu digunakan untuk pengecekan
            // handle jika yang di input user bukan sebuah string
            let result = isNaN(parseInt(value)) // return false
            if (!result) {
                throw new Error("Username tidak boleh angka")
            }
        }
    },
    name: {
        type: String,
        required: true,
        trim: true, // " randy orton " -->  "randy orton" // menghapus white space sebelum dan sesudah data input
        validate(value) { // yang diketik oleh user akan masuk ke value lalu digunakan untuk pengecekan
            // handle jika yang di input user bukan sebuah string
            let result = isNaN(parseInt(value)) // return false
            if (!result) {
                throw new Error("Username tidak boleh angka")
            }
        }
    }, email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true, // akan mengubah data menjadi huruf kecil semua
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email tidak valid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7
    },
    age: {
        type: Number,
        default: 0, // ketika tidak di isi maka default value nya adalah nol / 0
        set: val => parseInt(val)
    }
})

// user menjadi nama collection
const User = mongoose.model('User', userSchema)

module.exports = User