/*
 * Title: Routes
 * Description: Application Routes
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { sample } = require('./handlers/routeHandlers/sampleHandler');
const routes = {
    '' : sample,
     'create': sampleHandler,
};

module.exports = routes;
