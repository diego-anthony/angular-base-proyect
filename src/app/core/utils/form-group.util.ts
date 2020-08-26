import { FormGroup, AbstractControl } from '@angular/forms';

export class FormGroupUtil {
    public static getDirtyControls(form: FormGroup) {
        const fields = [];
        Object.keys(form.controls).forEach((name) => {
            const control: AbstractControl = form.controls[name];
            if (control.dirty){
                fields.push(name);
            }
        });
        return fields;
    }
}