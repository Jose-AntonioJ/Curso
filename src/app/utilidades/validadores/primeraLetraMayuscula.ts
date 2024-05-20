import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";

export function primeraLetraMayuscula(): Validators {
    return (control: AbstractControl) => {
        const valor = <string>control.value;
        if (!valor) return;
        if (valor.length === 0) return;

        const primeraLetra = valor[0];
        if (primeraLetra !== primeraLetra.toUpperCase()) {
            return {
                primeraLetraMayuscula: {
                    mensaje: 'la primera letra debe ser mayuscula'
                }
            };
        }
        return;
    }
}