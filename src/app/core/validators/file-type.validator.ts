import { FormControl } from '@angular/forms';

export enum FileType {
    PDF = 'application/pdf',
}

export function requiredFileType(typeRequired: FileType) {
    return (control: FormControl) => {
        const file = control.value;
        let result: any = null;
        if (file) {
            const type = file.type;
            if (type !== typeRequired) {
                result = {
                    requiredFileType: true
                };
            }
        }
        return result;
    };
}
