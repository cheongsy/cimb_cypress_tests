import { HomePageSGScreen } from "../../../types/interfaces"
import { toolsPageConstants } from "../constants"


export default function HomePageSGScreen(): HomePageSGScreen {
    const cimbHomePageUrl = 'https://www.cimb.com.sg/en/personal/home.html'
    const selectors = {
        menu: '[class*="burger-menu"]'
    }

    function accessEducationLoanCalculator(): void {
        cy.contains(toolsPageConstants.educationLoanCalc).parent().find('a').then((calcEle) => {
            cy.wrap(calcEle).invoke('removeAttr','target').click()
        })
    }

    function navigateToHomePage(): void {
        cy.visit(cimbHomePageUrl)
        cy.get('dialog').eq(1).find('svg').click()
    }

    function navigateToToolsPage(): void {
        cy.get(selectors.menu).click()
        cy.contains('Tools').click()
    }

    return {
        accessEducationLoanCalculator,
        navigateToHomePage,
        navigateToToolsPage
    }
}