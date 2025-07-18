const Room = require('../models/Room');

exports.createRoom = async (req, res) => {
    const { roomNumber, capacity, hostel } = req.body;
    try {
        const newRoom = await Room.create({ roomNumber, capacity, hostel });
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
 
