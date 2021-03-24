import { ToastrService } from 'ngx-toastr';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { VehicleService } from 'src/services/vehicle.service';
import { PhotoService } from 'src/services/photo.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
    templateUrl: 'view-vehicle.html'
})

export class ViewVehicleComponent implements OnInit {
    @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
    vehicle: any;
    vehicleId: number;
    photos: any[];
    progress: any;

    constructor(
        private zone: NgZone,
        private route: ActivatedRoute,
        private router: Router,
        private toastr: ToastrService,
        private photoService: PhotoService,
        private vehicleService: VehicleService){
            route.params.subscribe(p =>{
                this.vehicleId = +p['id'];
                if (isNaN(this.vehicleId) || this.vehicleId <=0){
                    router.navigate(['/vehicles']);
                    return;
                }
            });
        }
    
        ngOnInit() {
            this.photoService.getPhotos(this.vehicleId)
                .subscribe(photos => this.photos = photos);

            this.vehicleService.getVehicle(this.vehicleId)
                .subscribe(
                    v => this.vehicle = v,
                    err => {
                        if (err.status == 404) {
                            this.router.navigate(['/vehicles']);
                            return;
                        }
                });
        }

        delete() {
            if (confirm("Are you sure you want to delete the vehicle?")) {
                this.vehicleService.delete(this.vehicle.id)
                    .subscribe(x => {
                        this.router.navigate(['/vehicles']);
                    });
            }
        }

        uploadPhoto() {
            var nativeElement: HTMLInputElement = this.fileInput.nativeElement;

            this.photoService.upload(this.vehicleId, nativeElement.files[0])
                .subscribe({
                    next: (photo => {
                        if (photo.type === HttpEventType.UploadProgress){
                            const percentDone = Math.round(100 * photo.loaded / photo.total);
                            this.zone.run(() => {
                                this.progress = percentDone;
                            });
                            
                            console.log(`File is ${percentDone}% uploaded.`);
                        }
                        else if (photo instanceof HttpResponse){
                            console.log('File is completely uploaded!');
                            this.photos.push(photo.body);
                        }
                    }),
                    error: null,
                    complete: (() => { this.progress = null })
                });
        }

        getUrl(id : number) {
            window.location.href = '/api/vehicles/' + id;
          }
}