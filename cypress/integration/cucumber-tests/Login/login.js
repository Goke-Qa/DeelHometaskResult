import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import login_Page from "./login_Page";


Given("user launches Deel URL", () => {
    login_Page.visit();
    cy.url().should("include", "");
  });
  
  Then("user inputs valid login details", () => {
    login_Page.fillEmailaddress();
    login_Page.fillPassword();
    });
  
  And("user clicks login button", () => {
    login_Page.clickLogin();
  });
  
  Then("confirm user has successfully login", () => {
    login_Page.verifyLogin_succcessful();
   });
  