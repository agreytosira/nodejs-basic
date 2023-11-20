// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs')
const path = require('path')

const notes = fs.readFileSync(path.resolve(__dirname, 'notes.txt'), 'UTF-8')
console.log(notes)
