import {MongoClient} from "mongodb";
const url = "mongodb://localhost:27017";
const client= new MongoClient(url);


const dbConnect= async ()=>{
    let conn=await client.connect();
    let db = client.db("mydb");
    let collection = db.collection("blog");
    
    return collection;
}

export default dbConnect;
