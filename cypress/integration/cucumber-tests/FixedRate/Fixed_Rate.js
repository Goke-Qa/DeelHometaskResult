import { Given, And, Then, } from "cypress-cucumber-preprocessor/steps";
import login_Page from "../login/login_Page";
import Fixed_RatePage from "./Fixed_RatePage";

Given("I am logged into Deel", () => {
    login_Page.visit();
    cy.url().should("include", "");
    login_Page.fillEmailaddress();
    login_Page.fillPassword();
    login_Page.clickLogin();
    login_Page.verifyLogin_succcessful();
});
Then ("user click on create a contract", () => {
   Fixed_RatePage.clickCreate_a_contract();
});
And ("select fixed rate", () => {
    Fixed_RatePage.clickFixed_rate();
});
Then ("input contract name", () => {
    Fixed_RatePage.inputContract_name();
});
And ("select country of tax residence", () => {
    Fixed_RatePage.pickContractor_tax_residence();
});
Then ("select state", () => {
    Fixed_RatePage.input_State();
});
And ("select job title", () => {
    Fixed_RatePage.inputJob_title();
});   
Then ("select seniority level", () => {
    Fixed_RatePage.pickSeniority_level();
});    
And ("input scope of work", () => {
    Fixed_RatePage.inputScope_of_work();
});
Then ("click next to proceed to define payment screen", () => {
    Fixed_RatePage.clickNext();
});
And ("select currency", () => {
    Fixed_RatePage.pickCurrency();
});    
And ("input payment rate", () => {
    Fixed_RatePage.inputPayment_rate();
});   
Then ("select payment frequency and invoicing", () => {
    Fixed_RatePage.pickPayment_frequency();
//    Fixed_RatePage.clickInvoicing();
});  
Then ("pick invoice cycle", () => {
    Fixed_RatePage.pickInvoice_cycle_ends
//    Fixed_RatePage.pickInvoice_cycle();
}); 
And ("pick payment due", () => {
    Fixed_RatePage.pickPayment_due();
});  
Then ("click next to proceed to define first payment date screen", () => {
    Fixed_RatePage.clickNext_2();
});
And ("select first payment date", () => {
    Fixed_RatePage.pickFirst_payment_date();
});
Then ("click next button to proceed to add document screen", () => {
    Fixed_RatePage.clickNext_3();
});
And ("click next to proceed to contract compliance screen", () => {
    Fixed_RatePage.clickNext_4();
});  
Then ("user clicks on create contract button", () => {
    //Fixed_RatePage.clickCreate_contract();
});