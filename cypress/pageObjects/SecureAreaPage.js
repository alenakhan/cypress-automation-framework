class SecureAreaPage {
    getSecureAreaPageSuccessMessage = () => cy.get('#flash[class="flash success"]');
    getSecureAreaPageHeader = () => cy.get('h2');

    
}
export default SecureAreaPage;