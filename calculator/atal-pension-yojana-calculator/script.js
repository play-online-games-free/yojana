// APY contribution table (approximate values)
const apyTable = {
    1000: {
        18: 42, 20: 46, 25: 58, 30: 74, 35: 96, 40: 126
    },
    2000: {
        18: 84, 20: 92, 25: 116, 30: 148, 35: 192, 40: 252
    },
    3000: {
        18: 126, 20: 138, 25: 174, 30: 222, 35: 288, 40: 378
    },
    4000: {
        18: 168, 20: 184, 25: 232, 30: 296, 35: 384, 40: 504
    },
    5000: {
        18: 210, 20: 230, 25: 290, 30: 370, 35: 480, 40: 630
    }
};

function calculateAPY() {
    // Get input values
    const age = parseInt(document.getElementById('age').value);
    const monthlyPension = parseInt(document.getElementById('monthlyPension').value);
    
    // Validate age
    if (age < 18 || age > 40) {
        alert('Age must be between 18 and 40 years');
        return;
    }
    
    // Find the closest age bracket
    let closestAge = 18;
    const validAges = [18, 20, 25, 30, 35, 40];
    for (let validAge of validAges) {
        if (age <= validAge) {
            closestAge = validAge;
            break;
        }
    }
    
    // Calculate monthly contribution
    const monthlyContribution = apyTable[monthlyPension][closestAge];
    
    // Calculate other values
    const yearlyContribution = monthlyContribution * 12;
    const yearsToContribute = 60 - age;
    const totalInvestment = yearlyContribution * yearsToContribute;
    
    // Calculate corpus (approximate - 170 times monthly pension)
    const corpusAmount = monthlyPension * 170;
    
    // Display results
    document.getElementById('monthlyContribution').textContent = 
        '₹' + monthlyContribution.toLocaleString('en-IN');
    
    document.getElementById('yearlyContribution').textContent = 
        '₹' + yearlyContribution.toLocaleString('en-IN');
    
    document.getElementById('totalInvestment').textContent = 
        '₹' + totalInvestment.toLocaleString('en-IN');
    
    document.getElementById('pensionAmount').textContent = 
        '₹' + monthlyPension.toLocaleString('en-IN');
    
    document.getElementById('corpusAmount').textContent = 
        '₹' + corpusAmount.toLocaleString('en-IN');
}

// Calculate initially with default values
document.addEventListener('DOMContentLoaded', calculateAPY);
