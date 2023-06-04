import SecureAreaPage from "./SecureAreaPage";

class LoginPage {
    visitLoginPage() {
        cy.visit(Cypress.env('loginPage'));
    };

    getUsernameInput = () => cy.get('#username');
    getPasswordInput = () => cy.get('#password');
    getSubmitButton = () => cy.get('button[type="submit"]');
    getLoginPageSuccessMessage = () => cy.get('#flash[class="flash success"]');


    typeUsername(username) {
        this.getUsernameInput().type(username);
        return this;
    };

    typePassword(password) {
        this.getPasswordInput().type(password);
        return this;
    };

    clickSubmitButton() {
        this.getSubmitButton().click();
        return new SecureAreaPage;
    };

}
export default LoginPage;