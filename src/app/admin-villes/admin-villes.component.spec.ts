import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVillesComponent } from './admin-villes.component';

describe('AdminVillesComponent', () => {
  let component: AdminVillesComponent;
  let fixture: ComponentFixture<AdminVillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
