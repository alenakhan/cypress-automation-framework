/// <reference types='cypress' />
import LoginPage from '../pageObjects/LoginPage';

const loginPage = new LoginPage();

describe('Login Page Tests', () => {
  before(function () {
    cy.fixture('loginPage').then((loginData) => {
      globalThis.loginData = loginData;
    });

    cy.fixture('secureAreaPage').then((data) => {
        globalThis.data = data;
      });

    loginPage.visitLoginPage();
  });

  it('Login with valid credentials', function () {
    loginPage
      .typeUsername(loginData.validUsername)
      .typePassword(loginData.validPassword)
      .clickSubmitButton()
      .getSecureAreaPageSuccessMessage()
      .should('be.visible')
      .and('contain', data.securePageSuccessMessage);    
  });
});
