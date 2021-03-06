import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TrainerService {
    private url:string = "http://localhost:5000/trainer/";
    constructor(private http: Http) { }

    getMyTrainings(name:string){
        return this.http.get(this.url+name)
            .map((response:Response) => response.json());
    }   
}