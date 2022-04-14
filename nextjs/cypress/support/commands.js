Cypress.Commands.add('loginByForm', (email, password) => {
  Cypress.log({
    name: 'loginByForm',
    message: `${email} | ${password}`
  })

  return cy.request({
    method: 'POST',
    url: Cypress.env('baseUri') + '/api/login',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    })
  })
})
