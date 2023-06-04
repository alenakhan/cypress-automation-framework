/// <reference types='cypress' />
import LoginPage from '../pageObjects/LoginPage';
import SecureAreaPage from '../pageObjects/SecureAreaPage';

const loginPage = new LoginPage();
const securePage = new SecureAreaPage();

describe('Login Page Tests', () => {
  before(function () {
    cy.fixture('loginPage').then((loginData) => {
      globalThis.loginData = loginData;
    });

    cy.fixture('secureAreaPage').then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
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

  it('Logout from Secure Area', () => {
    loginPage
      .typeUsername(loginData.validUsername)
      .typePassword(loginData.validPassword)
      .clickSubmitButton()
      .getSecureAreaPageHeader()
      .should('be.visible')
      .and('have.text', data.secureAreaPageHeaderName);
      
    securePage
      .clickLogoutButton()
      .getLoginPageSuccessMessage()
      .should('be.visible')
      .and('contain', loginData.logoutSuccessMessage);
  });
});
