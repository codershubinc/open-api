import Random from "../../../../utils/func/Random.js"
import smallUsers from "../../../../lib/data/userData0.js"
import users from "../../../../lib/data/userData1.js"
import bigUsers from "../../../../lib/data/userData2.js"
import { asyncHandler } from "../../../../utils/asyncHandler.js"
import { ApiError } from "../../../../utils/responce/api/error.api.js"
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js"


const RandomUserGanarator = asyncHandler(async (req, res) => {

    const randomUser = Random.FromAnArray(smallUsers)
    randomUser.avatar = Random.Avatar({ avatarStyle: 'auto' })
    const randomUserData = {
        user: randomUser
    }

    return res.status(200).json(
        new ApiResponse(

            200,
            randomUserData,
            'Successfully fetched random user'

        )
    )

})

const RandomUserGeneratorError = asyncHandler(async (req, res) => {
    return res.status(400).json(
        new ApiError(
            400,
            'Bad Request',
            [
                'Fatal Error',
                'General Access prohibited by policy'
            ]
        )
    );
});

const RandomBigUserGanarator = asyncHandler(async (req, res) => {
    const randomUser = Random.FromAnArray(users)
    randomUser.avatar = Random.Avatar({ avatarStyle: 'auto' })
    const randomUserData = {
        user: randomUser
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            randomUserData,
            'Successfully fetched random user'
        )
    )

})

const RandomBig0UserGanarator = asyncHandler(async (req, res) => {
    const randomUser = Random.FromAnArray(bigUsers)
    randomUser.avatar = Random.Avatar({ avatarStyle: 'auto' })
    const randomUserData = {
        user: randomUser
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            randomUserData,
            'Successfully fetched random user'
        )
    )
})
export {
    RandomUserGanarator,
    RandomUserGeneratorError,
    RandomBigUserGanarator,
    RandomBig0UserGanarator
}