import {test as  base, Page} from '@playwright/test'
import {LoginPage} from '../Pages/LoginPage'
import {DashboardPage} from '../Pages/DashboardPage'


type MyFixtures={
    //declare my fixtures
  loginPage:LoginPage;
  dashboardPage:DashboardPage;
}
//extend test as base
export const test=base.extend<MyFixtures>({
    //setup fixture
loginPage:async({page}, use)=>{
     const loginPage=new LoginPage(page);
     await use(loginPage);//pass page to test

     //teardown

},

dashboardPage:async({page}, use)=>{
     const dashboardPage=new DashboardPage(page);
     await use(dashboardPage);//pass page to test
         }
})

export {expect } from '@playwright/test'