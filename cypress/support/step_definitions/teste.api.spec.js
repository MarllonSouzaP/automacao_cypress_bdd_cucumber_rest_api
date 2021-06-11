/// <reference types="Cypress" />

/* global Given, When, Then */

Then(/^tenho o retorno "([^"]*)"$/, (retorno) => {
    return true;
});
  
Given(/^quando realizo uma chamada do tipo "([^"]*)"$/, (method_api) => {
  cy.api_get_faker_azure(method_api)
  .then(response => {
    expect(response.status).to.equal(200)
  })
});

Given(/^quando realizo uma chamada do tipo "([^"]*)" com payload válido$/, (method_api) => {
	const payload_post = require('../payload/post.json')

  cy.api_post_faker_azure(method_api, payload_post)
  .should(response => {
    expect(response.status).to.equal(200)
  })
});

Given(/^quando realizo uma chamada do tipo "([^"]*)" e o id do payload$/, (method_api) => {
	const payload_post = require('../payload/post.json')

  cy.api_get_id_faker_azure(method_api, payload_post)
  .should(response => {
    expect(response.status).to.equal(200)
  })
});

