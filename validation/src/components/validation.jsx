import { useEffect, useState } from "react";
import styles from './validation.module.scss';

export const Validation = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState('');
  
    useEffect(() => {
        if (inputValue) {
          const isMoreThanSixCharacters = inputValue.length > 6;
          const hasSpecialCharacter = /[^a-zA-Z0-9]/.test(inputValue);
          const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    
          if (
            (!isMoreThanSixCharacters || !hasSpecialCharacter) &&
            !isValidEmail
          ) {
            setInputError(
              'Input must be more than 6 characters with at least one special character, or a valid email addresd'
            );
          } else {
            setInputError('');
          }
        } else {
          setInputError(''); 
        }
      }, [inputValue]);
  
    return (
      <div className={styles.container}>
        <div className={styles.formGroup}>
          <label htmlFor="input">Input:</label>
          <input
            type="text"
            id="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={inputError ? styles.error : ''}
          />
          {inputError && <p className={styles.errorMessage}>{inputError}</p>}
        </div>
      </div>
    );
  };