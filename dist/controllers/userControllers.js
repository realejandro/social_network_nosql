import User from "../models/User.js";
export const getAllUsers = async (_req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: error
        });
    }
};
export const getUserById = async (_req, res) => {
    try {
        const user = await User.findOne({ _id: _req.params.idUser }).populate('thoughts');
        if (!user?.id) {
            res.status(404).json({ message: "It didn't find user" });
        }
        else {
            res.status(201).json(user);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: error
        });
    }
};
export const createUser = async (_req, res) => {
    const user = _req.body;
    try {
        await User.create(user);
        res.json({
            ok: true,
            message: "User created. Check"
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: error
        });
    }
};
export const updateUserById = async (_req, res) => {
    try {
        const user = await User.findByIdAndUpdate({ _id: _req.params.idUser }, { $set: _req.body }, { new: true });
        if (!user) {
            res.status(404).json({ message: "User not founded" });
        }
        res.json({
            ok: true,
            message: "User updated. Check"
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: error
        });
    }
};
export const deleteUserById = async (_req, res) => {
    try {
        const user = await User.findByIdAndDelete({ _id: _req.params.idUser });
        if (!user) {
            res.status(404).json({ message: "User not founded" });
        }
        res.json({
            ok: true,
            message: "User deleted"
        });
        return;
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: error
        });
    }
};
export const addFriend = async (_req, res) => {
    try {
        const { idUser, idFriend } = _req.params;
        const user = await User.findByIdAndUpdate({ _id: idUser }, { $addToSet: { friends: idFriend } }, { new: true });
        if (!user) {
            res.status(404).json({
                message: "Not founded",
                user
            });
        }
        res.status(200).json({
            ok: true
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const deleteFriend = async (_req, res) => {
    try {
        const { idUser, idFriend } = _req.params;
        const user = await User.findOneAndUpdate({ _id: idUser }, { $pull: { friends: idFriend } }, { new: true });
        if (!user) {
            res.status(404).json({
                message: "Not founded",
                user
            });
        }
        res.status(200).json({
            ok: true
        });
    }
    catch (error) {
        console.log(error);
    }
};
