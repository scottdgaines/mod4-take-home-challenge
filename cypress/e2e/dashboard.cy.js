describe ('Dashboard', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2MEU8OnzB8NLWNX4AqkTCo13CdBrRjse', {fixture: 'stub.json'});
    cy.visit('http://localhost:3000/')
  })

  it('Should display the home page', () => {
    cy.get('.page-title').should('be.visible')
    cy.get('.container-title').should('be.visible')
      .should('contain', 'Today\'s Headlines')
    cy.get('.filter').should('be.visible')
      .should('contain', 'Display Articles by Topic')
    cy.get('button').should('be.visible')
      .should('contain', 'Submit')
    cy.get('select').should('be.visible')
      .should('contain', 'All')
    cy.get('.card').should('be.visible')
      .should('contain', 'Test Title')
      .should('contain','Test Byline')
    cy.get('.article-image').should('be.visible')
  })
  
  it('Should navigate to the Details View', () => {
    cy.get('.card').click()
    cy.location('href').should('eq', 'http://localhost:3000/1')
  })

  it('Should display the Details View', () => {
    cy.get('.card').click()
    cy.get('.page-title').should('be.visible')
    cy.get('[href="/"]').should('be.visible')
      .should('contain', 'Return Home')
    cy.get('.detail-title').should('be.visible')
      .should('contain', 'Test Title')
    cy.get('h3').should('be.visible')
      .should('contain', 'Test Byline')
    cy.get('section > :nth-child(4)').should('be.visible')
      .should('contain', 'Test section | Test subsection')
    cy.get('.detail-article > :nth-child(1)').should('be.visible')
      .should('contain', 'Test Abstract')
    cy.get('.detail-article > :nth-child(2)').should('be.visible')
      .should('contain', 'To read the full article')
    cy.get('.detail-view-image').should('be.visible')
    cy.get('section > :nth-child(6)').should('be.visible')
      .should('contain', 'Test Published Date')
  })

  it('Should be able to navigate back to the home page', () => {
    cy.get('a').click()
    cy.get('[href="/"]').click()
    cy.location('href').should('eq', 'http://localhost:3000/')
  })
})