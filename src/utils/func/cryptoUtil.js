import bcrypt from 'bcrypt';

class crypt {
    async encrypt(id) {
        try {
            return await bcrypt.hash(id + ' ', 10);
        } catch (error) {
            // console.log('crypt error', error);
            throw new Error(error)
            
        }
    }

}
const Crypt = new crypt();

export default Crypt