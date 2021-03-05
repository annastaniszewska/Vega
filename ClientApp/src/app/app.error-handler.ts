import { ErrorHandler, Inject, NgZone } from "@angular/core";
import { ToastrService } from "ngx-toastr";

export class AppErrorHandler implements ErrorHandler {

    constructor(
        private ngZone: NgZone,
        @Inject(ToastrService) private toastr: ToastrService) {}

    handleError(error: any): void {
        this.ngZone.run(() => {
            this.toastr.error('An unexpected error happened.', 'Error', {
                closeButton: true,
                timeOut: 5000
            });
        })
    }
}