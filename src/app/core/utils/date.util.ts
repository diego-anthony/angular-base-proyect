import * as moment from 'moment';
import { DateFormat } from '../configs/date-format.config';

export class DateUtil {
    static calculateAge(birthdate: string) {
        let age: number;
        if (birthdate) {
            const date = moment(birthdate, DateFormat.YYYYMMDD).toDate();
            const timeDiff = Math.abs(Date.now() - date.getTime());
            age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        }
        return age;
    }
}
