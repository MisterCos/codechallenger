import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailFullComponent } from './userdetail-full.component';

describe('UserdetailFullComponent', () => {
  let component: UserdetailFullComponent;
  let fixture: ComponentFixture<UserdetailFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdetailFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
