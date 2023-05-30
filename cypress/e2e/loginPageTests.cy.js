/// <reference types='cypress' />
import LoginPage from '../pageObjects/LoginPage';

const loginPage = new LoginPage();

describe('Login Page Tests', () => {
  beforeEach(function () {
    cy.fixture('loginPage').then((loginPage) => {
      this.loginPageData = loginPage;
    });

    loginPage.visitLoginPage();
  });

  it('Login with valid credentials', function () {
    loginPage.getUsernameInput().type(this.loginPageData.validUsername);
    loginPage.getPasswordInput().type(this.loginPageData.validPassword);
    loginPage.getSubmitButton().click();
    loginPage
      .getSuccessMessage()
      .should('be.visible')
      .and('contain', this.loginPageData.successMessage);
  });
});
