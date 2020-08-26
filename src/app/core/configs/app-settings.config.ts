import { GlobalConfig } from 'ngx-toastr';
export class AppSettings {
    static readonly RETRY: number = 0;
    static TOAST_CONFIG: Partial<GlobalConfig> = {
        countDuplicates: true,
        preventDuplicates: true,
        resetTimeoutOnDuplicate: true,
        tapToDismiss: true,
        progressBar: true,
    };
}
