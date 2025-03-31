import countryCodes from "../../lib/data/api/v1.0/country/allContryCodes.js";
import Random from "./Random.js"

class contryInfo {

    async fetch(contryCode) {
        try {
            const modulePath = `../../lib/data/api/v1.0/country/${contryCode}/index.js`;
            const data = await import(modulePath);
            return data;
        } catch (error) {

            return null
        }

    }
    async random() {
        let Rand = Random.FromAnArray(countryCodes)

        return [await this.fetch(Rand), Rand]
    }

    async code(contryCode) {
        try {
            const data = await this.fetch(contryCode)
            return data;
        } catch (error) {

            return null
        }

    }

}

const ContryInfo = new contryInfo()

export default ContryInfo