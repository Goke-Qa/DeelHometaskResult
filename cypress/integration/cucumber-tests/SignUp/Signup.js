import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import SignupPage from "./SignupPage";

Given("user launches Deel URL", () => {
  SignupPage.visit();
  cy.url().should("include", "");
});

Then("user clicks on sign up", () => {
  SignupPage.clickSignup();
});

When("user selects as a contractor option", () => {
  SignupPage.pickContractor();
});

And("user fills all necessary data", () => {
  SignupPage.fillFullname();
  SignupPage.fillEmailAddress();
  SignupPage.fillPassword();
  SignupPage.fillConfirmPassword();
  SignupPage.pickHowAboutDeel
 });

 Then("user clicks create your Deel account button", () => {
  SignupPage.clickCreateDeelAccount();
 });
