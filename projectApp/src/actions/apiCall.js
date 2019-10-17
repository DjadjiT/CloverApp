import {Platform, Linking} from 'react-native';
import NetInfo from 'react-native-netinfo';

export async function goToCommunity() {
  // await callfunction then
  Actions.replace('communityScreen');
}

export async function goToCommunityDetails() {
  // await callfunction then
  Actions.replace('communityDetailsScreen');
}

export async function goToCustomizer() {
  // await callfunction then
  Actions.replace('customizerScreen');
}

export async function goToUserAccount() {
  // await callfunction then
  Actions.replace('mainScreen');
}

export async function makeGetCall(url) {
  return new Promise(function(resolve, reject) {
    try {
      let response = fetch(url, {
        method: 'GET',
      })
        .then(response => {
          if (!response.ok) {
            reject(response.status);
          } else {
            resolve(response.json());
          }
        })
        .catch(error => reject(error));
    } catch (error) {
      reject(error);
    }
  });
}

export async function share(watchList) {
  return new Promise(function(resolve, reject) {
    resolve(true);
  });
}
