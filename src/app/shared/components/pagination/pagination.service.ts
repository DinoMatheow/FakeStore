import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { withEventReplay } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Injectable({providedIn: 'root'})
export class PaginationService {

  http = inject(HttpClient);

  private activatedRouted = inject(ActivatedRoute);

  currentPage = toSignal(
    this.activatedRouted.queryParamMap.pipe(
      map((params)=> params.get('page') ? +params.get('page')! : 1 ),
      map((page)=>(isNaN(page) ? 1 : page ))
    ),
    {
      initialValue: 1,
    }
  )

}