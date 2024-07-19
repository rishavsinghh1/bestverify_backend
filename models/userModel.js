const con = require("../config/db_connection");

// Find  User 
exports.findUser = (email, password, callback) => {
    con.query(`select * from users where email = '${email}' AND  password ='${password}' `, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        if (result.length > 0) {
            return callback({ status: true, data: { data: result } });
        }
        return callback(false);
    });
}

// Add User
exports.addUser = (name, email, password, callback) => {
    con.query(`INSERT INTO users (name, email,password) VALUES ('${name}', '${email}','${password}')`, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        if (result.affectedRows) {
            return callback({ status: true, data: { id: result.insertId, name: name } });
        }
        return callback({ status: false });
    })
}
// Get All USer
exports.getAllUserData = (callback) => {
    con.query(`select * from users `, (err, result) => {
        if (err) throw err;
        if (result) {
            return callback({ status: true, data: { data: result } });
        }
        return callback({ status: false });
    });
}

// Get User By Id
exports.getUserbyId = (id, callback) => {
    con.query(`select * from users where id = '${id}' `, (err, result) => {
        if (err) throw err;
        console.log(result);
        if (result.length > 0) {
            return callback({ status: true, data: { data: result } });
        }
        return callback(false);
    })
}
// Delete User Data
exports.deleteUser=(id,callback) =>{
    con.query(`delete from users where id = '${id}' `, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            return callback({ status: true, data: { data: result } });
        }
        return callback(false);
    })
}
