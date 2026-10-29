import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomProgressBar } from './custom-progress-bar';

describe('CustomProgressBar', () => {
  let component: CustomProgressBar;
  let fixture: ComponentFixture<CustomProgressBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomProgressBar],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProgressBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
