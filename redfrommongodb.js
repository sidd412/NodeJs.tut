// const dbConnect = require('./mongodb')


// const main = async()=>{
//     // console.log("main function called")
//     let data = await dbConnect()
//     data = await data.find().toArray()

//     console.warn(data)
// }
// main()

///////////////////////or////////////////////////////////////

const dbConnect = require('./codeToConnectMongodbWithNodeJs')
dbConnect().then((resp)=>{
resp.find().toArray().then((data)=>{
    console.warn(data)
})
})
console.warn(dbConnect)