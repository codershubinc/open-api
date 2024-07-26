import moment from 'moment-timezone';
import countryTimezones from 'country-timezone';

const getTimezoneByCountryCode = (countryCode) => {
    const timezones = countryTimezones.getTimezones(countryCode);
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
        return `Current time in ${countryCode} (${timezone}): ${currentTime}`
    } else {
        return `No timezone found for country code: ${countryCode}`
    }
};


export default displayCurrentTimeInTimezone
