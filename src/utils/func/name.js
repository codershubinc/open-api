import ContryInfo from "./contryInfo.js";
import Random from "./Random.js";

class name {

    async #_nameCreator(nameData, contryCode) {
        try {
            let first_name = Random.FromAnArray(nameData?.first_names)
            let middle_name = Random.FromAnArray(nameData?.middle_names)
            let last_name = Random.FromAnArray(nameData?.last_names)

            return {
                first_name: first_name,
                middle_name: middle_name,
                last_name: last_name,
                full_name: first_name + ' ' + middle_name + ' ' + last_name,
                prefix: Random.FromAnArray(['Dr.', 'Mr.', 'Mrs.', 'Ms.']),
                title: Random.FromAnArray(['Dr.', 'Mr.', 'Mrs.', 'Ms.']),
                gender: Random.FromAnArray(['male', 'female']),
                contryCode: contryCode
            }

        } catch (error) {
            return null
        }
    }

    async name(contryCode) {
        try {
            // console.log('contryCode', contryCode); // cleaned

            let name = await ContryInfo.code(contryCode)

            let g = Random.FromAnArray(['male', 'female'])
            let gn
            if (g === 'male') {
                gn = name['maleFirst']
            } else {
                gn = name['femaleFirst']
            }
            let nameData = {
                first_names: gn,
                last_names: name['lastName'],
                middle_names: name['maleFirst'],
                gender: g,

            }
            // console.log('name', nameData); // cleaned

            return await this.#_nameCreator(nameData, contryCode)
        }

        catch (error) {
            throw new Error(error);
        }
    }
}
const Name = new name()
export default Name
