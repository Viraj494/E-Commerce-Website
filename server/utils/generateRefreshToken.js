import UserModel from "../models/user.model.js"

const generateRefreshToken = async(userId) => {
        const token = await jwt.sign({ id : userId},
            process.env.SECRET_KEY_ACCESS-TOKEN,
            {expiresIn : '7d'}
        )

        const updateRefreshTokenUser = await UserModel.updateOne(
            { _id : userId },
            {
                refresh_token : token
            }
        )
    
        return token
}


export default generateRefreshToken