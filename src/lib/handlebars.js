const { format } = require('timeago.js');

const helpers = {};

helpers.timeago = (created_ad) => {
    return format(created_ad);
};
module.exports = helpers;