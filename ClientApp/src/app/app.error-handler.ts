import { ErrorHandler, Inject, NgZone, isDevMode } from "@angular/core";
import * as Sentry from '@sentry/browser'
import { ToastrService } from "ngx-toastr";

export class AppErrorHandler implements ErrorHandler {

    constructor(
        private ngZone: NgZone,
        @Inject(ToastrService) private toastr: ToastrService) {
            Sentry.init({
                dsn: 'https://1fc215a1e9a54d8aacea89d4dc37c89e@o543405.ingest.sentry.io/5663639'
              })
        }

    handleError(error: any): void {
        this.ngZone.run(() => {
            this.toastr.error('An unexpected error happened.', 'Error', {
                closeButton: true,
                timeOut: 5000
            });
        })
    }
}