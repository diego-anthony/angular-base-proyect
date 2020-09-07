export enum EssiResponseType {
    SUCCESS = '0'
}

export interface EssiResponse<T> {
    codError: string;
    desError: string;
    vDataItem: T;
}
