import { ToolsScreen } from "../../../types/interfaces"
import { toolsPageConstants } from "../constants"

export default function ToolsScreen(): ToolsScreen {
    const selectors = {
        sampleStandardRepaymentTable: '[class="cmp-table table-header-red aem-GridColumn aem-GridColumn--default--12"]'
    }

    function enterEducationLoanCalculatorFields(): void {
        cy.contains('Loan Amount').siblings().find('input').clear().type(toolsPageConstants.educationLoanAmount1)
        cy.contains('Loan Tenure').siblings().find('input').clear().type(toolsPageConstants.educationLoanTenure1)
    }

    function isCalculatorResultsCorrect(): void {
        cy.contains('Monthly Instalment').siblings().find('span[class=""]').should('contain', toolsPageConstants.educationLoanCalcMonthlyInstalment1)
        cy.contains('Interest Rate').siblings().find('span[class=""]').should('contain', toolsPageConstants.educationLoanCalcInterestRate1)
        cy.contains('Total Interest Charge').siblings().find('span[class=""]').should('contain', toolsPageConstants.educationLoanCalcTotalInterestCharge1)
        cy.contains('Total Payment Amount').siblings().find('span[class=""]').should('contain', toolsPageConstants.educationLoanCalcTotalPaymentAmount1)
    }

    function compareSnapshotOfSampleStandardRepaymentTable(): void {
        cy.get(selectors.sampleStandardRepaymentTable).compareSnapshot('education-loan-calc-standard-repayment', 0)
    }

    return {
        enterEducationLoanCalculatorFields,
        isCalculatorResultsCorrect,
        compareSnapshotOfSampleStandardRepaymentTable
    }
}