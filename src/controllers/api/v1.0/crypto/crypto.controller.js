import { asyncHandler } from '../../../../utils/asyncHandler.js';
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js";
import { ApiError } from "../../../../utils/responce/api/error.api.js";
import { cryptoUtil } from "../../../../utils/func/crypt.js";

// Encrypt string
const cryptStr = asyncHandler(async(req, res) => {
    const { str, key } = req.method === "GET" ? req.query : req.body;;

    if (!str || typeof str !== 'string') {
        return res.status(400).json(
            new ApiError(
                400,
                'Bad Request', [
                    'Fatal Error',
                    'Invalid string provided.',
                    { valid_string: 'string', key: 'cryptedStr' }
                ]
            )
        );
    }

    if (!key) {
        return res.status(400).json(
            new ApiError(
                400,
                'Bad Request', [
                    'Fatal Error',
                    'Key is required.',
                    { valid_key: 'key' }
                ]
            )
        );
    }

    try {
        const cryptedStr = cryptoUtil.encryptString(str, key);
        return res.status(200).json(
            new ApiResponse(
                200, {
                    cryptedStr,
                    key,
                    str
                },
                'Successfully encrypted the string.'
            )
        );
    } catch (error) {
        console.error('Encryption Error:', error); // Use logging library in production
        return res.status(500).json(
            new ApiError(
                500,
                'Internal Server Error', [
                    'Fatal Error',
                    'Something went wrong during encryption.',
                    error.message // Avoid exposing stack trace in production
                ]
            )
        );
    }
});

// Decrypt string
const decryptStr = asyncHandler(async(req, res) => {
    const { strCrypted, key } = req.method === "GET" ? req.query : req.body;

    if (!strCrypted || typeof strCrypted !== 'string') {
        return res.status(400).json(
            new ApiError(
                400,
                'Bad Request', [
                    'Fatal Error',
                    'Invalid encrypted string provided.',
                    { valid_string: 'string', key: 'strCrypted' }
                ]
            )
        );
    }

    if (!key) {
        return res.status(400).json(
            new ApiError(
                400,
                'Bad Request', [
                    'Fatal Error',
                    'Key is required for decryption.',
                    { valid_key: 'key' }
                ]
            )
        );
    }

    try {
        const decryptedStr = cryptoUtil.decryptString(strCrypted, key);
        return res.status(200).json(
            new ApiResponse(
                200, {
                    decryptedStr,
                    key,
                    strCrypted,
                    note: 'If data is not decrypted properly, ensure the key is correct.'
                },
                'Successfully decrypted the string.'
            )
        );
    } catch (error) {
        console.error('Decryption Error:', error); // Use logging library in production
        return res.status(500).json(
            new ApiError(
                500,
                'Internal Server Error', [
                    'Fatal Error',
                    'Something went wrong during decryption.',
                    error.message // Avoid exposing stack trace in production
                ]
            )
        );
    }
});

export { cryptStr, decryptStr };