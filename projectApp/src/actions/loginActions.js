import {Platform, Linking} from 'react-native';
import NetInfo from 'react-native-netinfo';

import AsyncStorage from '@react-native-community/async-storage';

export async function fetchCartList() {
  return new Promise(function(resolve, reject) {
    AsyncStorage.getItem('cartList')
      .then(response => {
        if (response) {
          resolve(JSON.parse(response));
        } else {
          reject(null);
        }
      })
      .catch(error => reject(error));
  });
}
