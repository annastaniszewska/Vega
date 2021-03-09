import { Component, OnInit } from "@angular/core";
import { Vehicle } from "src/models/vehicle";
import { VehicleService } from "src/services/vehicle.service";

@Component({
    templateUrl: 'vehicle-list.html'
})

export class VehicleListComponent implements OnInit {
    vehicles: Vehicle[];

    constructor(private vehicleService: VehicleService) { }
    
    ngOnInit(): void {
        this.vehicleService.getVehicles()
            .subscribe(vehicles => this.vehicles = vehicles);
    }
}