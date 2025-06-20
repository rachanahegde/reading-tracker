// Function for saving user data to local storage - exporting to use in context providers
export function saveToStorage(newData) {
  const saved = JSON.parse(localStorage.getItem("userData")) || {};
  const updated = { ...saved, ...newData };
  localStorage.setItem("userData", JSON.stringify(updated));
}
