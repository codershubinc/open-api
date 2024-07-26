import ISO6391 from 'iso-3166-1';

const getCountryNameByCountryCode = (countryCode) => {
    const countryName = ISO6391.whereAlpha2(countryCode);

    if (countryName) {
        return countryName;
    } else {
        return null;
    }
};

export default getCountryNameByCountryCode;
