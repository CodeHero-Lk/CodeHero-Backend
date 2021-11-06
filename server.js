const http = require('http');
const app = require('./app');


// Get port from environment and run the server.
let server = undefined;
if (process.env.NODE_ENV === 'development') {
    const DEV_PORT = process.env.APP_DEV_PORT || 3000;
    server = http.createServer(app).listen(DEV_PORT, () => {
        console.log(`Development server running on port ${DEV_PORT}`);
    });
} else {
    const PORT = process.env.APP_PORT || 80;
    server = http.createServer(app).listen(PORT, () => {
        console.log(`Development server running on port ${PORT}`);
    });
}

module.exports = server;