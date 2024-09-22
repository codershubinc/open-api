import { asynchandler } from '../../../../../utils/asyncHandler.js'
import { ApiResponse } from '../../../../../utils/responce/api/responce.api.js'

const globle = asynchandler(async (req, res) => {
    return res.status(200).json(
        new ApiResponse(
            200,
            { message: 'hi' },
            'hi'
        )
    )
})


export {
    globle
}