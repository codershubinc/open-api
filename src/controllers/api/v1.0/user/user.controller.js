import Hobby from "../../../../lib/data/api/v1.0/common/hobbys.js";
import countryCodes from "../../../../lib/data/api/v1.0/country/allContryCodes.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import Address from "../../../../utils/func/address.js";
import Crypt from "../../../../utils/func/cryptoUtil.js";
import JWt from "../../../../utils/func/jwt.js";
import Name from "../../../../utils/func/name.js";
import Random from "../../../../utils/func/Random.js";
import { ApiError } from "../../../../utils/responce/api/error.api.js";
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js";




const userInfoConstructor = async (contryCode) => {
    console.log('contryCode', contryCode);


    return {

        user: {
            name: await Name.name(contryCode),
            id: JWt.encrypt(Random.MinToMax(10000000, 99999999)),
            password: await Crypt.encrypt(Random.MinToMax(10000000, 99999999)),
            prefs: {
                avatar: Random.Avatar({ avatarStyle: 'auto' }),
                secret: JWt.encrypt(Random.MinToMax(10000000, 99999999)),
                mode: Random.FromAnArray(['light', 'dark']),
                devices: {
                    browser: Random.FromAnArray(['chrome', 'firefox', 'safari', 'edge']),
                    os: Random.FromAnArray(['windows', 'mac', 'linux']),
                    location: contryCode,
                },
                info: {
                    hobby: [Random.FromAnArray(Hobby), Random.FromAnArray(Hobby), Random.FromAnArray(Hobby)],
                }

            },
            avatar: {
                avatar1: Random.Avatar({ avatarStyle: 'auto' }),
                avatar2: Random.Avatar({ avatarStyle: 'auto' }),
                avatar3: Random.Avatar({ avatarStyle: 'auto' }),
                banner: Random.Avatar({ avatarStyle: 'auto' }),
                thumbnail: Random.Avatar({ avatarStyle: 'auto' }),
                avatarSecret: await Crypt.encrypt(Random.MinToMax(10000000, 99999999)),
            }
        },
        address: await Address.code(contryCode),
        document_id: JWt.encrypt(Random.alphas(10))
    }

}

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


const user = asyncHandler(async (req, res) => {
    const { contryCode } = req.params
    // console.log('user', await userInfoConstructor(contryCode));
    console.log('contryCode', contryCode);
    if (contryCode === 'random') {
        return random(req, res)
    }
    try {
        const user = await userInfoConstructor(contryCode)
        // console.log('user', user);
        // console.log('figjdfioj' , Random.id(100));

        return res.status(200).json(
            new ApiResponse(
                200,
                user,
                'Successfully fetched user info'
            )

        )
    } catch (error) {
        console.error('Error loading module:', error);
        // console.log('ddgdrgrtgerter thtr hth trhrt');

        return res.status(404).json(
            new ApiError(
                404,
                'Something went wrong',
                {
                    error: 'Something went wrong',
                    status: 404,
                    try_these_codes: countryCodes,
                    or_try: 'random'
                }
            )

        )

    }



})



export { user, random }