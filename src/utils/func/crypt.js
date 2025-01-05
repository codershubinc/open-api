import pkg from 'crypto-js';
const { AES, enc } = pkg;
import crypto from 'crypto';

// Hash an email using SHA-256
const cryptEmail = (email) => {
    try {
        return crypto.createHash('sha256').update(email.trim().toLowerCase()).digest('hex');
    } catch (error) {
        throw new Error("Error in cryptEmail: " + error);
    }
};


const secretKey = 'your-256-bit-secret';
class encryptObject {
    encryptString(
        str,
        key
    ) {
        try {
            const ciphertext = AES.encrypt(str, key);
            return encodeURIComponent(ciphertext.toString());
        } catch (error) {
            console.log('Error in encryptString: ', error);

            throw new Error("Error in encryptString: " + error);

        }
    };
    decryptString(
        encryptedStr,
        key
    ) {
        try {
            const decodedStr = decodeURIComponent(encryptedStr);
            return AES.decrypt(decodedStr, key).toString(enc.Utf8);
        } catch (error) {
            console.log('Error in decryptString: ', error);
            throw new Error("Error in decryptString: " + error);
        }
    };

}
const cryptoUtil = new encryptObject();
export {
    cryptEmail,
    cryptoUtil
}