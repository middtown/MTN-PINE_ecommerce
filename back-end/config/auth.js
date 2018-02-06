const localHost = process.env.AARONSLOCALMACHINE || process.env.JOSHUASLOCALMACHINE || process.env.RICKYSLOCALMACHINE || require("../env.js");
let sequelize = new Sequelize(process.env.DATABASE_URL || localHost.aaron || localHost.josh || localHost.ricky );


// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : fId, // your App ID
        'clientSecret'  : fS , // your App Secret
        'callbackURL'   : 'http://localhost:3000/api/home'
    },
    'googleAuth' : {
        'clientID'      : gId,
        'clientSecret'  : gS,
        'callbackURL'   : 'http://localhost:3000/api/home'
    }

};
