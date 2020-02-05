import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms' 
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UniversitiesComponent } from './universities/universities.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponent } from './help/help.component';
import { UniversityComponent } from './university/university.component';
import { RecommendedUnivComponent } from './recommended-univ/recommended-univ.component';
import { LandingComponent } from './landing/landing.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { AllUniversityComponent } from './all-university/all-university.component';
import { SummaryPipe } from './summary.pipe';
import { SearchComponent } from './search/search.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostComponent } from './post/post.component'

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    PageHeaderComponent,
    CardComponentComponent,
    HomeComponentComponent,
    UniversitiesComponent,
    ProfileComponent,
    HelpComponent,
    UniversityComponent,
    RecommendedUnivComponent,
    LandingComponent,
    SkeletonComponent,
    AllUniversityComponent,
    SummaryPipe,
    SearchComponent,
    RegistrationComponent,
    ContactFormComponent,
    SignupFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
