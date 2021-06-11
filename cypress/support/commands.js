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