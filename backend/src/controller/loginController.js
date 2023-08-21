import User from '../models/userModels.js';
import bcrypt from 'bcrypt';
import { createToken } from '../utils/jwt.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(400).json({
        message: ['The email does not exist'],
      });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ['The password is incorrect'],
      });
    }

    const token = await createToken({
      id: userFound._id,
      name: userFound.name,
      lastname: userFound.lastname,
    });

    res.cookie('token', token, {
      httpOnly: process.env.NODE_ENV !== 'development',
      secure: true,
      sameSite: 'none',
    });

    res.status(200).send('logged successfully');
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
