Feature: Advanced Search

  Scenario: Exact Title Match
    When I do an advanced search with Title "How to Open Locks with Improvised Tools"
    Then the only result should be:
      | Title  | How To Open Locks With Improvised Tools |
      | Author | Hans Conkel                             |

  Scenario: Partial Title Match
    When I do an advanced search with Title "Open Locks"
    Then there should be multiple results
    And the results should include:
      | Title                                                  | Author        |
      | How To Open Locks With Improvised Tools                | Hans Conkel   |
      | How To Open Locks Without Keys Or Picks (Locksmithing) | Paladin Press |