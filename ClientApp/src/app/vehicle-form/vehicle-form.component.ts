import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from 'src/services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  features: any[];
  models: any[];
  vehicle: any = {
    features: [],
    contact: {}
  };

  constructor(
    private vehicleService: VehicleService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.vehicleService.getMakes().subscribe(makes => 
        this.makes = makes); 
        
    this.vehicleService.getFeatures().subscribe(features =>
      this.features = features);
  }

  onMakeChange(){
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
    delete this.vehicle.modelId;
  }

  onFeatureToggle(featureId, $event) {
    if ($event.target.checked)
      this.vehicle.features.push(featureId);
    else {
      var index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }

  submit() {
    this.vehicleService.create(this.vehicle)
      .subscribe(x => console.log(x), 
      err => {
        this.toastr.error('An unexpected error happened.', 'Error', {
          closeButton: true,
          timeOut: 5000
        })
      });
  }

  formChanged(): void {
    this.vehicle.modelId = +this.vehicle.modelId;
}
}