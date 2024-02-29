import React, { useState } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      const fullName = `${firstName} ${lastName}`;
      setIsSubmitted(true);
    } else {
      if (!firstName) {
        setFirstNameError('First name is required.');
      } else {
        setFirstNameError('');
      }
      if (!lastName) {
        setLastNameError('Last name is required.');
      } else {
        setLastNameError('');
      }
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
              setFirstNameError('');
            }}
          />
          <span style={{ color: 'red' }}>{firstNameError}</span>
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
              setLastNameError('');
            }}
          />
          <span style={{ color: 'red' }}>{lastNameError}</span>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div>
          <h3>Full Name:</h3>
          <p>{`${firstName} ${lastName}`}</p>
        </div>
      )}
    </div>
  );
};

export default NameForm;

