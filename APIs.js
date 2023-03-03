const express = require('express')
const mongodb = require('mongodb')
const dbConnect = require('./mongodb')
const app = express()



///////////GET API method use to get data(read data) from other place like browser ,database , postman/////////////////////

app.get('/',async (req,resp)=>{
    let data = await dbConnect()
   data = await  data.find().toArray()
   console.log(data)
resp.send(data)
})

///////////////////////////////////POST API method use to post data /////////////////////////////////////////////////////////////////////

app.use(express.json())
app.post('/', async (req,resp)=>{
    // console.log(req.body)
    let data = await dbConnect()
    let result =  await data.insert(req.body)

    resp.send(req.body)
})
///////////////PUT API METHOD ///////////////////////////////////////////////////////////////////////////////////////////////////// const express = require('express')

app.put('/:name',async (req,resp)=>{
    // console.log(req.body)
    let data = await dbConnect()
    let result = data.updateOne(
        {name:req.params.name},
        {$set:req.body}
        )
    resp.send({result:'updated'})
})
//////////DELETE METHOD API/////////////////////////////////////////////////////////////////////////////////////////////////

app.delete('/:id',async (req,resp)=>{
    console.log(req.params.id)
    const data = await dbConnect()
    const result =await  data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send('result')
})
///////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(5000)