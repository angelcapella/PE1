import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesViewComponent } from './informes-view.component';

describe('InformesViewComponent', () => {
  let component: InformesViewComponent;
  let fixture: ComponentFixture<InformesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
