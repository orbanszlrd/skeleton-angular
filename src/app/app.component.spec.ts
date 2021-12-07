import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MenubarComponent } from './modules/shared/components/menubar/menubar.component';
import { ToolbarComponent } from './modules/shared/components/toolbar/toolbar.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { LoaderComponent } from './modules/shared/components/loader/loader.component';
import { SidebarComponent } from './modules/shared/components/sidebar/sidebar.component';
import { PrimeModule } from './modules/prime/prime.module';
import { Store } from '@ngrx/store';

describe('AppComponent', () => {
  let store: Store;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FontAwesomeModule, PrimeModule],
      providers: [AppComponent, provideMockStore({ initialState })],
      declarations: [
        AppComponent,
        MenubarComponent,
        SidebarComponent,
        ToolbarComponent,
        FooterComponent,
        LoaderComponent,
      ],
    }).compileComponents();

    store = TestBed.inject(Store);

    spyOn(store, 'dispatch');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call the dispatch method of the store', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.hideSidebar();

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
