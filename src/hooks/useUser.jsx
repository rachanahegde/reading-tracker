import { useState, useEffect } from "react";

// TODO REVIEW THIS ENTIRE CODE FILE AND MAKE SURE IT IS FUNCTIONING AS EXPECTED.
// TODO CONSIDER BREAKING UP THE FILE INTO OTHER FILES TO MAKE IT MORE MODULAR.

// TODO Code is actually incorrect - the state should be updated with the setuserData state hook instead! ===> Fix that.

// Custom hook to manage user data and onboarding state
export function useUser() {
  // State to track if user is new (hasn't completed onboarding)
  const [isNewUser, setIsNewUser] = useState(true);

  // State to store user's selected dragon and habitat
  const [userData, setUserData] = useState({
    dragonType: null, // 'blue' or 'green'
    habitat: null, // 'forest' or 'mountain'
    books: [], // Array of books user has added
    currentXP: 0, // Current experience points
    totalBooks: 0, // Total books read
    onboardingComplete: false, // Flag to track onboarding completion
  });

  // Check if user exists when component mounts
  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");

    if (savedUserData) {
      // Parse saved user data
      const parsedData = JSON.parse(savedUserData);
      setUserData(parsedData);

      // If onboarding is complete, user is not new
      if (parsedData.onboardingComplete) {
        setIsNewUser(false);
      }
    }
  }, []);

  // Function to save user data
  const saveUserData = (newData) => {
    const updatedData = { ...userData, ...newData };
    setUserData(updatedData);

    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("User data saved:", updatedData); // For demo purposes
  };

  // Function to select dragon type during onboarding
  const selectDragon = (dragonType) => {
    saveUserData({ dragonType });
  };

  // Function to select habitat during onboarding
  const selectHabitat = (habitat) => {
    saveUserData({ habitat });
  };

  // Function to add a book during onboarding or regular use
  const addBook = (book) => {
    const updatedBooks = [...userData.books, book];
    const updatedXP = userData.currentXP + 10; // Each book gives 10 XP
    const updatedTotalBooks = userData.totalBooks + 1;

    saveUserData({
      books: updatedBooks,
      currentXP: updatedXP,
      totalBooks: updatedTotalBooks,
    });
  };

  // Function to complete onboarding process
  const completeOnboarding = () => {
    saveUserData({ onboardingComplete: true });
    setIsNewUser(false);
  };

  // Return all necessary data and functions
  return {
    isNewUser,
    userData,
    selectDragon,
    selectHabitat,
    addBook,
    completeOnboarding,
    saveUserData,
  };
}
