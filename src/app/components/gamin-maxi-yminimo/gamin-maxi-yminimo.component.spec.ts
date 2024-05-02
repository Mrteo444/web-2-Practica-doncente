import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaminMaxiYminimoComponent } from './gamin-maxi-yminimo.component';

describe('GaminMaxiYminimoComponent', () => {
  let component: GaminMaxiYminimoComponent;
  let fixture: ComponentFixture<GaminMaxiYminimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaminMaxiYminimoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaminMaxiYminimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
