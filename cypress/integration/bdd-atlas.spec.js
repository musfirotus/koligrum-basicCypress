describe('BDD Atlas', () => {
    it ('Visit BDD Atlas Web', () => {
        cy.visit('http://bdd.atlasid.tech/');
        cy.url().should('eq','http://bdd.atlasid.tech/');
        cy.url().then((url) => {
            expect(url).to.be.equal('http://bdd.atlasid.tech/');
        })
    })

    it('Type a Quote', () => {
        cy.get('#inputQuote').type('This is daily quote');
    })

    it('Select Color', () => {
        cy.get('#colorSelect').select('Blue');
    })

    it('Submit Quote', () => {
        cy.get('#buttonAddQuote').click();
    })

    it('Clear Specific Quote', () => {
        cy.wait(2000);
        cy.contains('daily').click().should('not.exist');
        cy.wait(2000);
    })
})