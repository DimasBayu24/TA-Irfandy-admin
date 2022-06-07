import axios from './utils/axios';
import { AuthProvider } from '@pankod/refine-core';

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    try {
      await axios.post('/login', {
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
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  // checkAuth: () => Promise.resolve(),
  checkAuth: async () => {
    try {
      await axios.get('self/dodita');
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(new Error('Unauthorized'));
    }
  },
  getPermissions: () => Promise.resolve(),
  // getUserIdentity: () => Promise.resolve(),
  getUserIdentity: async () => {
    try {
      await axios.get('self/dodita');
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(new Error('Unauthorized'));
    }
  },
};
