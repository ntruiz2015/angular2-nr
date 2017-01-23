import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Operator';

import { Ship } from '../ship';

@Injectable()
export class SailingService {
    private shipsUrl = './app/data/ships.json';


    constructor(private http: Http) { };

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg)
    }

    getSailingsCruiseLines(): Observable<any> {
        return this.http.get(this.shipsUrl)
            .map((res: any) => res.json())
            .catch(this.handleError);
    }

    matchSailings(): void {

    }

    
}

