const fs = require("fs");
const path = require("path");

const COLOR = [{ERROR: '\x1b[31m'}, {SUCCESS: '\x1b[32m'}, {INFO: '\x1b[34m'}, {WARNING: '\x1b[35m'}]
class Logger {
	constructor(name, dir="./logs", cacheSize=100) {
		this.name = name;
		this.createDirRecursively(dir)
	    this.cache = []
	}

    writeLogs(level, message) {
        const messageOutput = message.constructor.name == "Array" || message.constructor.name == "Object";
        const output = `${new Date().toISOString().replace('T',' ').split('.')[0]} | ${this.name} | ${level} | ${messageOutput ? JSON.stringify(message) : message}`

        const consoleColor = COLOR.filter((res) => res.hasOwnProperty(level))[0]
        console.log(consoleColor[level] + output + "\x1b[0m")
        this.cache.push(output)
        fs.appendFileSync(this.path, this.cache.map(l => `${l}\n`).join(''))
            this.cache = []
        }

    error(message){
        this.writeLogs('ERROR', message)
    }

    info(message){
        this.writeLogs('INFO', message)
    }

    success(message){
        this.writeLogs('SUCCESS', message)
    }
    createDirRecursively(dir) {
        if (!fs.existsSync(dir)) {        
            this.createDirRecursively(path.join(dir, ".."));
            fs.mkdirSync(dir);
        }
        const fileName = `${
			new Date().toISOString().replaceAll(':', '-').replace('T',' ').split(' ')[0]
		}`
		this.path = path.join(dir, `${
			new Date(fileName).getTime()
		}-${this.name}.log`);
    }
}
module.exports = Logger;