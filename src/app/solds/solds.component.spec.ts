import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldsComponent } from './solds.component';

describe('SoldsComponent', () => {
  let component: SoldsComponent;
  let fixture: ComponentFixture<SoldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoldsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
