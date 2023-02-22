const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../config/config');

module.exports = (req, res, next) => {
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Acceso no autorizado" });
    } else {
        let token = req.headers.authorization.split(" ")[1];
        // Y comprueba su validez usando la clave de encriptación que tenemos en ../config/auth
        jsonwebtoken.verify(token, authConfig.SECRET, (err, decoded) => { 
            if(err) {
                //...devuelve un error
                res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
            } else {
                req.user = decoded.usuario[0]; 
                next();
            }
        })
    }
};