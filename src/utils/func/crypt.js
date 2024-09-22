import crypto from 'crypto'


const cryptEmail = (

    email

) => {

    return crypto.createHash('sha256').update(email?.trim().toLowerCase()).digest('hex')

}



export {
    cryptEmail
}