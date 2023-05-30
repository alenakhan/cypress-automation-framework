class LoginPage{
    visitLoginPage() {
        cy.visit(Cypress.env('loginPage'));
    }

    getUsernameInput = () => cy.get('#username');
    getPasswordInput = () => cy.get('#password');
    getSubmitButton = () => cy.get('button[type="submit"]');
    getSuccessMessage = () => cy.get('#flash[class="flash success"]');

}
export default LoginPage;