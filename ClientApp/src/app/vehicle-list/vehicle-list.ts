import { Component, OnInit } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { KeyValuePair } from "src/models/keyValuePair";
import { Vehicle } from "src/models/vehicle";
import { VehicleService } from "src/services/vehicle.service";

@Component({
    templateUrl: 'vehicle-list.html'
})

export class VehicleListComponent implements OnInit {
    private readonly PAGE_SIZE = 5;
    
    queryResult: any = {};
    makes: any[];
    models: any[];
    query: any = {
        pageSize: this.PAGE_SIZE
    };
    columns = [
        { title: 'Id' },
        { title: 'Make', key: 'make', isSortable: true },
        { title: 'Model', key: 'model', isSortable: true },
        { title: 'Contact Name', key: 'contactName', isSortable: true },
        { }
    ];

    constructor(public auth: AuthService, private vehicleService: VehicleService) { }
    
    ngOnInit(): void {
        this.vehicleService.getMakes()
            .subscribe(makes => this.makes = makes);

        this.populateVehicles();
    }

    private populateVehicles() {
        this.vehicleService.getVehicles(this.query)
            .subscribe(result => this.queryResult = result);
    }

    onMakeChange() {
        var selectedMake = this.makes.find(m => m.id == this.query.makeId);
        this.models = selectedMake ? selectedMake.models : [];
    }

    onFilterChange() {
        this.query.page = 1;
        this.populateVehicles(); 
    }

    resetFilter() {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE
        };
        
        this.populateVehicles();
    }

    sortBy(columnName) {
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }

        this.populateVehicles();
    }

    onPageChange(page) {
        this.query.page = page;
        this.populateVehicles();
    }
}