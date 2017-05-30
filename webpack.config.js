// The require is still written in the common node way, since babel is not available at this point
const path = require('path');

module.exports = {
    // __dirname is the root directory. It's a node thing that lets webpack know to go back to the root directory
    // regardless of where inside the project it is being ran.
    context : __dirname,
    // The entry point of our app
    entry : './js/ClientApp.js',
    devtool : 'eval',
    output  : {
        path : path.join(__dirname, '/public'),
        filename : 'bundle.js'
    },
    resolve :  {
        // When we use the import statement and do "import Blah from './Blah'" it will first check for a file called
        // Blah, without extension, then for Blah.js and then for Blah.json - after that, it will give up.
        extensions : ['.js', '.json']
    },
    stats : {
        colors : true,
        reasons : true,
        chunks : true
    },

    // Modules are about all the transforms that you want webpack to apply.
    module : {
        // a couple of rules. If it passes the test, run it through the loader
        rules : [
            {
                // In this case, test is a regex, but it can also be a function, if we need to be more granular
                // If it is a javascript file, run it with the babel-loader..

                // whitelisting: If it's not in my js folder, do not run it through Babel
                include : path.resolve(__dirname, 'js'),

                // Could also follow the blacklisting approach:
                // exclude : '/node_modules/',
                test : /\.js$/,
                loader  :'babel-loader'
            }
        ]
    }
}