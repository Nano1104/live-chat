const jwt = require('jsonwebtoken');

const KET_TOKEN = "JWTKeyToken"

const generateToken = (user) => {
    const token = jwt.sign({user}, KEY_TOKEN, {expiresIn: '1h'})
    return token;
}

const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) token = req.cookies['userToken'];
    
    return token
}

module.exports = { generateToken, cookieExtractor }