import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentsDialogComponent } from '../departments-dialog/departments-dialog.component';
import { MatRadioChange } from '@angular/material/radio';
import { isValidFielComprobation, getFieldError } from 'src/app/utils/utils';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { Network } from 'src/app/services/backend-data.service';
import { Category, Departments, Profile } from 'src/app/models/test-data.model';
import { ResultsEntity } from '../../models/test-data.model';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.less'],
})
export class ProfileEditFormComponent implements OnInit {
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
  public isShowPassword: boolean = false;
  public isRadioCheck: boolean = false;
  public isDisabled: boolean = true;
  public isIconEnabled: boolean = true;
  public arrayDepartments: Category[] = [];
  public stringDepartments: String[] = [];
  public stringSelectedDepartments: String = '';
  public profileData: Profile = {
    id: 0,
    fullname: '',
    email: '',
    phone: '',
    platform: '',
  };

  public editProfileForm: FormGroup = this.fb.group({
    name: [
      this.profileData.fullname,
      [Validators.required, Validators.minLength(3)],
    ],
    departments: [this.stringSelectedDepartments, [Validators.required]],
    mail: [
      this.profileData.email,
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public network: Network
  ) {}

  async ngOnInit(): Promise<void> {
    this.getDepartments();
    await this.getProfile();
  }

  /*  async getDepartments() {
    let page = 1;
    const httpMethod = 'GET';
    let departaments = await this.network.call(
      `/api/departments/?page=1`,
      httpMethod,
      false
    );

    console.log('departaments ', departaments as Departments);
    let depart = departaments as Departments;

    if (departaments != false) {
      let temp: any = departaments;
      this.arrayDepartments = temp.results;
      this.stringDepartments = this.arrayDepartments.map((el) => {
        return el.name;
      });
    }
    console.log('departamentosarray:', this.arrayDepartments);
    console.log('departamentos:', this.stringDepartments);

    if (depart.next) {
      console.log('Hay depart next: ', depart.next);

      const httpMethod = 'GET';
      let moredepartaments = await this.network.call(
        `/api/departments/?page=2`,
        httpMethod,
        false
      );
      let temp2 = moredepartaments as Departments;
      console.log('temp2: ', temp2.results);

      let test01 = this.arrayDepartments;
      let test02 = temp2.results as Category[];

      this.arrayDepartments.push(...test02);
      console.log('array final: ', this.arrayDepartments);
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

      /* console.log('departments', departments); */

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

    /* console.log('array final:', this.arrayDepartments); */

    this.stringDepartments = this.arrayDepartments.map((el) => {
      return el.name;
    });

    /* console.log('departamentos:', this.stringDepartments); */
  }

  async getProfile() {
    const httpMethod = 'GET';
    let response = await this.network.call(
      `/api/users/profile/`,
      httpMethod,
      true
    );

    if (response !== false) {
      console.log('profile response', response);
      this.profileData = response as Profile;
      this.editProfileForm.get('mail')?.setValue(this.profileData.email);
      this.editProfileForm.get('name')?.setValue(this.profileData.fullname);

      if (this.profileData.departments) {
        this.stringSelectedDepartments = this.profileData.departments
          .map((department) => department.name)
          .join(',');

        this.editProfileForm
          .get('departments')
          ?.setValue(this.stringSelectedDepartments);
      }
    }
  }

  onSaveChanges(): void {
    if (this.editProfileForm.invalid) {
      this.editProfileForm.markAllAsTouched();
      return;
    }
    console.log(this.editProfileForm.value);

    let departments = this.editProfileForm.get('departments')?.value;

    if (Array.isArray(departments) == false) {
      departments = departments.split(',');
    }

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

    const httpMethod = 'PUT';
    let params = new HttpParams();
    let body = {
      fullname: this.editProfileForm.get('name')?.value,
      email: this.editProfileForm.get('mail')?.value,
      departments: departmentIds.join(' '),
    };
    console.log('body:', body);
    this.network.call('/api/users/modify/', httpMethod, true, params, body);
  }

  openDialog() {
    this.departInput.nativeElement.blur();
    const dialogRef = this.dialog.open(DepartmentsDialogComponent, {
      autoFocus: false,
      width: '400px',
      panelClass: 'custom-dialog',
      data: {
        selectedDepartments: this.editProfileForm.value.departments,
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

        this.editProfileForm.patchValue({
          departments: departmentsValue,
        });
      }

      this.focusInput.nativeElement.focus();
    });
  }

  openGenericDialog() {
    let testText: string = 'Los cambios se han guardado con exito';
    this.dialog.open(GenericDialogComponent, {
      width: '312px',
      panelClass: 'custom-dialog',
      /* data: this.forgottenPasswordForm.value.mail, */
      data: { testText },
    });
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
}
