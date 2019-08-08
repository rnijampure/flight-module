import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreWorldComponent } from './explore-world.component';

describe('ExploreWorldComponent', () => {
  let component: ExploreWorldComponent;
  let fixture: ComponentFixture<ExploreWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
