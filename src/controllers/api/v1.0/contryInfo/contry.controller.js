import ContryInfo from "../../../../utils/func/contryInfo.js"
import { asyncHandler } from '../../../../utils/asyncHandler.js'
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js";
import { ApiError } from "../../../../utils/responce/api/error.api.js";
import getCountryNameByCountryCode from "../../../../utils/func/contryByContryCode.js";



const random = asyncHandler(async (req, res) => {

    const contryInfo = await ContryInfo.random()
    if (!contryInfo) {
        return res.status(401).json(
            new ApiError(
                401,
                'Bad Request',
                [
                    'Fatal Error',
                    'ISomething went wrong',
                ]
            )
        )
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                contry: {
                    name: getCountryNameByCountryCode(contryInfo[1]),
                    code: contryInfo[1]
                },
                data_contains: {
                    maleFirst: 'male first names',
                    femaleFirst: 'female first names',
                    lastName: 'last names',
                    citys: 'city names',
                    streets: 'street names',
                    states: 'state names',
                },
                data: contryInfo[0]

            },
            'Successfully fetched random contry info'
        )

    )
})
const code = asyncHandler(async (req, res) => {
    const { contryCode } = req.params
    // console.log('contryCode', contryCode); // cleaned

    if (contryCode === 'random') {
        return random(req, res)
    }
    const contryInfo = await ContryInfo.code(contryCode)

    if (!contryInfo) {
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
            {
                contry: {
                    name: getCountryNameByCountryCode(contryCode),
                    code: contryCode
                },
                data_contains: {
                    maleFirst: 'male first names',
                    femaleFirst: 'female first names',
                    lastName: 'last names',
                    citys: 'city names',
                    streets: 'street names',
                    states: 'state names',
                },
                data: contryInfo

            },
            'Successfully fetched contry info'
        )

    )
})
const special = asyncHandler(async (req, res) => {
    let { contryCode, type } = req.params
    // console.log('contryCode', contryCode , 'type ' , type); // cleaned

    let contryInfo


    if (contryCode === 'random') {
        let getInf = await ContryInfo.random()
        contryCode = getInf[1]
        contryInfo = getInf[0]
        if (!getInf[0][type]) {
            return res.status(404).json(
                new ApiError(
                    404,
                    'Bad Request',
                    [
                        'Fatal Error',
                        'Invalid contry info type',
                        {
                            valid_contry_info: [
                                "maleFirst",
                                "femaleFirst",
                                "lastName",
                                "citys",
                                "streets",
                                "states",
                            ],
                        }
                    ]
                )
            )
        }
    } else {
        // console.log('contryCode', contryCode);    // cleaned
        contryInfo = await ContryInfo.code(contryCode)
    }
    // console.log('contryInfo', contryInfo); // cleaned
    if (!contryInfo) {
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
    if (!contryInfo[type]) {
        return res.status(404).json(
            new ApiError(
                404,
                'Bad Request',
                [
                    'Fatal Error',
                    'Invalid contry info type',
                    {
                        valid_contry_info: [
                            "maleFirst",
                            "femaleFirst",
                            "lastName",
                            "citys",
                            "streets",
                            "states",
                        ],
                    }
                ]
            )
        )
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                contry: {
                    name: getCountryNameByCountryCode(contryCode),
                    code: contryCode
                },
                data_contains: [type],
                data: contryInfo[type]

            },
            'Successfully fetched contry info'
        )

    )
})

export { code, random, special }