import { AbstractControl, ValidationErrors } from "@angular/forms";


export function gtr10(cntrl: AbstractControl): ValidationErrors | null {

    let frmCtrlVal = cntrl.value;

    if (frmCtrlVal <= 20) {
        return { 'gtr10': false, 'msg': 'Value should be greater than 20' }
    }
    else {
        return null;
    }

}