import { useState } from 'react'
import './App.css'
import FormSection from './components/FormSection'
import ResultSection from './components/ResultSection'

function App() {
  const [mortgageAmt, setMortgageAmt] = useState(0);
  const [term, setTerm] = useState(0);
  const [interest, setInterest] = useState(0);
  const [mortgageType, setMortgageType] = useState('');

  return (
    <div className='wrapper'>
      <div className='contents'>
        <FormSection 
          setMortgageAmt={setMortgageAmt} 
          setTerm={setTerm}
          setInterest={setInterest}
          setMortgageType={setMortgageType}
        />
        <ResultSection
          mortgageAmt={mortgageAmt}
          term={term}
          interest={interest}
          mortgageType={mortgageType}
        />
      </div>
    </div>
  )
}

export default App
