import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SaveVehicle } from 'src/models/saveVehicle';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private readonly vehiclesEndpoint = '/api/vehicles';
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
    return this.http.post(this.vehiclesEndpoint, vehicle)
      .pipe(map((res: any) => res));
  }

  getVehicle(id : number) {
    return this.http.get(this.vehiclesEndpoint +'/' + id)
      .pipe(map((res: any) => res));
  }

  getVehicles() {
    return this.http.get(this.vehiclesEndpoint)
      .pipe(map((res: any) => res));
  }

  update(vehicle: SaveVehicle) {
    return this.http.put(this.vehiclesEndpoint + '/' + vehicle.id, vehicle)
      .pipe(map((res: any) => res));
  }

  delete(id : number) {
    return this.http.delete(this.vehiclesEndpoint + '/' + id)
      .pipe(map((res: any) => res));
  }
}
