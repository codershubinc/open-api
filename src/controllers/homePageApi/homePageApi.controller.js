import CONSTANTS from "../../../constants/api.constants.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/responce/api/responce.api.js";

const homePageApi = asyncHandler(async (req, res) => {
    const apiResponce = {
        message: 'Successfully fetched home page api',
        status: 200,
        data: {
            message: 'Successfully fetched home page api',
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
                    }
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
                    }
                },
                more: {
                    more: "We are adding more apis soon"
                }
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