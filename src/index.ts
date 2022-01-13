import express from 'express'
const app=express()                         
import bookRouter from './routes/books'
app.get('/book',bookRouter)
app.listen(8080,()=>{
console.log('listeng on 8080');
})               