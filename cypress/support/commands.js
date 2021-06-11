import './commands'

/// <reference types="Cypress" />
const accessToken = Cypress.env('gitlab_access_token')

Cypress.Commands.add('api_get_faker_azure', (method_api) => {
  cy.request({
    method: method_api,
    url: 'Activities'
  })
})

Cypress.Commands.add('api_post_faker_azure', (method_api, body_api) => {
  
  cy.request({
    method: method_api,
    url: 'Activities',
    body: body_api
  })
})

Cypress.Commands.add('api_get_id_faker_azure', (method_api, body_api) => {
  
  cy.request({
    method: method_api,
    url: 'Activities' + '/1',
    body: body_api
  })
})

