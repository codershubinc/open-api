import Random from "../../../../utils/func/Random.js";

async function gitUser() {
    let dataJson
    async function fetchRandom() {
        const userId = Random.MinToMax(1, 99999999);
        const response = await fetch(`https://api.github.com/user/${userId}`);

        let taJson = await response.json();
        dataJson = taJson
        return taJson
    }

    await fetchRandom();



    // If you need to retry on 404 status
    if (dataJson.message === 'Not Found') {
        await fetchRandom();
    }
    // If you need to retry on 404 status
    if (dataJson.message === 'Not Found') {
        await fetchRandom();
    }
    return dataJson
}

export default gitUser