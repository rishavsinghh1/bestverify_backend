const crypto = require('crypto');

class Security {
    constructor(algorithm = 'aes-256-cbc', bytes = 16) {
        this.algorithm = algorithm
        this.bytes = bytes
    }

    token = () => {
        return crypto.randomBytes(this.bytes).toString('hex');
    }

    encryption = (token, payload) => {
        const data = typeof  payload == 'object' ? JSON.stringify(payload): payload;
        const iv = crypto.randomBytes(this.bytes)
        const cipher = crypto.createCipheriv(this.algorithm, token, iv)
        const encry =  Buffer.from(
            cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
        ).toString('base64');
        return {iv:iv, key: encry}
    }
}

module.exports = Security;