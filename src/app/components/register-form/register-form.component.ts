import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentsDialogComponent } from '../departments-dialog/departments-dialog.component';
import { MatRadioChange } from '@angular/material/radio';
import { isValidFielComprobation, getFieldError } from 'src/app/utils/utils';
import { Network } from 'src/app/services/backend-data.service';
import { Category, Departments } from 'src/app/models/test-data.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less'],
})
export class RegisterFormComponent implements OnInit {
  @ViewChild('focusInput') focusInput!: ElementRef;
  @ViewChild('departmentInput') departInput!: ElementRef;

  public isValidFielComprobation = isValidFielComprobation;
  public getFieldError = getFieldError;

  public arrayTestDepartments: string[] = [
    'Back',
    'RRHH',
    'Ios',
    'Android',
    'Diseño',
    'Proyectos',
    'Ventas',
    'Academy',
    'Flutter',
    'Ionic',
    'JP',
  ];
  public arrayDepartments: Category[] = [];
  public stringDepartments: String[] = [];
  public isShowPassword: boolean = false;
  public isRadioCheck: boolean = false;
  public isDisabled: boolean = true;
  public isIconEnabled: boolean = true;
  public registerForm: FormGroup = this.fb.group({
    name: [
      { value: '', disabled: this.isDisabled },
      [Validators.required, Validators.minLength(3)],
    ],
    departments: ['', [Validators.required]],
    mail: [
      { value: '', disabled: this.isDisabled },
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
      ],
    ],
    password: [
      { value: '', disabled: this.isDisabled },
      [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
        ),
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public network: Network,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  async onRegister(): Promise<void> {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(this.registerForm.value);

    const httpMethod = 'POST';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const name = this.registerForm.get('name')?.value;
    const departments = this.registerForm.get('departments')?.value;
    const mail = this.registerForm.get('mail')?.value;
    const password = this.registerForm.get('password')?.value;

    console.log('name:', name);
    console.log('departments:', departments);
    console.log('mail:', mail);
    console.log('password:', password);

    console.log('arraydep:', this.arrayDepartments);

    //change selected string array to ids array
    const departmentIds = departments
      .filter((department: string) =>
        this.arrayDepartments.some((item) => item.name === department)
      )
      .map((department: string) => {
        const matchingDepartment = this.arrayDepartments.find(
          (item) => item.name === department
        );
        return matchingDepartment ? matchingDepartment.id : null;
      });

    console.log('departments ids', departmentIds.join(' '));

    let body = new HttpParams()
      .set('fullname', name)
      .set('email', mail)
      .set('password', password)
      .set('departments', departmentIds.join(' '));

    //TO DO el server debería devolver algo correcto
    try {
      const res = await lastValueFrom(
        this.http.post<any>('/api/users/register/', body.toString(), {
          headers: headers,
        })
      );
      localStorage.clear();
      console.log('Registro exitoso', res);

      // Llamada a authToken después de que se complete la llamada post
      await this.network.authToken(mail, password);

      // Navegación a '/news' después de que se complete authToken
      this.router.navigate(['/news']);
    } catch (error: any) {
      console.error('Error en el registro', error);
      console.error('Error status', error.status);
      if (error.status === 500) {
        // Llamada a authToken después de que se complete la llamada post
        await this.network.authToken(mail, password);

        // Navegación a '/news' después de que se complete authToken
        this.router.navigate(['/news']);
      }
    }

    console.log('registrado');
  }

  openDialog() {
    this.departInput.nativeElement.blur();
    const dialogRef = this.dialog.open(DepartmentsDialogComponent, {
      autoFocus: false,
      width: '400px',
      panelClass: 'custom-dialog',
      data: {
        selectedDepartments: this.registerForm.value.departments,
        importedDepartments: this.stringDepartments,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const selectedDepartments = Object.keys(result.departments).filter(
          (key) => result.departments[key]
        );

        const departmentsValue =
          selectedDepartments.length > 0 ? selectedDepartments : '';

        this.registerForm.patchValue({
          departments: departmentsValue,
        });
      }
      this.isInputEnabled();
      this.focusInput.nativeElement.focus();
    });
  }

  /* async getDepartments() {
    const httpMethod = 'GET';
    let departaments = await this.network.call(
      '/api/departments/',
      httpMethod,
      false
    );

    if (departaments != false) {
      let temp: any = departaments;
      this.arrayDepartments = temp.results;
      this.stringDepartments = this.arrayDepartments.map((el) => {
        return el.name;
      });
    }
  } */

  async getDepartments() {
    let page = 1;
    const httpMethod = 'GET';

    while (true) {
      let departments = await this.network.call(
        `/api/departments/?page=${page}`,
        httpMethod,
        false
      );

      console.log('departments', departments);

      if (departments === false) {
        break;
      }

      let depart = departments as Departments;

      if (page === 1) {
        this.arrayDepartments = depart.results as Category[];
      } else {
        this.arrayDepartments.push(...(depart.results as Category[]));
      }

      if (!depart.next) {
        break;
      }

      page++;
    }

    console.log('array final:', this.arrayDepartments);

    this.stringDepartments = this.arrayDepartments.map((el) => {
      return el.name;
    });

    console.log('departamentos:', this.stringDepartments);
  }

  toggleShowPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  isMayus(word: string): boolean {
    return /[A-Z]/.test(word);
  }

  isMinus(word: string): boolean {
    return /[a-z]/.test(word);
  }

  hasLenght(word: string): boolean {
    return word.length > 7;
  }

  hasNumbers(word: string): boolean {
    return /[0-9]/.test(word);
  }
  hasEspecialCharacter(word: string): boolean {
    return /[#?!@$%^&*-]/.test(word);
  }

  isInputEnabled(): void {
    if (this.registerForm.controls['departments'].valid) {
      this.registerForm.controls['name'].enable();
      this.registerForm.controls['mail'].enable();
      this.registerForm.controls['password'].enable();
      this.isIconEnabled = false;
    } else {
      this.registerForm.controls['name'].disable();
      this.registerForm.controls['mail'].disable();
      this.registerForm.controls['password'].disable();
      this.isIconEnabled = true;
    }
  }

  radioButtonChange(data: MatRadioChange) {
    this.isRadioCheck = data.value;
  }
}
