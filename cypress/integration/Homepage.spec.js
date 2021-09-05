const Homepage = require('../support/pages/Homepage');
let homepage = new Homepage();
const HomepageData = require('../support/datatest/HomepageData');

describe('BDD Atlas', () => {
    it ('Visit BDD Atlas Web', () => {
        homepage.visit('');
    })

    it('Type a Quote', () => {
        homepage.type_quote(HomepageData.datatest.quote);
    })

    it('Select Color', () => {
        homepage.choose_color(HomepageData.datatest.quote_color);
    })

    it('Submit Quote', () => {
        homepage.submit_quote(HomepageData.datatest.quote, HomepageData.datatest.quote_color);
    })

    it('Clear Specific Quote', () => {
        homepage.clear_quote(HomepageData.datatest.quote);
    })
})