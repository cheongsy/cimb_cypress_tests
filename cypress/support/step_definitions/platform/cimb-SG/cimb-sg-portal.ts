import { CIMBSGPortal } from "../../../types/interfaces"
import HomePageSGScreen from "./home-page-screen"
import ToolsScreen from "./tools-screen"

export default function CIMBSGPortal(): CIMBSGPortal {
    const homePageSGScreen = HomePageSGScreen()
    const toolsScreen = ToolsScreen()

    function navigateToHomePage(): void {
        homePageSGScreen.navigateToHomePage()
    }

    function navigateToToolsPage(): void {
        homePageSGScreen.navigateToToolsPage()
    }

    function accessEducationLoanCalculator(): void {
        homePageSGScreen.accessEducationLoanCalculator()
    }

    function enterEducationLoanCalculatorFields(): void {
        toolsScreen.enterEducationLoanCalculatorFields()
    }

    function isCalculatorResultsCorrect(): void {
        toolsScreen.isCalculatorResultsCorrect()
    }

    function compareSnapshotOfSampleStandardRepaymentTable(): void {
        toolsScreen.compareSnapshotOfSampleStandardRepaymentTable()
    }

    return {
        accessEducationLoanCalculator,
        enterEducationLoanCalculatorFields,
        isCalculatorResultsCorrect,
        navigateToHomePage,
        navigateToToolsPage,
        compareSnapshotOfSampleStandardRepaymentTable
    }
}
