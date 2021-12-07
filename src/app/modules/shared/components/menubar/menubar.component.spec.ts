import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PrimeModule } from 'src/app/modules/prime/prime.module';

import { MenubarComponent } from './menubar.component';

describe('MenubarComponent', () => {
  let component: MenubarComponent;
  let fixture: ComponentFixture<MenubarComponent>;

  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, PrimeModule],
      declarations: [MenubarComponent],
    }).compileComponents();

    router = TestBed.inject(Router);

    spyOn(router, 'navigateByUrl');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the routers  navigateByUrl once', () => {
    const compiled = fixture.nativeElement;
    compiled.querySelector('.p-menuitem a').click();

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
  });
});
