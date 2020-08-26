import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const isAmount: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const value = /^(\d*\.)?\d+$/.test(control.value) ? +control.value : NaN;

    if (value !== value) {
        return { isAmount: true };
    }
    return null;
};
