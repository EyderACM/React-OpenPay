describe('Input data', () => {
  beforeEach(() => {
    cy.restoreLocalStorage()
    cy.visit('http://localhost:3000/charge')
    cy.get('#purchase_button').click()
    cy.get('#owner_name').type('Eyder A. Concha')
    cy.get('#card_number').type('5555555555554444')
    cy.get('#expiration_date-month').type('05')
    cy.get('#expiration_date-year').type('30')
    cy.get('#cvc').type('123')
    cy.get('#payment_button').click()
  })

  afterEach(() => {
    cy.saveLocalStorage()
  })

  /*
  it('loads autenthicated page', () => {
    cy.visit('http://localhost:3000/charge')
  })

  it('Open purchase modal', () => {
    cy.get('#purchase_button').click()
  })

  it('Input data', () => {
    cy.get('#owner_name').type('Eyder A. Concha')
    cy.get('#card_number').type('5555555555554444')
    cy.get('#expiration_date-month').type('05')
    cy.get('#expiration_date-year').type('30')
    cy.get('#cvc').type('123')
  })

  it('Submit Data', () => {
    cy.get('#payment_button').click()
  })
  */

  for (let i = 0; i < 400; i++) {
    it('Get Data', () => {
      cy.intercept({
        method: 'POST',
        url: 'http://localhost:3001/api/posts/charge/post',
      }).as('successfulPayment')

      cy.wait('@successfulPayment').then((interception) => {
        assert.isNotNull(interception.response.body, 'Successful response')
      })
    })
  }
})
