import { CIMBDealsScreen } from "../../../types/interfaces";
import { cimbDealsConstants } from "../constants";

export default function CIMBDealsScreen(): CIMBDealsScreen {
    const selectors = {
        cookiesPopupModal: '[class*=cookie-btn-text]',
        cimbDealsSection: 'div[class*="-cimbd-deal-"]',
        similarDealSections: '[class="alp-cimbd-deal card"]'
    }

    function closeCookiesPopup(): void {
        cy.origin('https://deals.cimb.com', 
            { args: selectors }, ({ cookiesPopupModal }) => {
                cy.get(cookiesPopupModal).contains('Accept & Close').click()
            })
    }

    function validateAnantaraDealDetails(): void {
        cy.origin('https://deals.cimb.com', {args:selectors}, ({similarDealSections}) => {
            cy.get('.tab-content').then((tabContent) => {
                cy.wrap(tabContent).contains('Exclusively for CIMB debit, credit and prepaid cardholders in Malaysia, Singapore, Indonesia and Thailand')
                cy.wrap(tabContent).contains('20% OFF best available rates on')
                cy.wrap(tabContent).contains('Rooms')
                cy.wrap(tabContent).contains('Villas')
                cy.wrap(tabContent).contains('Beach Residences')
                cy.wrap(tabContent).contains('Promotion valid from 1 May 2022 till 30 June 2023')
                cy.wrap(tabContent).contains('Terms and Conditions apply.')
            })

            cy.contains('Similar Deals').should('be.visible')
            cy.get(similarDealSections).should('have.length', 4)
        })
    }

    function exploreOffer(offerType: string): void {
        switch (offerType) {
            case cimbDealsConstants.anantaraDeal:
                cy.origin('https://deals.cimb.com', 
                { args: cimbDealsConstants }, () => {
                    cy.contains(cimbDealsConstants.anantaraDeal).click()
                })
                break
            default:
                throw new Error(`"${offerType}" offer type is not defined.`)
        }
    }

    function viewAllForTravelAndLifeStyle(): void {
        cy.origin('https://deals.cimb.com', 
            { args: selectors }, ( { cimbDealsSection }) => {
            cy.contains('travel & lifestyle')
                .parents(cimbDealsSection)
                .contains('View All')
                .click()
        })
    }

    return {
        closeCookiesPopup,
        exploreOffer,
        validateAnantaraDealDetails,
        viewAllForTravelAndLifeStyle
    }
}