import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStatisticsComponent } from './control-statistics.component';

describe('ControlStatisticsComponent', () => {
  let component: ControlStatisticsComponent;
  let fixture: ComponentFixture<ControlStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
