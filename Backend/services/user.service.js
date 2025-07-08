import userModel from '../models/user.model.js';

export const createUser = async ({
    fullName, email, password
}) => {

    if (!fullName ||!email || !password) {
        throw new Error('fullName or email or password required');
    }
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    });
    return user;
}
