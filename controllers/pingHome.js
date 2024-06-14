const errorLogger = require("../utils/errorLogger");

async function pingHome(req, res) {
    try {
        res.send("Hello There! Nothing to see here.")
    } catch(error){
        console.log(error);
        const errorLog = `At route ${req.url} ${error}`;
        errorLogger(errorLog);
        res.status(402).json(error);
    } finally {
        console.log("Request receieved!");
    }
}

module.exports = pingHome;