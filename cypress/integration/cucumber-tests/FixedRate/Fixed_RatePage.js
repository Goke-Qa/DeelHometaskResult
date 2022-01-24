const URL = "https://app.deel.training/login";
const btn_Create_a_contract = '[data-cy=Create A Contract]';
const btn_Fixed_rate = '[data-cy=Fixed Rate]';
const txt_Contract_name = '[data-cy=Contract name]';
const select_Contractor_tax_residence = ".box > :nth-child(1) > .deel-ui__stack_vertical > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container";
const select_State = ":nth-child(2) > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container"
const txt_Job_title = ":nth-child(3) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input";
const select_Seniority_level = '[data-qa="selector-seniority-level"] > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control';
const txt_Scope_of_work = ".deel-ui__textarea-component__textarea";
const select_Predefined_work_scope = ".scopes-dropdown-toggle > .icon > svg";
const btn_Next = '[data-cy=next]';
const select_Currency = ".deel-ui__stack > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__indicators";
const txt_Payment_rate = ".deel-ui__input-component__input";
const select_Payment_frequency = ":nth-child(2) > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control";
const select_Invoice_cycle_ends = ":nth-child(4) > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control";
const btn_Invoicing = '[data-qa="tab-button-DAY_OF_LAST_WEEK"]';
const select_Invoice_cycle = ":nth-child(4) > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control";
const select_Payment_due = ":nth-child(5) > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control";
const btn_Next_2 = ".contract-creation-footer > .mt-9";
const select_First_payment_date = ".deel-ui__select__control";
const btn_Next_3 = ".submit-define-dates";
const btn_Next_4 = ".contract-creation-footer > .mt-7";
const btn_Create_contract = ".contract-creation-footer > .mt-7"

class Fixed_RatePage {
    static visit() {
       cy.visit(URL);
}
static clickCreate_a_contract(){
    cy.contains('Create A Contract').click({force: true});
}
static clickFixed_rate(){
    cy.wait(5000)
    cy.contains('Fixed Rate').click({force: true});
}
static inputContract_name(){
    cy.get('input').first().type("Olagoke Contract")
}
static pickContractor_tax_residence(){
    cy.get(select_Contractor_tax_residence).click();
    cy.contains("United States").click({force: true});
}
static input_State(){
    cy.wait(5000)
    cy.get(select_State).click();
    cy.contains("Colorado").click({force: true});
}
static inputJob_title() {
    cy.get(txt_Job_title).click();
    cy.contains("QA Engineer").click({force: true});
}
static pickSeniority_level(){
    cy.get(select_Seniority_level).click();
    cy.contains("Mid (Individual Contributor Level 2").click({force: true});
}
static inputScope_of_work(){
    cy.get(txt_Scope_of_work).type("QA Engineer");
}
static clickNext(){
    cy.contains('next').click();
}
static pickCurrency(){
    cy.get(select_Currency).click();
    cy.contains("GBP - British").click({force: true});
}
static inputPayment_rate(){
    cy.get(txt_Payment_rate).type(1000);
}
static pickPayment_frequency(){
    cy.get(select_Payment_frequency).click();
    cy.contains("Weekly").click({force: true});
}
static pickInvoice_cycle_ends(){
    cy.get(select_Invoice_cycle_ends).click();
    cy.contains("Friday").click({force: true});
}
static pickPayment_due(){
    cy.get(select_Payment_due).click();
    cy.contains("5 Days later").click({force: true});
}
static clickNext_2(){
    cy.get(btn_Next_2).click();
}
static pickFirst_payment_date(){
    cy.get(select_First_payment_date).click();
    cy.contains("Feb 25th, 2022").click({force: true});
}
static clickNext_3(){
    cy.get(btn_Next_3).click();
}
static clickNext_4(){
    cy.get(btn_Next_4).click();
}
static clickCreate_contract(){
  //  cy.get(btn_Create_contract).click();
    }

}

export default Fixed_RatePage;