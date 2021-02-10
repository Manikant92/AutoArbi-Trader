exports.mysql_data = {
    host: process.env.HOST_NAME,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    insecureAuth : true
  };

exports.secret = {
    secret: process.env.SECRET
};

exports.typingDna = {
    typingDna_apiKey: process.env.TYPINGDNA_APIKEY,
    typingDna_secret: process.env.TYPINGDNA_APISECRET
}