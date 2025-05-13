import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form initially', () => {
    expect(component.userForm.valid).toBeFalse();
  });

  it('should log form data when form is valid and submitted', () => {
    const mockData = {
      name: 'Juan',
      lastName: 'Pérez',
      email: 'juan@example.com',
      password: '123456',
      phone: '600123456',
      age: 30,
      address: 'Calle Falsa 123',
    };

    component.userForm.setValue(mockData);

    spyOn(console, 'log');
    component.submitForm();

    expect(console.log).toHaveBeenCalledWith(mockData);
  });
});
