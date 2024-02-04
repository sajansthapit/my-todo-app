import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth.service';

export function canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.checkLogin()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
}

export function canActivateChild(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) {
  canActivate(route, state);
}
