import express from 'express'
const bookRouter=express.Router()
bookRouter.get('/',(req,res)=>{
console.log('hello');
})

export default bookRouter