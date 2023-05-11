export interface CIMBDealsScreen {
    closeCookiesPopup(): void
    exploreOffer(offerType: string): void
    validateAnantaraDealDetails(): void
    viewAllForTravelAndLifeStyle(): void
}

export interface HomePageMYScreen {
    navigateToHomePage(): void
    selectCIMBDeals(): void
}

export interface CIMBMYPortal {
    closeCookiesPopup(): void
    exploreOffer(offerType: string): void
    navigateToHomePage(): void
    selectCIMBDeals(): void
    validateAnantaraDealDetails(): void
    viewAllForTravelAndLifeStyle(): void
}

export interface ToolsScreen {
    enterEducationLoanCalculatorFields(): void
    isCalculatorResultsCorrect(): void
    compareSnapshotOfSampleStandardRepaymentTable(): void
}

export interface HomePageSGScreen {
    accessEducationLoanCalculator(): void
    navigateToHomePage(): void
    navigateToToolsPage(): void
}

export interface CIMBSGPortal {
    accessEducationLoanCalculator(): void
    enterEducationLoanCalculatorFields(): void
    isCalculatorResultsCorrect(): void
    navigateToHomePage(): void
    navigateToToolsPage(): void
    compareSnapshotOfSampleStandardRepaymentTable(): void
}
