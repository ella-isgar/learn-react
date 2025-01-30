/**
 * When the Form is rendered, it appears to be frozen.
 * When a user enters stuff into the <input> tags or
 * clicks on the reset button nothing happens.
 * Identify and fix the error.
 */

import { SetStateAction, useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e: {
    // better to explicity define SetStateAction<string> instead
    // of string (will prevent determinism bugs down the line)
    target: { value: SetStateAction<string> };
  }) {
    setFirstName(e.target.value);
    // firstName = e.target.value;
  }

  function handleLastNameChange(e: {
    target: { value: SetStateAction<string> };
  }) {
    setLastName(e.target.value);
    // lastName = e.target.value;
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
    // firstName = "";
    // lastName = "";
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
