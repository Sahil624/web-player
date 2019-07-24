import { storageHelperObj } from './storage-helper';

export namespace Utils {
  export const storageHelper = storageHelperObj;

  export function isAuthenticated() {
      if(storageHelper.UserInfo && storageHelper.UserInfo.accessToken){
          return true;
      }
      return false;
  }
}
