import { useState } from "react";

function PasswordStrength() {
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(true);

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasMinLength = password.length >= 8;

  let strength = "";
  let score = 0;

  if (hasUpperCase) score++;
  if (hasLowerCase) score++;
  if (hasNumber) score++;
  if (hasMinLength) score++;

  if (password.length > 0) {
    if (score <= 2) {
      strength = "Weak";
    } else if (score === 3) {
      strength = "Medium";
    } else {
      strength = "Strong";
    }
  }

  function handleButton() {
    setHide(!hide);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Password Strength Checker</h2>

      <input
        type={hide ? "password" : "text"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleButton}> {hide ? "show" : "hide"}</button>

      <div style={{ marginTop: "10px" }}>
        <p>8+ Characters: {hasMinLength ? "✅" : "❌"}</p>

        <p>Uppercase Letter: {hasUpperCase ? "✅" : "❌"}</p>

        <p>Lowercase Letter: {hasLowerCase ? "✅" : "❌"}</p>

        <p>Number: {hasNumber ? "✅" : "❌"}</p>
      </div>

      {password && <h3>Password Strength: {strength}</h3>}
    </div>
  );
}

export default PasswordStrength;
