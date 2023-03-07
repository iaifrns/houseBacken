import { createConnection } from 'mysql';
const conn = createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "house_rental",
});

conn.connect();

export default conn;