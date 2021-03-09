import { Component, OnInit } from "@angular/core";
import { KeyValuePair } from "src/models/keyValuePair";
import { Vehicle } from "src/models/vehicle";
import { VehicleService } from "src/services/vehicle.service";

@Component({
    templateUrl: 'vehicle-list.html'
})

export class VehicleListComponent implements OnInit {
    vehicles: Vehicle[];
    allVehicles: Vehicle[];
    makes: KeyValuePair[];
    filter: any = {};

    constructor(private vehicleService: VehicleService) { }
    
    ngOnInit(): void {
        this.vehicleService.getMakes()
            .subscribe(makes => this.makes = makes);

        this.vehicleService.getVehicles()
            .subscribe(vehicles => this.vehicles = this.allVehicles = vehicles);
    }

    onFilterChange(){
        var vehicles = this.allVehicles;
        if (this.filter.makeId)
            vehicles = vehicles.filter(v => v.make.id == this.filter.makeId);

        this.vehicles = vehicles;
    }

    resetFilter(){
        this.filter = {};
        this.onFilterChange();
    }
}