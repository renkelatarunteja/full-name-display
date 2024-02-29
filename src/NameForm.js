// NameForm.js
import React, { useState } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      const fullName = `${firstName} ${lastName}`;
      setFullName(fullName);
      setSubmitted(true);
    } else {
      alert('Please fill in both first name and last name.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name*:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name*:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <h2>Full Name:</h2>
          <p>{fullName}</p>
        </div>
      )}
    </div>
  );
};

export default NameForm;
