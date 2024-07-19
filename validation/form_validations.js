exports.LoginUser = {
    email: {
        exists: {
            errorMessage: "email is required"
        },
        isEmail: {
            errorMessage: "email is invalid"
        }
    },
    password: {
        exists: {
            errorMessage: "Password is required"
        },

        isStrongPassword: {
            minLength: 5,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
        },
        
        errorMessage: "Password must be greater than 5 and contain at least one uppercase letter, one lowercase letter, and one number",
    }
}





