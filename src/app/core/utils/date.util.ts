import * as moment from 'moment';

export class DateUtil {
    static calculateAge(birthdate: string) {
        let age;
        if (birthdate) {
            const date = moment(birthdate, 'DD/MM/YYYY').toDate();
            let timeDiff = Math.abs(Date.now() - date.getTime());
            age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        }
        return age;
    }
}