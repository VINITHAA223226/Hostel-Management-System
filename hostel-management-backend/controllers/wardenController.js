const Warden = require('../models/Warden');

exports.createWarden = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newWarden = await Warden.create({ name, email, password });
        res.status(201).json(newWarden);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getWardens = async (req, res) => {
    try {
        const wardens = await Warden.find();
        res.status(200).json(wardens);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
 
