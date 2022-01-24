Feature: Setting Fixed Rate
    I want to be able create my fixed rate
    
    Background:
        Given I am logged into Deel
    
    Scenario: To input my fixed rate
        Then user click on create a contract
        And select fixed rate
        Then input contract name
        And select country of tax residence
        Then select state
        And select job title
        Then select seniority level
        And input scope of work
        Then click next to proceed to define payment screen
        And select currency
        And input payment rate
        Then select payment frequency and invoicing
        Then pick invoice cycle
        And pick payment due
        Then click next to proceed to define first payment date screen
        And select first payment date
        Then click next button to proceed to add document screen
        And click next to proceed to contract compliance screen
        Then user clicks on create contract button