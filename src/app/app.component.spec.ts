import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@Component({
  standalone: false,
  selector: 'app-dummy-table',
  template: '<p>Dummy Table Component</p>',
})
class DummyTableComponent {}

@Component({
  standalone: false,
  selector: 'app-dummy-form',
  template: '<p>Dummy Form Component</p>',
})
class DummyFormComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, DummyTableComponent, DummyFormComponent],
      imports: [
        RouterModule.forRoot([
          { path: 'table', component: DummyTableComponent },
          { path: 'form', component: DummyFormComponent },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render navigation buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
    expect(buttons[0].textContent).toContain('Ver Tabla');
    expect(buttons[1].textContent).toContain('Alta de Usuario');
  });
});
