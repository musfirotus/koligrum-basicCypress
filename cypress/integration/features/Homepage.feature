Feature: BDD Atlas Homepage Color Quote

    I want to be able to submit quote in various Color

    Scenario: I want to be able to submit a Blue Quote
        Given I open BDD Atlas Web
        When I type a quote: This is daily quote
        And I choose the Blue color
        Then I verify quote submitted "Blue" and "This is daily quote"
        Then I verify quote has been deleted: daily

    Scenario Outline: I want to be able to submit a Blue Quote
        Given I open BDD Atlas Web
        When I type a quote: This is daily quote
        And I choose the <color> color
        Then I verify quote submitted "<color>" and "This is daily quote"
        Then I verify quote has been deleted: daily
    Examples:
        | color  |
        | White  |
        | Yellow |
        | Cyan   |