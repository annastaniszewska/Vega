import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getMakes(){
    return this.http.get('/api/makes')
      .pipe(map((res: any) => res));
  }

  getFeatures(){
    return this.http.get('/api/features')
      .pipe(map((res: any) => res));
  }

  create(vehicle) {
    return this.http.post('/api/vehicles', vehicle)
      .pipe(map((res: any) => res));
  }

  getVehicle(id) {
    return this.http.get('/api/vehicles/' + id)
      .pipe(map((res: any) => res));
  }
}
