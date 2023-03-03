////////////////how to insert data in mongodb by nodejs///////////////////////////
 const dbConnect = require('./codeToConnectMongodbWithNodeJs')
const db = require('./codeToConnectMongodbWithNodeJs')

const insert = async ()=>{
    const db =  await  dbConnect();
    console.log('INSERT FUNCTION')
   const result = await db.insert({
       name:'note 5', 
       brand:'vivo',
       category:'mobile'
   })
   if(result.acknowledged){
console.log('data inserted')
   }
}
insert()