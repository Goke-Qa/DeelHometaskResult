const URL = "https://app.deel.training/login";
const btn_Signup = '[data-cy=Sign Up]';
const btn_Contractor = ".pl-6 > .selector";
const btn_Continue = ".w-100 > div";
const txt_Fullname = ":nth-child(2) > .input-container > .input > input";
const txt_Emailaddress = ":nth-child(3) > .input-container > .input > input";
const txt_Password = ":nth-child(4) > .input-container > .input > input";
const txt_Confirmpassword = ":nth-child(5) > .input-container > .input > input";
const inp_HowdidyouhearaboutDeel = ".select__value-container";
const btn_CreateyourDeelaccount = "form > .button > div";

class SignupPage {
  static visit() {
     cy.visit(URL);
  }
  static clickSignup(){
    cy.contains('Sign Up').click({force: true})
  }
  static pickContractor() {
    cy.get(btn_Contractor).click();
    cy.get(btn_Continue).click();
  }
  static fillFullname() {
    cy.get(txt_Fullname).type("Olagoke Somotan");
  }
  static fillEmailAddress(){
    cy.get(txt_Emailaddress).type("gokesomotan@gmail.com");
  }
  static fillPassword() {
    cy.get(txt_Password).type("Olagoke89!");
  }
  static fillConfirmPassword() {
    cy.get(txt_Confirmpassword).type("Olagoke89!");
  }
  static pickHowAboutDeel() {
    cy.get(inp_HowdidyouhearaboutDeel).select('LinkedIn')
  }
  static clickCreateDeelAccount() {
    cy.get(btn_CreateyourDeelaccount).click();
  }
}
export default SignupPage;
