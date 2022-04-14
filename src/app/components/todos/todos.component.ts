import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  inputTodo:string="";

  bucketList:Todo[];

  addTodo(){
    this.bucketList.push({
      content:this.inputTodo,
      completed:false
    });
    this.inputTodo="";
  }

  
  ngOnInit(): void {
    this.bucketList=[
     {
      content:'First Todo',
      completed:false
     },
     {
      content:'Second Todo',
      completed:false
     }
  ]
  }

  toggleDone(id:number){
    this.bucketList.map((v,i)=>{
    if(i==id)v.completed=!v.completed;
    return v;
    })
  }

  deleteTodo(id:number){
    this.bucketList=this.bucketList.filter((v,i)=>i !==id);
  }

  constructor() { }

}
