import React, { useState } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      const fullName = `${firstName} ${lastName}`;
      setFullName(fullName);
      setIsSubmitted(true);
    } else {
      alert('Please fill in both first name and last name.');
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
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div>
          <h3>Full Name:</h3><p>{fullName}</p>
          
        </div>
      )}
    </div>
  );
};

export default NameForm;
