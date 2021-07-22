
const conn = require('./Connection').default;
function Main(){
    conn.prototype.getConnection();
   
}

Main(conn);