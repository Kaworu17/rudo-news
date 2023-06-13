import { FormGroup } from '@angular/forms';

//comprobar si el campo input tiene errores y ha sido tocado
export function isValidFielComprobation(
  form: FormGroup<any>,
  field: string
): boolean | null {
  return form.controls[field]?.errors && form.controls[field]?.touched;
}

//Mensajes de error de los inputs
export function getFieldError(
  form: FormGroup<any>,
  field: string
): string | null {
  if (!form.controls[field]) return null;

  /*  console.log(this.registerForm.controls[field].value); */
  let word = form.controls[field].value;

  const error = form.controls[field].errors || {};
  for (const key of Object.keys(error)) {
    switch (key) {
      case 'required':
        return 'Este campo no puede quedar vacío';
      case 'email':
        return 'Este campo no es un email';
      case 'minlength':
        return `Mínimo ${error['minlength'].requiredLength} caracters.`;
      case 'pattern':
        return 'Este campo no cumple el pattern';
      case 'maxlength':
        return `Máximo ${error['maxlength'].requiredLength} caracters.`;
    }
  }

  return null;
}
