export enum ApiResponseType {
    SUCCESS = 1,
    WARNING = 2,
    ERROR = -3
}
export class ApiResponse {
    message: string;
    codResult: ApiResponseType;
}
export class ApiResponseData<T> extends ApiResponse {
    data: T;
}
