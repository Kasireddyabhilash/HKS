import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'dashboard', component: DashboardLayoutComponent,canActivate: [AuthGuard]  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
