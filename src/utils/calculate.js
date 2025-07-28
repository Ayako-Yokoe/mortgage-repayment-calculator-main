export function calculateMortgage({
  mortgageAmt,
  term,
  interest,
  mortgageType
}) {
  const termInMonths = term * 12;
  const monthlyRate = interest / 100 / 12;

  let monthlyRepayment, totalRepayment;

  if (mortgageType === 'repayment') {
    monthlyRepayment = mortgageAmt * (
      (monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) / 
      (Math.pow(1 + monthlyRate, termInMonths) - 1)
    );
    totalRepayment = monthlyRepayment * termInMonths;
  } else {
    monthlyRepayment = mortgageAmt * monthlyRate;
    totalRepayment = monthlyRepayment * termInMonths;
  }

  return {
    monthlyRepayment, 
    totalRepayment
  };
}

export function formatCurrency(num) {
  return num?.toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}