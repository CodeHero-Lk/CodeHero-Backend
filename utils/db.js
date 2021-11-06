const { Sequelize } = require('sequelize');

let sequelize;

exports.connect = () => {
    return new Promise((resolve, reject) => {
        const {
            MYSQL_HOST,
            MYSQL_PORT,
            MYSQL_USERNAME,
            MYSQL_PASSWORD,
            MYSQL_DBNAME,
        } = process.env;
        sequelize = new Sequelize(
            MYSQL_DBNAME,
            MYSQL_USERNAME,
            MYSQL_PASSWORD,
            {
                host: `${MYSQL_HOST}:${MYSQL_PORT}`,
                dialect: 'mysql',
            }
        );
        sequelize
            .authenticate()
            .then(() => {
                resolve();
            })
            .catch(reject);
    });
};

exports.disconnect = () => {
    return sequelize.disconnect();
};
