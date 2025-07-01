import Random from '../../../../utils/func/Random.js'
import { asyncHandler } from "../../../../utils/asyncHandler.js"
import { ApiError } from "../../../../utils/responce/api/error.api.js"
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js"
import { imageTypes, avatarStyles } from "../data.js"


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
    if (imageTypes.includes(query)) {
        imageType = query
    } else {
        return res.status(400).json(
            new ApiError(
                400,
                'Bad Request',
                [
                    'Fatal Error',
                    'Invalid image type',
                    imageTypes

                ]
            )
        )
    }
    const randomImage = Random.Avatar({
        avatarStyle: 'auto',
        imageType,
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
const RandomImageGanaratorTypeQuery = (req, res) => {
    let { query, avatarStyle, imageType } = req.params
    if (!query) query = 'auto'

    if (imageTypes.includes(imageType)) {
        imageType = imageType
    } else {
        return res.status(400).json(
            new ApiError(
                400,
                'Bad Request',
                [
                    'Fatal Error',
                    'Invalid image type',
                    {
                        image_types: imageTypes,
                        valid_image_styles: avatarStyles
                    },
                ]
            )
        )
    }

    if (avatarStyles.includes(avatarStyle)) {
        avatarStyle = avatarStyle.toLowerCase().replaceAll(' ', '-')
    } else {
        return res.status(400).json(
            new ApiError(
                400,
                'Bad Request',
                [
                    'Fatal Error',
                    'Invalid avatar style',
                    avatarStyles
                ]
            )
        )
    }
    const randomImage = Random.Avatar({
        avatarStyle: avatarStyle || 'auto',
        imageType: imageType,
        query: query
    })
    const randomImageData = {
        imageUrl: randomImage,
        imageType: imageType,
        query: query,
        avatarStyle: avatarStyle
    }

    return res.status(200).json(
        new ApiResponse(

            200,
            randomImageData

        )
    )

}

export {
    RandomImageGanarator,
    RandomImageGeneratorError,
    RandomImageGanaratorQuery,
    RandomImageGanaratorTypeQuery
}