import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const http = inject(HttpClient);
  const router = inject(Router);

  return http.get<{ isAuthenticated: boolean }>('/api/check-auth').pipe(
    map(response => {
      if (response.isAuthenticated) {
        return true;
      } else {
        return router.parseUrl('/login');
      }
    })
  );
};
