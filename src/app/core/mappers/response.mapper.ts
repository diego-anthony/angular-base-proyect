import { ApiResponseType, ApiResponseData } from '../models/api-response.model';
import { EssiResponse, EssiResponseType } from '../models/essi-response.model';

export class ResponseMapper {
    static mapData<T>(response: ApiResponseData<T>): T {
        if (response.codResult === ApiResponseType.SUCCESS) {
            return response.data;
        } else {
            return null;
        }
    }
    static essi<T>(response: EssiResponse<T>) {
        if (response.codError === EssiResponseType.SUCCESS) {
            return response.vDataItem;
        } else {
            return null;
        }
    }
}
