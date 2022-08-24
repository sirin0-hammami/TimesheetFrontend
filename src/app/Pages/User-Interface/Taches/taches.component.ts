import { TaskServiceService } from './../../../Services/Task-service/task-service.service';
import {Component, OnInit , ViewChild} from '@angular/core';
import { faTh, faCheck, faTrash, faAngleDown, faAngleUp, faPen } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-regular',
  templateUrl: './taches.component.html',
  styles: []
})
export class TachesComponent implements OnInit {


  faTh = faTh;
  faCheck = faCheck;
  faTrash = faTrash;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faPen = faPen;
  heading = 'Regular Tables';
  subheading = 'Some quote about getting things done here ';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';
  page = 1;
  PageSize = 10;
  closeResult: string;

  tasks : any ;

  constructor(private service:TaskServiceService) {
  }
 
  
  ngOnInit() {
    this.service.getTasks().subscribe(response => {this.tasks = response; console.log(response)})
  }

}
