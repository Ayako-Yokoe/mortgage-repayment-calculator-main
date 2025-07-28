import React from 'react'
import './ResultSection.css'
import ResultEmpty from './ResultEmpty'
import ResultCompleted from './ResultCompleted'

const ResultSection = ({
  mortgageAmt,
  term,
  interest,
  mortgageType
}) => {
  return (
    <div className='result-wrapper' >
      {mortgageAmt && term && interest && mortgageType ? (
        <ResultCompleted
          mortgageAmt={mortgageAmt}
          term={term}
          interest={interest}
          mortgageType={mortgageType}
        />
      ) : (
        <ResultEmpty />
      )}
    </div>
  )
}

export default ResultSection
