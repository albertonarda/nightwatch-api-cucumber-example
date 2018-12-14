Feature: CSSZenGarden Page

  Scenario: Page exists

    Given I open the url "http://www.csszengarden.com"
    Then the title is "CSS Zen Garden: The Beauty of CSS Design"

  Scenario: Link to all designs works

    Given I open the url "http://www.csszengarden.com"
    When I click on the element ".viewall"
    Then the url should be "http://www.mezzoblue.com/zengarden/alldesigns/"

  Scenario: Submit button exists

    Given I open the url "http://www.csszengarden.com"
    Then the element ".zen-submit" should be visible
    And the element ".zen-submit" should contain "SUBMIT A DESIGN"