import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UniversitiesComponent } from './universities/universities.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponent } from './help/help.component';
import { RecommendedUnivComponent } from './recommended-univ/recommended-univ.component';
import { LandingComponent } from './landing/landing.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { AllUniversityComponent } from './all-university/all-university.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [

 { path: '', component: SkeletonComponent,
	children: [
		{ path: 'home', component: HomeComponentComponent },
		{ path: 'profile', component: ProfileComponent },
		{ path: 'university', component: AllUniversityComponent,
			children: [
				{ path: 'recommended', component: RecommendedUnivComponent},
 				{ path: 'target', component: UniversitiesComponent, data: {recommended:false, target: true}},
				{ path: '', component: UniversitiesComponent},
			]
		},
		{ path: 'help', component: HelpComponent },
		{ path: 'search', component: SearchComponent},
		{ path:  "**", component: HomeComponentComponent}

 	]
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
