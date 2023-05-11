import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import CIMBSGPortal from './platform/cimb-SG/cimb-sg-portal'

const cimbSG = CIMBSGPortal()

Given(/^I am on CIMB SG Portal page$/, () => {
    cimbSG.navigateToHomePage()
})

Given(/^I navigate to Tools page from the menu under Quick Links$/, () => {
    cimbSG.navigateToToolsPage()
})

When(/^I access to Education Loan Calculator \(Standard Repayment\)$/, () => {
    cimbSG.accessEducationLoanCalculator()
})

When(/^I have inputted all necessary values$/, () => {
    cimbSG.enterEducationLoanCalculatorFields()
})

Then(/^I will be able to see the Monthly Installment, Interest Rate, Total Interest Charged and Total Payment Amount$/, () => {
    cimbSG.isCalculatorResultsCorrect()
})

Then(/^I will be able to see an example table of the standard repayment$/, () => {
    cimbSG.compareSnapshotOfSampleStandardRepaymentTable()
})