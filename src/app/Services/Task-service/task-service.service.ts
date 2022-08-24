import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

interface Task{
  idTache : number,
  descriptionTache : string,
  dateDepT : Date,
  dateFinT : Date,
  etat : boolean,
  estimation : number,
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private httpClient: HttpClient) {

   }

  getTasks(){
    return this.httpClient.get<Task[]>("http://localhost:5000/tasks");
  }
}
