import moment from 'moment-timezone';
import { getTimezonesWithCountryCode } from "country-timezone"

const getTimezoneByCountryCode = (countryCode) => {
    const timezones = getTimezonesWithCountryCode(countryCode);
    if (timezones && timezones.length > 0) {
        return timezones[0];
    } else {
        return null;
    }
};

const displayCurrentTimeInTimezone = (countryCode) => {
    const timezone = getTimezoneByCountryCode(countryCode);
    if (timezone) {
        const currentTime = moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss');
        return `Current time in ${countryCode} : ${currentTime}`
    } else {
        return `No timezone found for country code: ${countryCode}`
    }
};


export default displayCurrentTimeInTimezone 
