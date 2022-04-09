import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Configuration } from "app/app.constants";
import { Vacation } from 'app/model/Vacation';

@Injectable()
export class UnplannedVacationService {
    private rootUrl: string;

constructor(private _http: Http, private _config: Configuration) {
    this.rootUrl = _config.ServerWithApiUrl;
}

getUnPlannedVacationDetails() {
    return this._http.get(this.rootUrl + 'vacation/listUnPlanned')
    .map((res: any) => res.json())
    .catch((err:Response) => {
        return Observable.throw(err);
    });
}
}