import LoginPage from "./LoginPage";

class SecureAreaPage {
    getSecureAreaPageSuccessMessage = () => cy.get('#flash[class="flash success"]');
    getSecureAreaPageHeader = () => cy.get('h2');
    getLogoutButton = () => cy.get('a.button[href="/logout"]');


    clickLogoutButton() {
        this.getLogoutButton().click();
        return new LoginPage;
    }
}
export default SecureAreaPage;