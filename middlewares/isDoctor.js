const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../config/config');

module.exports = async (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).send(`Forbidden access`);
    } else {
        let token = req.headers.authorization.split(" ")[1]
        jsonwebtoken.verify(token, authConfig.SECRET, (err, decoded) => {
            if (err) {
                res.status(500).json({ msg: "problem decoding token", err });
            } else if(decoded.rol==="doctor"){
                next();
            }else{
                res.status(401).send(`Forbidden access`);
            }
        })
    }
};