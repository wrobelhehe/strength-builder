import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomFooterComponent } from './bottom-footer.component';

describe('BottomFooterComponent', () => {
  let component: BottomFooterComponent;
  let fixture: ComponentFixture<BottomFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomFooterComponent]
    });
    fixture = TestBed.createComponent(BottomFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
