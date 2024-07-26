import Random from "./Random.js"


class contryInfo {


    async random() {
        const country = [
            "AU",
            "BR",
            "CA",
            "CH",
            "DE",
            "DK",
            "ES",
            "GB",
            "IN",
            "US",
        ]


        let Rand
        // Function to dynamically import the module
        const loadModule = async () => {
            const RandomCountrySelector = Random.FromAnArray(country)
            console.log('R', RandomCountrySelector);

            Rand = RandomCountrySelector
            try {
                const modulePath = `../data/api/v1.0/country/${RandomCountrySelector}/index.js`;
                const data = await import(modulePath);
                return data;
            } catch (error) {
                console.error('Error loading module:', error);
                return null
            }
        };
        return [await loadModule() , Rand ]
    }

    async code(contryCode) {
        try {
            const modulePath = `../data/api/v1.0/country/${contryCode}/index.js`;
            const data = await import(modulePath);
            return data;
        } catch (error) {
            // console.error('Error loading module:', error);
            return null
        }

    }
    
}

const ContryInfo = new contryInfo()

export default ContryInfo