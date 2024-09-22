import { asyncHandler } from "../../../../utils/asyncHandler.js";
import Random from "../../../../utils/func/Random.js";
import { ApiError } from "../../../../utils/responce/api/error.api.js";
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js";
import gitUser from "./commonFuncs.js";


const user = asyncHandler(async (req, res) => {
    const { id, user_name } = req.query
    if (!id && !user_name) {
        return res.status(400).json(
            new ApiError(
                400,
                'Bad Request',
                [
                    'Fatal Error',
                    'Must provide id or user_name',
                    'or you can use "/user/random" route'
                ]
            )
        )
    }

    try {
        const data = await fetch(id ? `https://api.github.com/user/${id}` : `https://api.github.com/users/${user_name}`)
        const dataJson = await data.json()
        return res.status(200).json(
            new ApiResponse(
                dataJson.status,
                dataJson,
                dataJson.message
            )
        )
    } catch (error) {

        return res.status(404).json(
            new ApiError(
                404,
                'Bad Request',
                [
                    'Fatal Error',
                    'Something went wrong'
                ]
            )
        )

    }
})

const random = asyncHandler(async (req, res) => {
    try {
        let dataJson = await gitUser()
        console.log('res user 0', dataJson);


        if (dataJson.status === 404) {
            dataJson = await gitUser()

        }

        return res.status((dataJson.status === 404 ? 404 : 200)).json(
            new ApiResponse(
                dataJson.status === 404 ? 404 : 200,
                dataJson.status != 404 ? dataJson : null,
                dataJson.message
            )
        );

    } catch (error) {
        return res.status(404).json(
            new ApiError(
                404,
                'Bad Request',
                [
                    'Fatal Error',
                    error.message || 'Something went wrong'
                ]
            )
        );
    }
});

const avatarRandom = asyncHandler(async (req, res) => {
    // https://avatars.githubusercontent.com/u/90494823
    try {
        let dataJson = await gitUser()

        if (dataJson.status === 404) {
            dataJson = await gitUser()

        }
        return res.status((dataJson.status === 404 ? 404 : 200)).json(
            new ApiResponse(
                dataJson.status === 404 ? 404 : 200,
                dataJson.status != 404 ? dataJson?.avatar_url : null,
                dataJson.message
            )
        );
    } catch (error) {
        return res.status(400).json(

            new ApiError(
                404,
                'Bad Request',
                [
                    'Fatal Error',
                    error.message || 'Something went wrong'
                ]
            )

        )
    }


})



export {
    user,
    random,
    avatarRandom
}