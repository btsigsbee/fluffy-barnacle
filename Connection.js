
    const {MongoClient} = require ('mongodb');

    import User from './User.js';
    const uri = "mongodb+srv://Amin:beba1997@cluster0.599ec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);


    

    getConnection = async function() {
        try{
            await client.connect();
            const database = client.db('AprilFools');
            const users = database.collection('Users');
            const query = {};
            const user = await users.findOne(query);
            var Usr = User(user['userId'], user['firstName'], user['lastName'], user['phoneNumber'], user['introMSGSnt'], user['Gender']);
            console.log(Usr);
        } finally {
            await client.close();


}
}
getConnection();