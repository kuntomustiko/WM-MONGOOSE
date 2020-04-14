const mongoose = require('mongoose')

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
        type: String
    },
    age: {
        type: Number
    }
})

// user menjadi nama collection
const User = mongoose.model('User', userSchema)

module.exports = User