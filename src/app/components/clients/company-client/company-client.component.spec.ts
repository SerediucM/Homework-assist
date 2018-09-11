import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyClientComponent } from './company-client.component';

describe('CompanyClientComponent', () => {
  let component: CompanyClientComponent;
  let fixture: ComponentFixture<CompanyClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
