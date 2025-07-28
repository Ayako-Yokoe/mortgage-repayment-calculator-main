import React, { useState } from 'react';
import './FormSection.css';
import { validateField } from '../utils/validate';

const FormSection = ({ setMortgageAmt, setTerm, setInterest, setMortgageType }) => {
  const [inputAmount, setInputAmount] = useState('');
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [amtErrorMessage, setAmtErrorMessage] = useState('');

  const [inputTerm, setInputTerm] = useState('');
  const [isTermValid, setIsTermValid] = useState(true);
  const [termErrorMessage, setTermErrorMessage] = useState('');

  const [inputInterest, setInputInterest] = useState('');
  const [isInterestValid, setIsInterestValid] = useState(true);
  const [interestErrorMessage, setInterestErrorMessage] = useState('');

  const [inputMortgageType, setInputMortgageType] = useState('');
  const [mortgageTypeErrorMessage, setMortgageTypeErrorMessage] = useState('');


  const handleAmountValidation = (value) => {
    setInputAmount(value);

    const { isValid, parsedValue, error } = validateField({
      value, 
      min: 1
    })

    setIsAmountValid(isValid);
    setAmtErrorMessage(error);

    if (isValid) {
      setIsAmountValid(true);
      setMortgageAmt(parsedValue);
    }
  }

  const handleTermValidation = (value) => {
    setInputTerm(value);

    const { isValid, parsedValue, error } = validateField({
      value, 
      min: 1,
      max: 35,
      integerOnly: true
    })

    setIsTermValid(isValid);
    setTermErrorMessage(error);

    if (isValid) {
      setIsTermValid(true);
      setTerm(parsedValue);
    }
  }

  const handleInterestValidation = (value) => {
    setInputInterest(value);

    const { isValid, parsedValue, error } = validateField({
      value, 
      min: 0.01,
      max: 100,
    })

    setIsInterestValid(isValid);
    setInterestErrorMessage(error);

    if (isValid) {
      setIsInterestValid(true);
      setInterest(parsedValue);
    }
  }

  const handleMortgageType = (e) => {
    setInputMortgageType(e.target.value);
    setMortgageTypeErrorMessage('');
  }

  const clearInputField = () => {
    setInputAmount('');
    setInputTerm('');
    setInputInterest('');
    setInputMortgageType('');

    setMortgageAmt(0);
    setTerm(0);
    setInterest(0);
    setMortgageType('');

    setAmtErrorMessage('');
    setTermErrorMessage('');
    setInterestErrorMessage('');
    setMortgageTypeErrorMessage('');

    setIsAmountValid(true);
    setIsTermValid(true);
    setIsInterestValid(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputAmount === '') {
      setIsAmountValid(false);
      setAmtErrorMessage('This field is required');
      return;
    }

    if (inputTerm === '') {
      setIsTermValid(false);
      setTermErrorMessage('This field is required');
      return;
    }

    if (inputInterest === '') {
      setIsInterestValid(false);
      setInterestErrorMessage('This field is required');
      return;
    }

    if (!inputMortgageType) {
      setMortgageTypeErrorMessage('This field is required');
      return;
    }
    setMortgageType(inputMortgageType);
  }

  return (
    <div className='form-section-wrapper'>
      <div className='form-section-title-wrapper'>
        <h1 className='form-section-title'>Mortgage Calculator</h1>
        <button 
          type='button' 
          className='form-section-clear-btn'
          onClick={clearInputField}
        >Clear All</button>
      </div>

      <form className='form-section-form' onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor='amount'>Mortgage Amount</label>
          <div className={`form-section-input-wrapper ${!isAmountValid ? 'error' : ''}`}>
            <span
               className={`${!isAmountValid ? 'error' : ''}`}
            >£</span>
            <input 
              type='text' 
              id='amount' 
              name='amount' 
              value={inputAmount}
              onChange={(e) => handleAmountValidation(e.target.value)}
              required
              aria-invalid={isAmountValid}
            />
          </div>
          {!isAmountValid && (
            <p className='error-message'>{amtErrorMessage}</p>
          )}
        </div>

        <div className='form-section-term-rate-wrapper'>
          <div className='form-section-term-wrapper'>
            <label htmlFor='term'>Mortgage Term</label>
            <div className={`form-section-input-wrapper ${!isTermValid ? 'error' : ''}`}>
              <input 
                type='number' 
                id='term'
                name='term'
                value={inputTerm}
                step={1} 
                min={1} 
                max={35}  
                onChange={(e) => handleTermValidation(e.target.value)}
                required
                aria-invalid={isTermValid}
              />
              <span
                className={`${!isTermValid ? 'error' : ''}`}
              >years</span>
            </div>
            {!isTermValid && (
            <p className='error-message'>{termErrorMessage}</p>
          )}
          </div>

          <div className='form-section-rate-wrapper'>
            <label htmlFor='interest'>Interest Rate</label>

            <div className={`form-section-input-wrapper ${!isInterestValid ? 'error' : ''}`}>
              <input 
                type='number' 
                id='interest'
                name='interest'
                value={inputInterest}
                step={0.01} 
                min={0.01} 
                max={100} 
                onChange={(e) => handleInterestValidation(e.target.value)}
                required
                aria-invalid={isInterestValid}
              />
              <span
                className={`${!isInterestValid ? 'error' : ''}`}
              >%</span>
            </div>
            {!isInterestValid && (
              <p className='error-message'>{interestErrorMessage}</p>
            )}
          </div>
        </div>

        <fieldset>
          <legend>Mortgage Type</legend>

          <div className='radio-wrapper space'>
            <input 
              type='radio' 
              id='repayment' 
              name='MortgageType' 
              value='repayment' 
              required
              onChange={handleMortgageType}
              checked={inputMortgageType === 'repayment'}
            />
            <label htmlFor='repayment'>Repayment</label>
          </div>

          <div className='radio-wrapper'>
            <input 
              type='radio' 
              id='interest-only' 
              name='MortgageType' 
              value='interest-only'
              onChange={handleMortgageType}
              checked={inputMortgageType === 'interest-only'}
            />
            <label htmlFor='interest-only'>Interest Only</label>
          </div>
          {mortgageTypeErrorMessage && (
              <p className='error-message'>{mortgageTypeErrorMessage}</p>
            )}
        </fieldset>

        <button type='submit' className='form-section-calculate-btn'>
          <img src='assets/images/icon-calculator.svg' alt='calculator' className='calculator-icon' />
          <span>Calculate Repayments</span>
        </button>
      </form>
    </div>
  )
}

export default FormSection
