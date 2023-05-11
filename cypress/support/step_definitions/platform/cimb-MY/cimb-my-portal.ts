import { CIMBMYPortal } from "../../../types/interfaces";
import HomePageMYScreen from "./home-page-screen";
import CIMBDealsScreen from "./cimb-deals-screen";

export default function CIMBMYPortal(): CIMBMYPortal {
    const homePageMYScreen = HomePageMYScreen()
    const cimbDealsScreen = CIMBDealsScreen()

    function navigateToHomePage(): void {
        homePageMYScreen.navigateToHomePage()
    }

    function exploreOffer(offerType: string): void {
        cimbDealsScreen.exploreOffer(offerType)
    }

    function selectCIMBDeals(): void {
        homePageMYScreen.selectCIMBDeals()
    }

    function viewAllForTravelAndLifeStyle(): void {
        cimbDealsScreen.viewAllForTravelAndLifeStyle()
    }

    function closeCookiesPopup(): void {
        cimbDealsScreen.closeCookiesPopup()
    }

    function validateAnantaraDealDetails(): void {
        cimbDealsScreen.validateAnantaraDealDetails()
    }

    return {
        closeCookiesPopup,
        exploreOffer,
        navigateToHomePage,
        selectCIMBDeals,
        validateAnantaraDealDetails,
        viewAllForTravelAndLifeStyle
    }
}