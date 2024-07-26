import { getTimezonesWithCountryCode } from "country-timezone"
import Random from "./Random.js"
import ContryInfo from "./contryInfo.js"
import getCountryNameByCountryCode from "./contryByContryCode.js"


class address {


    async random() {

        let randomAdd = await ContryInfo.random()
        let addressData = randomAdd[0]
        let contryCode = randomAdd[1]
        // console.log('addressData', addressData);
        return {
            city: Random.FromAnArray(addressData?.citys),
            co_ordinates: {
                latitude: Random.FromAnArray(['', "-"]) + Random.MinToMax(0, 100) + ',' + Random.MinToMax(1000, 10000),
                longitude: Random.FromAnArray(['', "-"]) + Random.MinToMax(0, 100) + ',' + Random.MinToMax(1000, 10000),
            },
            state: Random.FromAnArray(addressData?.states),
            post_code: Random.MinToMax(100000, 999999),
            time_zone: {
                name: Random.FromAnArray(getTimezonesWithCountryCode()),
                offset: Random.FromAnArray(['', "-"]) + Random.MinToMax(0, 100),
            },
            street: {
                name: Random.FromAnArray(addressData?.streets),
                number: Random.MinToMax(1, 1000),
            },
            country: {
                code: contryCode,
                name: getCountryNameByCountryCode(contryCode),
                


            }
        }

    }

    async code(contryCode) {
        let addressData = await ContryInfo.code(contryCode)
        // console.log('addressData', addressData);
        if (!addressData) {
            return null
            
        }
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
            },
            street: {
                name: Random.FromAnArray(addressData?.streets),
                number: Random.MinToMax(1, 1000),
            },
            country: {
                code: contryCode,
                name: getCountryNameByCountryCode(contryCode)
            }
        }
    }

}

const Address = new address()

export default Address
