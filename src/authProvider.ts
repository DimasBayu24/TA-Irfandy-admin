import axios from './utils/axios';
import { AuthProvider } from '@pankod/refine-core';

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    localStorage.setItem('username', username);
    try {
      await axios.post(`/admin/login?username=${username}`, {
        username,
        password,
      });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(new Error('Something went wrong'));
    }
  },
  logout: async () => {
    await axios.get('/logout');
    localStorage.removeItem('username');
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  // checkAuth: () => Promise.resolve(),
  checkAuth: async () => {
    if (localStorage.getItem('username') === null) {
      return Promise.reject(new Error('Unauthorized'));
    }
    const username = localStorage.getItem('username');
    axios.get(`self/${username}`).then((response) => {
      console.log(response.data.data.Role);
    });
    return Promise.resolve();
    // return Promise.reject(new Error('Unauthorized'));
  },
  getPermissions: () => Promise.resolve(),
  // getUserIdentity: () => Promise.resolve(),
  getUserIdentity: async () => {
    if (localStorage.getItem('username') === null) {
      return Promise.reject(new Error('Unauthorized'));
    }
    try {
      const username = localStorage.getItem('username');
      await axios.get(`self/${username}`);
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(new Error('Unauthorized'));
    }
  },
};
