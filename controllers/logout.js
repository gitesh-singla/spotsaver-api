const errorLogger = require("../utils/errorLogger");

const oneMonthFromNow = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

const cookieSettings = {
  sameSite: 'None',
  expires: oneMonthFromNow,
  secure: true,
  httpOnly: true
}

const logout = (req, res) => {
    try{
        res.cookie('authToken', '', cookieSettings).json('Logged out.');
    } catch(error) {
        const errorLog = `At route ${req.url} ${error}`;
        errorLogger(errorLog);
        res.status(400).send("error");
    }
}

module.exports = logout;