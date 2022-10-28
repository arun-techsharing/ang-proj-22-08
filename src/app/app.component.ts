import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl:'./app.component.html',
  styles:['h1{color:red}']
})
export class AppComponent {
  title = 'angProj';

  navigationLstValues:any[] =[
    {
      navNm:'Home',
      pathVal:'/home'
    },
    
    {
      navNm:'Services',
      pathVal:'/services/200'
    },
    {
      navNm:'View Prducts',
      pathVal:'viewproducts'
    },   
    {
      navNm:'Contact Us',
      pathVal:'/contact'
    }
  ];
  
}
