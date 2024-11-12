// Function to retrieve token from localStorage
const getToken = () => {
  return localStorage.getItem('accessToken');
};

// Function to save token to localStorage
const saveToken = (token) => {
  localStorage.setItem('accessToken', token);
};

// Function to remove token from localStorage (for logout)
const removeToken = () => {
  localStorage.removeItem('accessToken');
};

export { getToken, saveToken, removeToken };
