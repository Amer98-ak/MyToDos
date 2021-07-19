import { Component, OnInit, HostListener } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToDoService } from '../to-do.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  vector:string ="assets/Img/vector.svg";
  addIcon:string ="assets/Img/addIcon.svg";
  editIcon:string ="assets/Img/editIcon.svg";
  deleteIcon:string ="assets/Img/deleteIcon.svg";
  settingIcon:string ="assets/Img/settingIcon.svg";
  logUser:string ="assets/Img/logUser.svg";
  logUserLite:string ="assets/Img/logUserLite.svg";
  UsrHead:string ="assets/Img/UsrHead.svg";
  UsrBody:string ="assets/Img/UsrBody.svg";
  doubleDown:string ="assets/Img/doubleDown.svg";

  isMobile = false;

  widthmySidebar: Number = 116;
  widtMain: Number = 263;
  marginLeftContent = 116;

  public innerWidth: any;

  closeResult = '';
  LoginUser: string | null = '';
  LoginUserId: string | null = '';
  todoes: any;

  ToDoNameL: string = "";
  ToDoStatus: string = "";
  ToDoEmail: string = "";
  ToDoDescription: string = "";

  DateTo: Date | null | undefined;
  DateFrom: Date | null | undefined;

  constructor(private deviceService: DeviceDetectorService, private modalService: NgbModal, private s: ToDoService) {
      this.isMobile = this.deviceService.isMobile();
      // console.log(this.isMobile);
      if (localStorage.getItem('Id') == null) {
        window.location.href = '/';
      }

      this.s
      .Get()
      .subscribe((data) => {
        this.todoes = data;
      });

      this.LoginUser = localStorage.getItem('UserLofin');
      this.LoginUserId = localStorage.getItem('Id');
    }

    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
  
  @HostListener("window:resize", [])
  private onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.detectScreenSize();
    }, 0)
  }

  private detectScreenSize() {
    if(window.innerWidth <= 647) {
      this.isMobile = true;
    }
    else {
      this.isMobile = false;
    }
  }

  OpenCloseNav() {
    if(this.widthmySidebar == 263) {
      this.widthmySidebar = 116; 
      this.widtMain = 263;
      this.marginLeftContent = 116;
    }
    else {
      this.widthmySidebar = 263; 
      this.widtMain = 263;
      this.marginLeftContent = 263;
    }
  }
  
}
