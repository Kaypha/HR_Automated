import { Page, Locator } from "@playwright/test";

export class DashboardPage{
    //declare variables
    readonly page:Page;
   
    readonly dashTitle:Locator;
    readonly userDrop:Locator;
    readonly userLogout:Locator;
    //Instantiate Variables
    constructor(page:Page){
        this.page=page;
     
        this.dashTitle=page.getByRole('heading', { name: 'Dashboard' });
        this.userDrop= page.getByRole('listitem').filter({ hasText: 'manda user' }).locator('i');
        this.userLogout=page.getByRole('menuitem', { name: 'Logout' });
    }

    async navigate(){
     await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }



    /*async waitForDashBoard(timeoutMs: number=50000){
   await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index', {timeout:timeoutMs});
    }*/
    async isDashBoardVisible():Promise<Boolean>{
        return await this.dashTitle.isVisible();
    }
    async logout(){
     await this.userDrop.click();
     await this.userLogout.click();
    }
}