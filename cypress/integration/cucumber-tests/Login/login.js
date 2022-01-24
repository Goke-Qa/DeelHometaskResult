import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "./LoginPage";


Given("user launches Deel URL", () => {
    LoginPage.visit();
    cy.url().should("include", "");
  });
  
  Then("user inputs valid login details", () => {
    LoginPage.fillEmailAddress();
    LoginPage.fillPassword();
    });
  
  And("user clicks login button", () => {
    LoginPage.clickLogin();
  });
  
  Then("confirm user has successfully login", () => {
    LoginPage.verifyLoginSucccessful();
   });
  