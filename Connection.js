
    const {MongoClient} = require ('mongodb');

    
class Connection{
    constructor(){
        this._uri = "mongodb+srv://Amin:beba1997@cluster0.599ec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        this._client = new MongoClient(uri);
    }

    
    }
    Connection.prototype.getConnection = async function() {
        try{
            await client.connect();
            const database = client.db('AprilFools');
            const jokes = database.collection('Jokes');
            const query = {};
            const joke = await jokes.findOne(query);
            
            console.log(joke);
        } finally {
            await client.close();


}
}