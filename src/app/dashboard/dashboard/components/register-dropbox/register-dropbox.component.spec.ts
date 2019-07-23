import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDropboxComponent } from './register-dropbox.component';

describe('RegisterDropboxComponent', () => {
  let component: RegisterDropboxComponent;
  let fixture: ComponentFixture<RegisterDropboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDropboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDropboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
