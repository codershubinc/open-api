import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { ApiError } from "../../../../utils/responce/api/error.api.js"
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js"


const fromLink = asyncHandler(async (req, res) => {
    const { link } = req.query
    if (!link) {
        return res.status(404).json(
            new ApiError(
                404,
                'Bad Request',
                [
                    'Fatal Error',
                    'Must provide link',
                ]
            )
        )

    }
    const data = await fetch(String(`https://saavn.dev/api/songs?link=${link}`))
    const fetchedData = await data.json()

    if (!fetchedData) {
        return res.status(404).json(
            new ApiError(
                404,
                'Bad Request',
                [
                    'Fatal Error',
                    'Something went wrong', 
                ]
            )
        )
    }


    return res.status(200).json(
        new ApiResponse(
            200,
            fetchedData
        )
    )

})


export {
    fromLink
}