import { useContext, createContext } from "react";

// Manages onboarding status, user identity, app entry state

export const UserContext = createContext();

// Provider component for wrapping the app
export function UserProvider({ children }) {
  // Track if user is new (hasn't completed onboarding)
  const [isNewUser, setIsNewUser] = useState(true);

  // Context value object
  const value = {
    isNewUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// TODO Create context for user data
// TODO Add state to store user's data
// const [userData, setUserData] = useState({
//   dragonType: null, // 'blue' or 'green'
//   habitat: null, // 'forest' or 'mountain'
//   books: [], // Array of books user has added
//   currentlyReading: [], // Books currently being read
//   currentXP: 0, // Current experience points
//   totalBooks: 0, // Total books read
//   onboardingComplete: false, // Flag to track onboarding completion
// });

// Load user data from localStorage on mount
// Save user data to localStorage whenever userData changes
// Function to update user data
