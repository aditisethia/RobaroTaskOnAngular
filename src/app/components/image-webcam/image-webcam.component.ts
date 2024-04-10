import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-webcam',
  templateUrl: './image-webcam.component.html',
  styleUrls: ['./image-webcam.component.css']
})
export class ImageWebcamComponent {
  private trigger: Subject<any> = new Subject();
  webcamImage: any;
  private nextWebcam: Subject<any> = new Subject();
  constructor(private authService: AuthService,private router:Router) {}

  sysImage = '';
user:any
 
  ngOnInit() {}

  public getSnapshot(): void {
    this.trigger.next(void 0);
  }

  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    console.info('got webcam image', this.sysImage);
    this.authService.captureImage(this.sysImage);

    let currentUser = localStorage.getItem('currentUser')
    if(currentUser != null)
      {
        this.user = JSON.parse(currentUser)
      }
   console.log(this.user.role.toLocaleLowerCase()+"-------->");
   if(this.user.role.toLocaleLowerCase()==='admin'){
   this.router.navigate([this.user.role.toLocaleLowerCase()+"/main"])
   }
   this.router.navigate([this.user.role.toLocaleLowerCase()]);
}

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }
}
