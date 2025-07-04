// Manages dragon type, currentXP, habitat, selectDragon, selectHabitat, gainXP, evolution logic
import { createContext, useState, useEffect } from "react";
import { saveToStorage } from "../utils/storage"; // For storing data in local storage

export const DragonContext = createContext();

export function DragonProvider({ children }) {
  const [dragonType, setDragonType] = useState(null);
  const [habitat, setHabitat] = useState(null);
  const [currentXP, setCurrentXP] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userData"));
    if (saved) {
      setDragonType(saved.dragonType || null);
      setHabitat(saved.habitat || null);
      setCurrentXP(saved.currentXP || 0);
    }
  }, []);

  const selectDragon = (type) => {
    setDragonType(type);
    saveToStorage({ dragonType: type });
  };

  const selectHabitat = (h) => {
    setHabitat(h);
    saveToStorage({ habitat: h });
  };

  const gainXP = (amount) => {
    const newXP = currentXP + amount;
    setCurrentXP(newXP);
    saveToStorage({ currentXP: newXP });
  };

  return (
    <DragonContext.Provider
      value={{
        dragonType,
        habitat,
        currentXP,
        selectDragon,
        selectHabitat,
        gainXP,
      }}
    >
      {children}
    </DragonContext.Provider>
  );
}

// TODO make sure that user gains XP for adding books to all THREE lists.
