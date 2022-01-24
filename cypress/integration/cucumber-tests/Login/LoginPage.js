const URL = "https://app.deel.training/login";
const txt_Emailaddress = '[data-cy=email]';
const txt_Password = '[data-cy=password]';
const btn_Login = '[data-cy=log in]';
const btn_Logout = '[data-cy=button]';


class LoginPage {
    static visit() {
       cy.visit(URL);
}
static fillEmailAddress(){
    cy.get('input').first().type('gokesomotan@gmail.com');
}
static fillPassword(){
    cy.get('input').last().type("Olagoke89!")
}
static clickLogin(){
    cy.contains('log in').click({force: true});
}
static verifyLoginSucccessful(){
    cy.get('button').should("be.visible");
}
    }

export default LoginPage;