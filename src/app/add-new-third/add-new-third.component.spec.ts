import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewThirdComponent } from './add-new-third.component';

describe('AddNewThirdComponent', () => {
  let component: AddNewThirdComponent;
  let fixture: ComponentFixture<AddNewThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewThirdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
