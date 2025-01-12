function calculateBenefit() {
    // Get input values
    const familyIncome = parseFloat(document.getElementById('familyIncome').value);
    const category = document.getElementById('category').value;
    const girlAge = parseInt(document.getElementById('girlAge').value);
    
    // Initialize variables
    let isEligible = false;
    let financialAssistance = 0;
    let additionalBenefits = [];
    
    // Validate inputs
    if (girlAge < 18) {
        alert('Girl must be at least 18 years old');
        return;
    }
    
    // Check eligibility based on income and category
    if (familyIncome <= 250000) {
        isEligible = true;
        
        // Calculate financial assistance based on category
        switch(category) {
            case 'general':
                financialAssistance = 51000;
                break;
            case 'sc':
            case 'st':
                financialAssistance = 51000;
                additionalBenefits.push('Additional support for SC/ST families');
                break;
            case 'obc':
                financialAssistance = 51000;
                additionalBenefits.push('Standard OBC category benefits');
                break;
        }
        
        // Add common benefits
        if (familyIncome <= 100000) {
            additionalBenefits.push('Priority processing');
            additionalBenefits.push('Additional household items support');
        }
    }
    
    // Display results
    const eligibilityStatus = document.getElementById('eligibilityStatus');
    eligibilityStatus.textContent = isEligible ? 'Eligible' : 'Not Eligible';
    eligibilityStatus.className = isEligible ? 'eligible' : 'not-eligible';
    
    document.getElementById('financialAssistance').textContent = 
        isEligible ? '₹' + financialAssistance.toLocaleString('en-IN') : '₹0';
    
    document.getElementById('additionalBenefits').textContent = 
        isEligible ? (additionalBenefits.length > 0 ? additionalBenefits.join(', ') : 'Basic benefits only') : 'None';
}

// Calculate initially with default values
document.addEventListener('DOMContentLoaded', calculateBenefit);
