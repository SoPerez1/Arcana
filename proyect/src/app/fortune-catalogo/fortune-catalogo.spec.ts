import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortuneCatalogo } from './fortune-catalogo';

describe('FortuneCatalogo', () => {
  let component: FortuneCatalogo;
  let fixture: ComponentFixture<FortuneCatalogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortuneCatalogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortuneCatalogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
