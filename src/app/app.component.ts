import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl:'./app.component.html',
  styles:['h1{color:red}']
})
export class AppComponent {
  title = 'angProj';
  public envValues = environment;

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
