import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
export type EditorType = 'login' | 'signin'

@Component({
  selector: 'app-auth',
  // template: '<router-outlet></router-outlet>',
  templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  editor: EditorType = 'login';
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  get chengeLonInEditor(){
    return this.editor === 'login'
  }

  get chengeSignInEditor(){
    return this.editor === 'signin'
  }
  toggleEditor(type: EditorType) {
    this.editor = type;
  }
  open(authModal:any) {
    this.modalService.open(authModal)
  }
  toggleAndOpen(type: EditorType,authModal:any)
  {
    this.toggleEditor(type)
    this.open(authModal)
  }


  ngOnInit(): void {
  }

}
