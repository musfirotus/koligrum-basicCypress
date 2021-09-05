const locator = require('../locators/HomepageLocator');
let css_color = {
    Blue: 'background-color: blue;',
    Yellow: 'background-color: yellow;',
    Cyan: 'background-color: cyan;',
    White: 'background-color: white;'
}

class Homepage {
    async visit(path){
        cy.visit(path);
        return cy.url().should('eq','http://bdd.atlasid.tech/');
    }

    async type_quote(quote){
        return cy.get(locator.datatestid.ta_quote).type(quote);
    }

    async choose_color(color){
        return cy.get(locator.datatestid.sel_color).select(color);
    }

    async submit_quote(quote, color){
        cy.get(locator.datatestid.btn_submit).click();
        cy.get(locator.datatestid.cont_color).should('have.attr', 'style', css_color[color]);
        cy.get(locator.datatestid.cont_color).should('have.attr', 'style').then((colour) => {
            expect(colour).to.be.equal(css_color[color]);
        })
        return cy.contains(quote).should('exist');
    }

    async clear_quote(quote){
        return cy.contains(quote).click().should('not.exist');
    }
}

module.exports = Homepage;