import Random from '../../../../utils/func/Random.js'
import { asyncHandler } from "../../../../utils/asyncHandler.js"
import { ApiError } from "../../../../utils/responce/api/error.api.js"
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js"


const RandomImageGanarator = asyncHandler(async (req, res) => {

    const randomImage = Random.Avatar({
        avatarStyle: 'auto'
    })
    const randomImageData = {
        imageUrl: randomImage,
        imageType: 'svg'
    }

// console.log('randomImageData', randomImageData);


    return res.status(200).json(
        new ApiResponse(

            200,
            randomImageData

        )
    )

})

const RandomImageGeneratorError = asyncHandler(async (req, res) => {
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

const RandomImageGanaratorQuery = asyncHandler(async (req, res) => {
    const { query } = req.params
    if (!query) {
        return res.status(400).json(
            new ApiError(
                400,
                'Bad Request',
                [
                    'Fatal Error',
                    'Must provide query'
                ]
            )
        )
    }
    let imageType
    if (['png',
        'jpg',
        'jpeg',
        'svg',
        'auto',].includes(query)) {
        imageType = query 
    } else {
        return res.status(400).json(
            new ApiError(
                400,
                'Bad Request',
                [
                    'Fatal Error',
                    'Invalid image type'
                ]
            )
        )
    }
    const randomImage = Random.Avatar({
        avatarStyle: 'auto',
        imageType: imageType,
    })
    const randomImageData = {
        imageUrl: randomImage,
        imageType: imageType,
        query: query
    }

    return res.status(200).json(
        new ApiResponse(

            200,
            randomImageData

        )
    )

})
export {
    RandomImageGanarator,
    RandomImageGeneratorError,
    RandomImageGanaratorQuery
}