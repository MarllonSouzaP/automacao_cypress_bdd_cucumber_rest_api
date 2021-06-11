/// <reference types="Cypress" />

/* global Given, When, Then */

  Given(/^quando fazer a chamar de get da api$/, () => {
    cy.api_test_get()
    .then(response => {
      expect(response.status).to.equal(200)
    })
  });

  Given(/^quando fazer a chamar de post da api$/, () => {
    cy.api_test_post()
    .then(response => {
      expect(response.status).to.equal(200)
      expect(response.body).to.contain({"success": "true"})
    })
  });

  Given(/^quando tenho uma url válida para teste$/, () => {
    return true;
  });

  When(/^quando realizo uma chamada do tipo$/, () => {
      cy.api_get_reqres()
      .then(response => {
        expect(response.status).to.equal(200)
      })
  });

  Then(/^tenho o retorno "([^"]*)"$/, (args1) => {
    return true;
  });


  Given(/^quando tenho uma payload válido teste$/, () => {
    return true;
  });

  When(/^quando realizo uma chamada do tipo post$/, () => {
      cy.api_post_reqres()
      .then(response => {
        expect(response.status).to.equal(201)
      })
  });
