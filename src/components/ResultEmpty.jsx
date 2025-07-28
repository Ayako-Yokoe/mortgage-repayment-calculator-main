import React from 'react'
import './ResultEmpty.css'

const ResultEmpty = () => {
  return (
    <div className='empty-wrapper'>
      <img src='assets/images/illustration-empty.svg' alt='empty result image' className='empty-img' />
      <h2 className='empty-title'>Results shown here</h2>
      <p className='empty-description'>
        Complete the form and click “calculate repayments” to see what 
        your monthly repayments would be.
      </p>
    </div>
  )
}

export default ResultEmpty
