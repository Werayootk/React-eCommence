import axios from 'axios';

export const checkUserIsAdmin = currentUser => {
  if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
  const { userRoles } = currentUser;
  if (userRoles.includes('admin')) return true;

  return false;
}

// export const apiInstance = axios.create({
//   baseURL: 'http://localhost:5001/ecommerce-web-f542a/us-central1/api' //from npm run serve in function firebase
// });

export const apiInstance = axios.create({
  baseURL: 'https://us-central1-ecommerce-web-f542a.cloudfunctions.net/api' //from npm run serve in function firebase
});

