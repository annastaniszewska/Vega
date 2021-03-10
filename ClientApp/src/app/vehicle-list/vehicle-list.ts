import { Component, OnInit } from "@angular/core";
import { KeyValuePair } from "src/models/keyValuePair";
import { Vehicle } from "src/models/vehicle";
import { VehicleService } from "src/services/vehicle.service";

@Component({
    templateUrl: 'vehicle-list.html'
})

export class VehicleListComponent implements OnInit {
    vehicles: Vehicle[];
    makes: any[];
    models: any[];
    filter: any = {};

    constructor(private vehicleService: VehicleService) { }
    
    ngOnInit(): void {
        this.vehicleService.getMakes()
            .subscribe(makes => this.makes = makes);

        this.populateVehicles();
    }

    private populateVehicles() {
        this.vehicleService.getVehicles(this.filter)
            .subscribe(vehicles => this.vehicles = vehicles);
    }

    onMakeChange() {
        var selectedMake = this.makes.find(m => m.id == this.filter.makeId);
        this.models = selectedMake ? selectedMake.models : [];
    }

    onFilterChange() {
        this.populateVehicles(); 
    }

    resetFilter(){
        this.filter = {};
        this.onFilterChange();
    }
}