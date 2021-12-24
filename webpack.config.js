const path = require('path');

module.exports = {
    "mode": "none",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname + '/lib',
        "filename": "index.js"
    },
    devtool: 'eval',
};