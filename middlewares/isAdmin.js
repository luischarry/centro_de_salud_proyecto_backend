module.exports = async (req, res, next) => {
    if(req.user && req.user.rol == "admin"){
        next();
    }else {
        res.status(401).send(`Forbidden access`)
    }
};