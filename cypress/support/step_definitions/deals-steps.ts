import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import CIMBMYPortal from './platform/cimb-MY/cimb-my-portal'
import { cimbDealsConstants } from './platform/constants'

const cimbMY = CIMBMYPortal()

Given(/^I am on CIMB MY Portal page$/, () => {
    cimbMY.navigateToHomePage()
})

When(/^I select CIMB Deals$/, () => {
    cimbMY.selectCIMBDeals()

    //TODO: Need to figure out why cookies popup doesn't appear on initial Cypress test run but will appear on subsequent Cypress test run
    //cimbMY.closeCookiesPopup()
})

When(/^I click on View All for Travel & Lifestyle$/, () => {
    cimbMY.viewAllForTravelAndLifeStyle()
})

When(/^I explore more on "(.*)" offer$/, (offerType: string) => {
    switch (offerType) {
        case 'ANANTARA DESARU COAST RESORT & VILLAS':
            cimbMY.exploreOffer(cimbDealsConstants.anantaraDeal)
            break
        default:
            throw new Error(`"${offerType}" offer type is not defined.`)
    }
})

Then(/^I will be able to see and verify its details and other similar deals beneath it$/, () => {
    cimbMY.validateAnantaraDealDetails()
})