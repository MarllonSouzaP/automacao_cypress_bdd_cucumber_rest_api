import './commands'

/// <reference types="Cypress" />
const accessToken = Cypress.env('gitlab_access_token')

Cypress.Commands.add('api_test_get', () => {
  cy.request({
    method: 'GET',
    url: `https://reqbin.com/echo`
  })
})

Cypress.Commands.add('api_test_post', () => {
  cy.request({
    method: 'POST',
    url: `https://reqbin.com/echo/post/json`,
    header: `Accept: application/json`,
    body: {
      "Id": 78912,
      "Customer": "Jason Sweet",
      "Quantity": 1,
      "Price": 18.00
     }
  })
})

Cypress.Commands.add('api_get_reqres', () => {
    cy.request({
      method: 'GET',
      url: `https://reqres.in/api/users?page=1`
    })
  })

Cypress.Commands.add('api_post_reqres', () => {
  cy.request({
    method: 'POST',
    url: `https://reqres.in/api/users`,
    header: `Accept: application/json`,
    body: {"name": "morpheus",
          "job": "leader"}
  })
})


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


// Cypress.Commands.add('api_put_id_faker_azure', (method_api, body_api) => {
  
//   cy.request({
//     method: method_api,
//     url: 'Activities' + '/1',
//     body: body_api
//   })
// })