function calculatePPNS() {
    // Get input values
    const monthlyDeposit = parseFloat(document.getElementById('monthlyDeposit').value);
    const duration = parseInt(document.getElementById('duration').value);
    
    // PPNS interest rate (7.1% per annum as of 2025)
    const interestRate = 7.1;
    
    // Calculate number of months
    const months = duration * 12;
    
    // Calculate total investment
    const totalInvestment = monthlyDeposit * months;
    
    // Calculate maturity amount using compound interest formula
    // The interest is compounded quarterly
    const quarterlyRate = interestRate / 400; // Convert annual rate to quarterly
    const quarters = duration * 4;
    
    let maturityAmount = 0;
    for (let i = 0; i < months; i++) {
        let contribution = monthlyDeposit;
        let remainingQuarters = (months - i) / 3;
        maturityAmount += contribution * Math.pow(1 + quarterlyRate, remainingQuarters);
    }
    
    // Calculate interest earned
    const interestEarned = maturityAmount - totalInvestment;
    
    // Display results
    document.getElementById('totalInvestment').textContent = 
        '₹' + totalInvestment.toLocaleString('en-IN');
    document.getElementById('interestEarned').textContent = 
        '₹' + Math.round(interestEarned).toLocaleString('en-IN');
    document.getElementById('maturityAmount').textContent = 
        '₹' + Math.round(maturityAmount).toLocaleString('en-IN');
}

// Calculate initially with default values
document.addEventListener('DOMContentLoaded', calculatePPNS);
