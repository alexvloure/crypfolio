import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMcComponent } from './lista-mc.component';

describe('ListaMcComponent', () => {
  let component: ListaMcComponent;
  let fixture: ComponentFixture<ListaMcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
