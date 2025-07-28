import React from 'react'
import './ResultCompleted.css'
import { calculateMortgage, formatCurrency } from '../utils/calculate';

const ResultCompleted = ({
  mortgageAmt,
  term,
  interest,
  mortgageType
}) => {
  let { monthlyRepayment, totalRepayment } = calculateMortgage(
    {
      mortgageAmt,
      term,
      interest,
      mortgageType
    }
  );

  return (
    <div className='completed-wrapper'>
      <h2 className='completed-title'>Your results</h2>
      <p className='completed-description'>
        Your results are shown below based on the information you provided. 
        To adjust the results, edit the form and click “calculate repayments” again.
      </p>

      <div className='completed-result-wrapper'>
        <div className='completed-result-monthly'>
          <p className='completed-result-title'>Your monthly repayments</p>
          <p className='completed-result-monthly-repayment'>
            £{formatCurrency(monthlyRepayment)}
          </p>
        </div>
        <div className='completed-result-term'>
          <p className='completed-result-title'>Total you'll repay over the term</p>
          <p className='completed-result-term-repayment'>£{formatCurrency(totalRepayment)}</p>
        </div>
      </div>
    </div>
  )
}

export default ResultCompleted
