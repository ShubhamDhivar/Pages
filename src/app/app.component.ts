import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage =0;
  

  images = [
    {
      title:'Mini cooper',
      imageURL: 'https://images.unsplash.com/photo-1600016326108-40b24ee22cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      title:'Toyota',
      imageURL: 'https://images.unsplash.com/flagged/photo-1564153296137-400b51e1ff6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=915&q=80'
    },
    {
      title:'Volkwagen',
      imageURL: 'https://images.unsplash.com/photo-1651110920549-a3295ff12a39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      title:'Lamborgini',
      imageURL: 'https://images.unsplash.com/photo-1606106931154-e644430401aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fExhbWJvcmdpbml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Skoda',
      imageURL: 'https://images.unsplash.com/photo-1617631653506-98a461291a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2tvZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Maruti',
      imageURL: 'https://images.unsplash.com/photo-1568310242860-b365653288c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
    },
    {
      title:'Mahindra',
      imageURL: 'https://images.unsplash.com/photo-1633867179970-c54688bcfa33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      title:'Hyundai',
      imageURL: 'https://images.unsplash.com/photo-1670488645266-e11deb6c75d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
    },
    {
      title:'BMW',
      imageURL: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      title:'Audi',
      imageURL: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
    }


  ];
  
  showNav(i : number){

    return Math.abs(this.currentPage - i) < 5;
  }
}