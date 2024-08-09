import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetshoppingComponent } from './streetshopping.component';

describe('StreetshoppingComponent', () => {
  let component: StreetshoppingComponent;
  let fixture: ComponentFixture<StreetshoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreetshoppingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreetshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
