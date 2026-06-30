import {expect, test} from '../fixtures/base_fixtures'



test.describe('Authentication HRM Flow', ()=>{

    test('User Logs In  Successfully', async({loginPage,dashboardPage})=>{
    await loginPage.navigate();
     await loginPage.login('Admin','admin123');
    //await dashboardPage.waitForDashBoard();

    //Wait for Dashboard to be Visible
     const isVisible=await dashboardPage.isDashBoardVisible();

     expect (isVisible).toBeTruthy();
    
     //Return to Login page

     await dashboardPage.logout()
     await expect(loginPage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     
    })
})