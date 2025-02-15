import CONSTANTS from "../../../constants/api.constants.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/responce/api/responce.api.js";

const homePageApi = asyncHandler(async (req, res) => {
    const apiResponce = {
        message: 'Successfully fetched home page api',
        status: 200,
        data: {
            api: {
                endpoint: CONSTANTS.API_ENDPOINT,
                random_image: {
                    auto: "/v0.1/random_image",
                    query: {
                        url: "/v0.1/random-image/query",
                        query: [
                            "png",
                            "jpg",
                            "jpeg",
                            "svg",
                            "auto"
                        ]
                    },
                    img: "/v0.1/random_image/img/:query",
                    t: "/v0.1/random_image/t/:avatarStyle/:query/:imageType"
                },
                random_user: {
                    auto: {
                        url: "/v0.1/random_user"
                    },
                    big: {
                        url: "/v0.1/random_user/big"
                    },
                    big0: {
                        url: "/v0.1/random_user/big0"
                    },
                    any: "/v0.1/random_user/:any/:query"
                },
                contry: {
                    code: "/v1.0/contry/:contryCode",
                    type: "/v1.0/contry/:contryCode/:type",
                    base: "/v1.0/contry",
                    random: "/v1.0/contry/random"
                },
                address: {
                    code: "/v1.0/address/:contryCode",
                    base: "/v1.0/address",
                    random: "/v1.0/address/random"
                },
                user: {
                    base: "/v1.0/user",
                    code: "/v1.0/user/:contryCode"
                },
                saavnCDN: "/v1.0/saavnCDN",
                github: {
                    user: "/v1.0/github/user",
                    randomUser: "/v1.0/github/user/random",
                    randomAvatar: "/v1.0/github/avatar/random"
                },
                gravatar: "/v1.0/gravatar",
                crypt: {
                    c: {
                        post: "/v1.0/crypt/c",
                        get: "/v1.0/crypt/c"
                    },
                    d: {
                        post: "/v1.0/crypt/d",
                        get: "/v1.0/crypt/d"
                    }
                },
                home: "/"
            }
        }
    }

    return res.status(200).json(
        new ApiResponse(
            apiResponce
        )
    )
})

export { homePageApi }