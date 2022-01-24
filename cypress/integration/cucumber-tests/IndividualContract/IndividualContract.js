import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import IndividualContractPage from "./IndividualContractPage";
import LoginPage from "../login/LoginPage";

Given("I am logged into Deel", () => {
    LoginPage.visit();
    cy.url().should("include", "");
    LoginPage.fillEmailAddress();
    LoginPage.fillPassword();
    LoginPage.clickLogin();
    LoginPage.verifyLogin();
  });

  When ("user selects i'm an individual", () => {
    IndividualContractPage.clickIamAnIndividual();
  });

  And ("input necessary information", () => {
    IndividualContractPage.pickCitizen();
    IndividualContractPage.pickTax();
    IndividualContractPage.pickLegal();
    IndividualContractPage.inputDOB();
    IndividualContractPage.inputPhonenumber();
    IndividualContractPage.inputAddress();
  });

  Then ("click on complete profile", () => {
    IndividualContractPage.clickComplete();
  });