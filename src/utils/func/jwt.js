import jwt from 'jsonwebtoken';
class jwtClass {
    encrypt(id = 'your-id', secret = 'your-256-bit-secret') {
        try {
            return jwt.sign(id, secret);

        } catch (error) {
            throw new Error(error)
        }
    }
    decrypt(token, secret = 'your-256-bit-secret') {
        try {
            return jwt.verify(token, secret);
        } catch (error) {
            throw new Error(error)
        }
    }
}

const JWt = new jwtClass();

export default JWt