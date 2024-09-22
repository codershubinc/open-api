import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { cryptEmail } from "../../../../utils/func/crypt.js";
import { ApiError } from "../../../../utils/responce/api/error.api.js";
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js";


const email = asyncHandler(
    async (
        req, res
    ) => {

        const { e, s } = req.query

        if (!e) {

            return res.status(401).json(
                new ApiError(
                    401,
                    "please provide email",
                    [
                        "please provide email",
                        "email is required"
                    ]
                )
            )

        }

        const cryptedMail = cryptEmail(e)
        return res.status(200).json(
            new ApiResponse(
                200,
                {
                    "email": e,
                    "hash": cryptedMail,
                    "avatar_link": `https://www.gravatar.com/avatar/${cryptedMail}?s=${s || 500}&d=identicon`
                },
                'Success'
            )
        )
    }
)

const hash = asyncHandler(
    async (
        req, res
    ) => {
        const { h, s } = req.query
        if (!hash) {

            return res.status(401).json(
                new ApiError(
                    401,
                    "please provide hash",
                    [
                        "please provide hash",
                        "or you can use '/email' route if hash not available"
                    ]
                )
            )

        }

        return res.status(200).json(
            new ApiResponse(
                200,
                {
                    "hash": hash,
                    "avatar_link": `https://www.gravatar.com/avatar/${h}?s=${s || 500}&d=identicon`
                },
                'Success'
            )
        )


    }
)

export {
    email,
    hash
}