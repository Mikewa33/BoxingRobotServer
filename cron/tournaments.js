var cron = require('node-cron');

cron.schedule('* * * * 5', () => {
    // Loop through and generate the tourements and schele them to run
    console.log("RUNNING EVERY 5 MINS")
});