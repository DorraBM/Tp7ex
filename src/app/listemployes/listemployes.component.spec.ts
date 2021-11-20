import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemployesComponent } from './listemployes.component';

describe('ListemployesComponent', () => {
  let component: ListemployesComponent;
  let fixture: ComponentFixture<ListemployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListemployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
