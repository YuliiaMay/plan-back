const path = require('path');
const fs = require("fs/promises");
const Jimp = require('jimp');
const { User } = require('../../models');
const { ctrlWrapper } = require('../../helpers');



const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const {path: tempUpload, originalname} = req.file;
    // const { originalname } = req.file;
    const fileName = `${_id}_${originalname}`;

    const tmpDir = path.join(__dirname, "../../", "tmp", originalname);
    const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

    const resultUpload = path.join(avatarsDir, fileName);
    

    const image = await Jimp.read(tmpDir);
    await image.resize(250, 250).writeAsync(resultUpload);
    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join("avatars", fileName);
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({
        avatarURL
    })
};

module.exports = {
    updateAvatar: ctrlWrapper(updateAvatar),
}