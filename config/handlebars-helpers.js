const moment = require('moment');


module.exports = {
    generateDate: function(dateadd, format){
        return moment(dateadd).format('l'); 
    }

};
