function calculateSSY() {
    // Get input values
    const yearlyDeposit = parseFloat(document.getElementById('yearlyDeposit').value);
    const girlAge = parseInt(document.getElementById('girlAge').value);
    
    // Validate inputs
    if (girlAge > 10) {
        alert('Girl\'s age must be below 10 years');
        return;
    }
    if (yearlyDeposit < 1000 || yearlyDeposit > 150000) {
        alert('Yearly deposit must be between ₹1,000 and ₹1,50,000');
        return;
    }
    
    // SSY interest rate (8.0% per annum as of 2024)
    const interestRate = 8.0;
    
    // Investment can be made until girl turns 15
    const investmentYears = 15 - girlAge;
    
    // Account matures when girl turns 21
    const maturityYears = 21 - girlAge;
    
    // Calculate total investment
    const totalInvestment = yearlyDeposit * investmentYears;
    
    // Calculate maturity amount using compound interest
    let maturityAmount = 0;
    let balance = 0;
    
    // Calculate year by year
    for (let year = 1; year <= maturityYears; year++) {
        // Add yearly deposit if within investment period
        if (year <= investmentYears) {
            balance += yearlyDeposit;
        }
        // Add interest
        balance += (balance * interestRate / 100);
    }
    
    maturityAmount = balance;
    const interestEarned = maturityAmount - totalInvestment;
    
    // Display results
    document.getElementById('totalInvestment').textContent = 
        '₹' + totalInvestment.toLocaleString('en-IN');
    document.getElementById('interestEarned').textContent = 
        '₹' + Math.round(interestEarned).toLocaleString('en-IN');
    document.getElementById('maturityAmount').textContent = 
        '₹' + Math.round(maturityAmount).toLocaleString('en-IN');
    document.getElementById('investmentPeriod').textContent = 
        investmentYears + ' years';
    document.getElementById('maturityPeriod').textContent = 
        maturityYears + ' years';
}

// Calculate initially with default values
document.addEventListener('DOMContentLoaded', calculateSSY);
