/// <reference types='cypress' />

import { accessToken, userStatus } from '../../fixtures/gorestApiData.json';
import { faker } from '@faker-js/faker/locale/en';

const API_BASE_URL = Cypress.env('apiBaseUrl');
const usersUrl = `${API_BASE_URL}/users?access-token=${accessToken}`;
const randomFullName = faker.person.fullName();
const randomEmail = faker.internet.email();
const randomGender = faker.person.sex();
const randomStatus = Cypress._.sample(userStatus);
let userId;

describe('Gorest API testing', () => {
  before(function () {
    cy.fixture('gorestApiData').then((data) => {
      this.data = data;
    });
  });

  const getResponse = () =>
    cy.request({
      method: 'GET',
      url: `${API_BASE_URL}/users`,
    });

  const createUser = () =>
    cy.request({
      method: 'POST',
      url: usersUrl,
      body: {
        name: randomFullName,
        email: randomEmail,
        gender: randomGender,
        status: randomStatus,
      },
    });

  describe('Get Users', () => {
    it('Verify status code', () => {
      getResponse().its('status').should('be.eq', 200);
    });
  });

  describe('Create user', () => {
    it('Verify user can be created', () => {
      createUser().then((response) => {
        expect(response.status).to.equal(201);
        userId = response.body.id;
      });
    });

    it('Verify created user exists', function () {
      cy.request({
        method: 'GET',
        url: `${API_BASE_URL}/users/${userId}?access-token=${accessToken}`,
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.keys(this.data.responseBodyKeys);
      });
    });
  });
});
