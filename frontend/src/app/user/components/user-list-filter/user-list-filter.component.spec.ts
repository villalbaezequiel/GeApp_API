import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserListFilterComponent } from './user-list-filter.component';

describe('UserListFilterComponent', () => {
  let component: UserListFilterComponent;
  let fixture: ComponentFixture<UserListFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
