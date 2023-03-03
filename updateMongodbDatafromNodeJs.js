const dbConnect = require('./mongodb')

const updateData = async ()=>{
let data = await dbConnect()
let result = await data.updateOne(
    {name:'13maxpro' }, { $set:{name:'13maxpro', brand:'SONY experia'}}
)
console.warn(result)

}
updateData();