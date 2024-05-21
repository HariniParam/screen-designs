import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlOptionsComponent } from './control-options.component';

describe('ControlOptionsComponent', () => {
  let component: ControlOptionsComponent;
  let fixture: ComponentFixture<ControlOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
