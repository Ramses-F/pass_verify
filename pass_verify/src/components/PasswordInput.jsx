// src/components/PasswordInput.jsx
import React, { useState } from "react";
import StrengthIndicator from "./StrengthIndicator";

const PasswordInput = () => {
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Vérificateur de mot de passe</h1>
      <h2>SOYONS VIGILANTS 🖖🏿🖖🏿🖖🏿🕕🕕      </h2>
      <input
        type="text"
        value={password}
        onChange={handleChange}
        placeholder="Entrez un mot de passe"
        style={{
          padding: "10px",
          fontSize: "16px",
          margin: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "300px",
        }}
      />
      <StrengthIndicator password={password} />
    </div>
  );
};

export default PasswordInput;
