import { getTimezonesWithCountryCode } from "country-timezone"
import Random from "./Random.js"
import ContryInfo from "./contryInfo.js"
import getCountryNameByCountryCode from "./contryByContryCode.js"
import displayCurrentTimeInTimezone from "./timeZoneByContryCode.js"
import JWt from "./jwt.js"


class address {

    async #_addressCreator(addressData, contryCode) {
        try {
            return {
                city: Random.FromAnArray(addressData?.citys),
                co_ordinates: {
                    latitude: Random.FromAnArray(['', "-"]) + Random.MinToMax(0, 100) + ',' + Random.MinToMax(1000, 10000),
                    longitude: Random.FromAnArray(['', "-"]) + Random.MinToMax(0, 100) + ',' + Random.MinToMax(1000, 10000),
                },
                state: Random.FromAnArray(addressData?.states),
                post_code: Random.MinToMax(100000, 999999),
                time_zone: {
                    name: Random.FromAnArray(getTimezonesWithCountryCode(contryCode)),
                    offset: Random.FromAnArray(['', "-"]) + Random.MinToMax(0, 100),
                    zone: displayCurrentTimeInTimezone(contryCode)

                },
                street: {
                    name: Random.FromAnArray(addressData?.streets),
                    number: Random.MinToMax(1, 1000),
                    encrypted_home_name: JWt.encrypt(Random.alphas(10))
                },
                country: {
                    code: contryCode,
                    name: getCountryNameByCountryCode(contryCode)
                }
            }
        } catch (error) {
            throw new Error(error);

        }
    }



    async random() {

        let randomAdd = await ContryInfo.random()

        return this.#_addressCreator(randomAdd[0], randomAdd[1])

    }

    async code(contryCode) {
        try {
            let addressData = await ContryInfo.code(contryCode)
            // console.log('addressData', addressData); // cleaned
            if (!addressData) {
                return null
            }
            return this.#_addressCreator(addressData, contryCode)
        } catch (error) {
            throw new Error(error);
        }

    }

}

const Address = new address()

export default Address
