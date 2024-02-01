const User = require('../modules/user'); 

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

const createUser = async (req, res) => {
    const { nom, prenom, email } = req.body;
    try {
        const newUser = new User({ nom, prenom, email });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

module.exports = { getUsers, createUser };
