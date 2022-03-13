import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAdminComponent } from './code-admin.component';

describe('CodeAdminComponent', () => {
  let component: CodeAdminComponent;
  let fixture: ComponentFixture<CodeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
