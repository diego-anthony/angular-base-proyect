export enum ConfirmType {
    INFO,
    SUCCESS,
    WARNING,
    ERROR
}

export interface ConfirmDialog {
    title: string;
    message?: string;
    confirmButtonText?: string;
    type?: ConfirmType;
}
