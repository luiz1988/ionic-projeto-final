import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CachorroDetalhePage } from './cachorro-detalhe.page';

describe('CachorroDetalhePage', () => {
  let component: CachorroDetalhePage;
  let fixture: ComponentFixture<CachorroDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CachorroDetalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CachorroDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
