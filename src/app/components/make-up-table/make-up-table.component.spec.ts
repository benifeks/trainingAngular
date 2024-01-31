import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeUpTableComponent } from './make-up-table.component';

describe('MakeUpTableComponent', () => {
  let component: MakeUpTableComponent;
  let fixture: ComponentFixture<MakeUpTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeUpTableComponent]
    });
    fixture = TestBed.createComponent(MakeUpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
