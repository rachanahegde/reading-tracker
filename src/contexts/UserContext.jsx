import { createContext, useState } from "react";

// Manages onboarding status, user identity, app entry state

// Create new context object
export const UserContext = createContext();

export function UserProvider({ children }) {
  // Tracks whether user is new (has completed onboarding)
  const [isNewUser, setIsNewUser] = useState(true);

  // Side effect runs after component is mounted - retrieves user data from local storage, parses it as JSON and stores it in savedUserData.
  // If savedUserData exists and has onboardingComplete set to true, update isNewUser
  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userData"));
    if (savedUserData?.onboardingComplete) {
      setIsNewUser(false);
    }
  }, []);

  // Mark onboarding as complete
  const completeOnboarding = () => {
    const saved = JSON.parse(localStorage.getItem("userData")) || {};
    localStorage.setItem(
      "userData",
      JSON.stringify({ ...saved, onboardingComplete: true })
    );
    setIsNewUser(false);
  };

  // Make isNewUser and completeOnboarding available to child components
  return (
    <UserContext.Provider value={{ isNewUser, completeOnboarding }}>
      {children}
    </UserContext.Provider>
  );
}
