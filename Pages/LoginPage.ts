import { Page, Locator } from "@playwright/test";

export class LoginPage{
    //declare variables
    readonly page:Page;
    readonly userInput:Locator;
    readonly userPass:Locator;
    readonly userLogin:Locator;
   
    //Instantiate Variables
    constructor(page:Page){
        this.page=page;
        this.userInput=page.getByRole('textbox', { name: 'Username' });
        this.userPass=page.getByRole('textbox', { name: 'Password' });
        this.userLogin=page.getByRole('button', { name: 'Login' });
       
    }

    async navigate(){
     await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
         {waitUntil: 'domcontentloaded'});
    
    }

    async login(Username:string, password:string){
    this.userInput.fill('username');
      this.userPass.fill('password');
      this.userLogin.click();
    }

  
 
}

