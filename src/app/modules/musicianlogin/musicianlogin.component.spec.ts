import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianloginComponent } from './musicianlogin.component';

describe('MusicianloginComponent', () => {
  let component: MusicianloginComponent;
  let fixture: ComponentFixture<MusicianloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
