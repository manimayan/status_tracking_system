import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Configuration } from "app/app.constants";
import { Employee } from "app/model/employee";

@Injectable()
export class CreateemployeeService {

    private rootUrl: string;

constructor(private _http: Http, private _config: Configuration) {
    this.rootUrl = _config.ServerWithApiUrl;
}

addemployee(newaddedlist: Employee){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ withCredentials: true, headers: headers });;
    return this._http.post(this.rootUrl + 'employee/save', newaddedlist , options)
    .map((res: any) => res.json())
    .catch((err:Response) => {
        return Observable.throw(err);
    });}

getsupervisordetails(){
    return this._http.get(this.rootUrl + 'employee/supervisorlist')
    .map((res: any) => res.json())
    .catch((err:Response) => {
        return Observable.throw(err);
    });
}

}