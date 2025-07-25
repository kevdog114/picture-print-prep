import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCard } from './material-card';

describe('MaterialCard', () => {
  let component: MaterialCard;
  let fixture: ComponentFixture<MaterialCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
