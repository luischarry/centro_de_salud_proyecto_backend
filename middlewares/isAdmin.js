module.exports = async (req, res, next) => {
    console.log(req.user)
    if(req.user && req.user.rol == "admin"){
        next();
    }else {
        res.status(401).send(`Forbidden access`)
    }
};