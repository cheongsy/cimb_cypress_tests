Feature: CIMB SG Portal - Tools

Background: 
        Given I am on CIMB SG Portal page
        And I navigate to Tools page from the menu under Quick Links


 @Priority-Critical @@cimb
    Scenario: Tools - Education Loan Calculator - Calculate standard repayment
        When I access to Education Loan Calculator (Standard Repayment) 
        And I have inputted all necessary values
        Then I will be able to see the Monthly Installment, Interest Rate, Total Interest Charged and Total Payment Amount
        And I will be able to see an example table of the standard repayment