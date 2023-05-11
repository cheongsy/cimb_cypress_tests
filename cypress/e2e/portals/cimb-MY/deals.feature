Feature: CIMB MY Portal - CIMB Deals

Background: 
        Given I am on CIMB MY Portal page


 @Priority-Critical @cimb @deals
    Scenario: Explore CIMB deal - Travel & Lifestyle offer
        When I select CIMB Deals
        And I click on View All for Travel & Lifestyle
        And I explore more on "ANANTARA DESARU COAST RESORT & VILLAS" offer
        Then I will be able to see and verify its details and other similar deals beneath it


