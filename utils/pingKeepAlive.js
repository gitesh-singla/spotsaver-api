const axios = require('axios');
const cron = require('node-cron');

// Schedule the job to run every 10 minutes
const pingKeepAlive = cron.schedule('*/10 * * * *', async () => {
    try {
        await axios.get('https://spotsaver-api.onrender.com');
    } catch (error) {
        console.log('Ping failed:', error);
    }
});

pingKeepAlive.stop();
module.exports = pingKeepAlive;

