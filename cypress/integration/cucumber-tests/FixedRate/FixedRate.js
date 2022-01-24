import { Given, And, Then, } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../login/LoginPage";
import FixedRatePage from "./FixedRatePage";

Given("I am logged into Deel", () => {
    LoginPage.visit();
    cy.url().should("include", "");
    LoginPage.fillEmailAddress();
    LoginPage.fillPassword();
    LoginPage.clickLogin();
    LoginPage.verifyLoginSucccessful();
});
Then ("user click on create a contract", () => {
   FixedRatePage.clickCreateAContract();
});
And ("select fixed rate", () => {
    FixedRatePage.clickFixedRate();
});
Then ("input contract name", () => {
    FixedRatePage.inputContractName();
});
And ("select country of tax residence", () => {
    FixedRatePage.pickContractorTaxResidence();
});
Then ("select state", () => {
    FixedRatePage.inputState();
});
And ("select job title", () => {
    FixedRatePage.inputJobTitle();
});   
Then ("select seniority level", () => {
    FixedRatePage.pickSeniorityLevel();
});    
And ("input scope of work", () => {
    FixedRatePage.inputScopeOfWork();
});
Then ("click next to proceed to define payment screen", () => {
    FixedRatePage.clickNext();
});
And ("select currency", () => {
    FixedRatePage.pickCurrency();
});    
And ("input payment rate", () => {
    FixedRatePage.inputPaymentRate();
});   
Then ("select payment frequency and invoicing", () => {
    FixedRatePage.pickPaymentFrequency();

});  
Then ("pick invoice cycle", () => {
    FixedRatePage.pickInvoiceCycleEnds

}); 
And ("pick payment due", () => {
    FixedRatePage.pickPaymentDue();
});  
Then ("click next to proceed to define first payment date screen", () => {
    FixedRatePage.clickNext2();
});
And ("select first payment date", () => {
    FixedRatePage.pickFirstPaymentDate();
});
Then ("click next button to proceed to add document screen", () => {
    FixedRatePage.clickNext3();
});
And ("click next to proceed to contract compliance screen", () => {
    FixedRatePage.clickNext4();
});  
Then ("user clicks on create contract button", () => {
    FixedRatePage.clickCreateContract();
});

