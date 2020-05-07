import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaprotegidaComponent } from './paginaprotegida.component';

describe('PaginaprotegidaComponent', () => {
  let component: PaginaprotegidaComponent;
  let fixture: ComponentFixture<PaginaprotegidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaprotegidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaprotegidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
