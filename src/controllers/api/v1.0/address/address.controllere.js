import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { ApiError } from "../../../../utils/responce/api/error.api.js";
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js";
import Address from "../../../../utils/func/address.js";



const random = asyncHandler(async (req, res) => {
    try {

        const addressData = await Address.random()
        if (!addressData) {
            return res.status(401).json(
                new ApiError(
                    401,
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
                addressData,
                'Successfully fetched random address'
            )

        )
    } catch (error) {
        return res.status(401).json(
            new ApiError(
                401,
                'Bad Request',
                [
                    'Fatal Error',
                    'Something went wrong',
                ]
            )
        )
    }
})
const code = asyncHandler(async (req, res) => {
    try {
        const { contryCode } = req.params
        const addressData = await Address.code(contryCode)
        // console.log('addressData', addressData); // cleaned

        if (contryCode === 'random') {
            return random(req, res)
        }
        if (!addressData) {
            return res.status(404).json(
                new ApiError(
                    404,
                    'Bad Request',
                    [
                        'Fatal Error',
                        'Invalid contry code',
                        {
                            valid_contry_codes: [
                                "AU",
                                "BR",
                                "CA",
                                "CH",
                                "DE",
                                "DK",
                                "ES",
                                "GB",
                                "IN",
                                "US",
                            ],
                            or_you_can_use_random: 'random'
                        }
                    ]
                )
            )
        }
        return res.status(200).json(
            new ApiResponse(
                200,
                addressData,
                `Successfully fetched random  address in ${contryCode} `
            )
        )
    } catch (error) {
        return res.status(401).json(
            new ApiError(
                401,
                'Bad Request',
                [
                    'Fatal Error',
                    'Something went wrong',
                ]
            )
        )
    }
})

export {
    code,
    random
}
