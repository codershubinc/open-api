import bcrypt from 'bcrypt';

class crypt {
    async encrypt(id, saltRounds = 10) {
        return await bcrypt.hash(id, saltRounds);
    }
    async match(id, hash) {
        return await bcrypt.compare(id, hash);
    }
}
const Crypt = new crypt();

export default Crypt