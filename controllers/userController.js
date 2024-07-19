const { getAllUserData } = require("../models/userModel");
const { getUserbyId, deleteUser } = require("../models/userModel");

/**** Get All User Data ****/
exports.getAllUser = (req, res) => {
    getAllUserData((result) => {
        if (result) {
            // result.data.data.forEach((element) => {
            res.status(200).json({
                status: 'success',
                message: 'data found !!',
                data: result.data.data

            })
            //});
        }
    });
}

/**** Creeate New User ****/
exports.addNewUser = (req, res) => {
    const { name, id } = req.body;
    if (!name && !id) {
        res.status(404).json({
            status: 'failed',
            message: 'data not found !!'
        })
    } else {
        res.status(200).json({
            status: 'success',
            message: 'data add success !!'
        })
    }

}

/**** Get User By Id ****/
exports.getUserById = (req, res) => {
    //const { id } = req.params;
    const { id } = req.body;
    // const array = [1, 2, 3, 4];
    getUserbyId(id, (result) => {
        // if (!array[id]) {
        if (!result) {
            res.status(404).json({
                status: 'failed',
                message: 'data not found !!'
            })
        } else {
            res.status(200).json({
                status: 'success',
                message: 'User Data Found !!',
                data: result.data.data
            })
        }
    })


}

/**** Delete User ****/
exports.deleteUser = (req, res) => {
    // const { id } = req.params;
    // const array = [1, 2, 3, 4];
    const { id } = req.body;
    deleteUser(id, (result) => {
        //if (!array[id]) {
        if (result) {
            res.status(404).json({
                status: 'failed',
                message: 'data not found !!'
            })
        } else {
            res.status(200).json({
                status: 'success',
                message: 'user data deleted !!'
            })
        }
    })
}

/**** Update User ****/
exports.updateUser = (req, res) => {
    const { id } = req.params;
    const array = [1, 2, 3, 4];
    if (!array[id]) {
        res.status(404).json({
            status: 'failed',
            message: 'data not found !!'
        })
    } else {
        res.status(200).json({
            status: 'success',
            message: 'data deleted !!'
        })
    }

}