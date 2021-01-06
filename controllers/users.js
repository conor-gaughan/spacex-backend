// require modules
const User = require('../modles/user')

// handle exports
module.exports = {
    signup
}

// define a signup controller action
    // create the user then send the user document as json 
async function signup(req, res) {
    try {
        const user = await User.create(req.body)
        res.json({ user })
    } catch (error) { 
        res.status(400).json({msg: 'bad request'});
    }
}