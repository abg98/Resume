import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { APP_CONFIG, AppConfig } from 'src/app/app.config';

@Injectable()
export class ResumeService {
  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private httpClient: HttpClient
  ) { }

    getWorkHistory(): Observable<any> {
        return this.httpClient
        .get<any>(`${this.appConfig.apiUrl}/resume/work-history`)
        .pipe(
            map((obj) => obj),
            catchError(
            this.handleError('get work history', undefined, true)
            )
        );
    }
    getSkills(): Observable<any> {
        return this.httpClient
        .get<any>(`${this.appConfig.apiUrl}/resume/skills`)
        .pipe(
            map((obj) => obj),
            catchError(
            this.handleError('get skills history', undefined, true)
            )
        );
    }
    getResume() {
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/pdf');
        return this.httpClient.get(`${this.appConfig.apiUrl}/images/currentResume.pdf`, { headers: headers, responseType: 'blob' });
    }
    getImageURL(name: string): string {
        return `${this.appConfig.apiUrl}/images/${name}`
    }
    private handleError<T>(operation: string, result?: T, hardFail = false) {
        return (error: any): Observable<T> => {
            console.error(`${operation} failed: ${error.message}`);
            if (hardFail) {
            return throwError(result as T);
            } else {
            return of(result as T);
            }
        };
    }
}
