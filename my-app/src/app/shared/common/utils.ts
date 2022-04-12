import { AbstractControl, FormGroup } from '@angular/forms';

export const emailValidator =
  /^[a-zA-Z0-9]+[\._\-a-zA-Z0-9]*@[a-zA-Z0-9_-]{2,}\.[a-zA-Z]{2,}[\.a-zA-Z0-9]*$/;
export const passwordValidator =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{8,32}$/;

export function confirmedValidator(
  controlName: string,
  matchingControlName: string
): any {
  return (formGroup: FormGroup) => {
    const passwordControl = formGroup.controls[controlName];
    const repeatedPasswordControl = formGroup.controls[matchingControlName];

    const {
      dirty: passwordTouched,
      errors: passwordErrors,
      value: passwordValue,
    } = passwordControl;

    const {
      dirty: repeatedPasswordTouched,
      errors: repeatedPasswordErrors,
      value: repeatedPasswordValue,
    } = repeatedPasswordControl;

    if (!passwordTouched || !repeatedPasswordTouched) {
      return;
    }

    const passwordNotSame = passwordValue !== repeatedPasswordValue;
    if (passwordNotSame) {
      passwordControl.setErrors({ ...passwordErrors, passwordNotSame });
      repeatedPasswordControl.setErrors({
        ...repeatedPasswordErrors,
        passwordNotSame,
      });
    } else {
      removeFormControlError(passwordControl, 'passwordNotSame');
      removeFormControlError(repeatedPasswordControl, 'passwordNotSame');
    }
  };
}

function removeFormControlError(
  control: AbstractControl,
  errorName: string
): void {
  if (control?.errors && control?.errors[errorName]) {
    delete control.errors[errorName];
    if (Object.keys(control.errors).length === 0) {
      control.setErrors(null);
    }
  }
}
