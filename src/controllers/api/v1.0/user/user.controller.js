import countryCodes from "../../../../lib/data/api/v1.0/country/allContryCodes.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import Address from "../../../../utils/func/address.js";
import Name from "../../../../utils/func/name.js";
import Random from "../../../../utils/func/Random.js";
import { ApiError } from "../../../../utils/responce/api/error.api.js";
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js";




const userInfoConstructor = async (contryCode) => {
    console.log('contryCode', contryCode);


    return {
        name: await Name.name(contryCode),
        address: await Address.code(contryCode),

    }

}

const user = asyncHandler(async (req, res) => {
    const { contryCode } = req.params
    // console.log('user', await userInfoConstructor(contryCode));
    console.log('contryCode', contryCode);
    if (contryCode === 'random') {
        return random(req, res)
    }
    try {
        const user = await userInfoConstructor(contryCode)
        console.log('user', user);
        
        return res.status(200).json(
            new ApiResponse(
                200,
                user,
                'Successfully fetched user info'
            )

        )
    } catch (error) {
        console.error('Error loading module:', error);
        console.log('ddgdrgrtgerter thtr hth trhrt');
        
        return res.status(404).json(
            new ApiError(
                404,
                'Something went wrong',
                {
                    error: 'Something went wrong',
                    status: 404,
                    try_these_codes: countryCodes,
                    or_try : 'random'
                }
            )

        )

    }



})

const random = asyncHandler(async (req, res) => {
    try {
        const contryCode = Random.FromAnArray(countryCodes)

        return res.status(200).json(
            new ApiResponse(
                200,
                await userInfoConstructor(contryCode),
                'Successfully fetched user info'
            )
        )
    } catch (error) {

        return res.status(404).json(
            new ApiError(
                404,
                'Something went wrong',
                [
                    'Failed to fetch user info',
                ]
            )
        )
    }
})


export { user, random }