/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */
// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    
    callback(200, {
        message: 'This is a sample url',
    });
};
handler.sample = (requestProperties, callback) => {
    
    callback(200, {
        message: 'This is a sample url 2',
    });
};

module.exports = handler;
