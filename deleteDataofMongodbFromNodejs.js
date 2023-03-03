const dbConnect = require('./mongodb')
const deleteData = async ()=>{
    let data = await dbConnect()
    let result = await data.deleteOne({name:'13maxpro'})
console.warn(result) ;
// if(result.acknowledgeed){
//     console.log('record deletd')
// }
}
deleteData()