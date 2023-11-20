// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs')
const path = require('path')

const fileReadCallback = (error, data) => {
  if (error) {
    console.log('Gagal membaca berkas')
    return
  }
  console.log(data)
}

// Asynchronous File System
const notes = fs.readFile(path.resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback)

// Synchronous File System
// const notes = fs.readFileSync(path.resolve(__dirname, 'notes.txt'), 'UTF-8')
console.log(notes)
