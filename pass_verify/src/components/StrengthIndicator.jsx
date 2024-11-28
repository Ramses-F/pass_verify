// src/components/StrengthIndicator.jsx
import React from "react";

const StrengthIndicator = ({ password }) => {
  // Liste des mots de passe communs (partielle pour l'exemple)
  const commonPasswords = [
    "123456",
    "password",
    "12345678",
    "qwerty",
    "abc123",
    "111111",
    "123123",
    "admin",
    "letmein",
  ];

  const calculateStrength = (password) => {
    let strength = 0;

    // Vérifie la longueur minimale
    if (password.length >= 12) strength += 1;

    // Vérifie les types de caractères
    if (/[a-z]/.test(password)) strength += 1; // Minuscule
    if (/[A-Z]/.test(password)) strength += 1; // Majuscule
    if (/[0-9]/.test(password)) strength += 1; // Chiffre
    if (/[^a-zA-Z0-9]/.test(password)) strength += 1; // Caractères spéciaux

    // Vérifie si le mot de passe est dans la liste des mots de passe communs
    if (commonPasswords.includes(password)) return 0;

    // Vérifie les séquences évidentes
    const sequences = ["123", "abc", "password", "111"];
    if (sequences.some((seq) => password.includes(seq))) return 0;

    return Math.min(strength, 5); // Force maximale = 5
  };

  const strength = calculateStrength(password);

  // Labels et couleurs associés
  const strengthLabels = [
    "Très faible",
    "Faible",
    "Moyenne",
    "Forte",
    "Très forte",
  ];
  const strengthColors = ["red", "orange", "yellow", "green", "darkgreen"];

  return (
    <div style={{ marginTop: "20px" }}>
      <div
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: `${(strength / 5) * 100}%`,
            height: "100%",
            backgroundColor: strengthColors[strength - 1] || "transparent",
            transition: "width 0.3s ease-in-out",
          }}
        ></div>
      </div>
      <p style={{ color: strengthColors[strength - 1] || "black" }}>
        {strength > 0 ? strengthLabels[strength - 1] : "Mot de passe invalide"}
      </p>
      {strength === 0 && (
        <p style={{ color: "red" }}>
          Évitez les mots de passe trop courants ou les séquences évidentes.
        </p>
      )}
    </div>
  );
};

export default StrengthIndicator;
