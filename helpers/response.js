exports.responseHandler = (req, res, next) => {
    res.response = (result = {}, message = "successfully !!", code = 200) => {
        return res.status(code).json({
            data: result,
            message: message,
            code: code
        })
    },
        next();
}


exports.errorValidatorHandler = (req, res, next) => {
    // console.log('errorres', res)
    res.formError = (errors, code = 400) => {
        const error = errors.array().filter((e) => e.hasOwnProperty('msg')).map((m) => {
            console.log('error msg', m)
            return {
                msg: m.msg,
                type: m.path,

            }
        })
        return res.status(code).json({
            data: error,
            code: code
        })

    },
    next();
}