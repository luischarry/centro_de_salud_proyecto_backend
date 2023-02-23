const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../config/config');

module.exports = (req, res, next) => {
    if(!req.headers.authorization) {
        res.status(401).send(`Forbidden access`);
    } else {
        let token = req.headers.authorization.split(" ")[1];
        // Y comprueba su validez usando la clave de encriptación que tenemos en ../config/auth
        jsonwebtoken.verify(token, authConfig.SECRET, (err, decoded) => { 
            if(err) {
                //...devuelve un error
                res.status(500).json({ msg: "problem decoding token", err });
            } else {
                req.user = decoded.usuario[0]; 
                next();
            }
        })
    }
};