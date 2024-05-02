import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingdetalleComponent } from './gamingdetalle.component';

describe('GamingdetalleComponent', () => {
  let component: GamingdetalleComponent;
  let fixture: ComponentFixture<GamingdetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamingdetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamingdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
