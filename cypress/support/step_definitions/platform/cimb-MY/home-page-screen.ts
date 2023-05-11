import { HomePageMYScreen } from "../../../types/interfaces"


export default function HomePageMYScreen(): HomePageMYScreen {
    const cimbHomePageUrl = 'https://www.cimb.com.my/en/personal/home.html'
    const selectors = {
        footerSection: '[class="footer-top"]',
        popupModal: 'dialog[data-uuid="938bd821-a1d1-44e6-94a1-5a47829a7063"]'
    }

    function navigateToHomePage(): void {
        cy.visit(cimbHomePageUrl)
        cy.get(selectors.popupModal).find('svg').click()
    }

    function selectCIMBDeals(): void {
        cy.get(selectors.footerSection).then((footer) => {
            cy.wrap(footer).contains('a','CIMB Deals').then((dealEle) => {
                cy.wrap(dealEle).invoke('removeAttr','target').click()
            })
        })
    }

    return {
        navigateToHomePage,
        selectCIMBDeals
    }
}