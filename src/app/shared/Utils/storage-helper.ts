import { LOCAL_STORAGE_KEYS } from '../constant/constants';
import { UserInfo } from '../../app.interface';

class StorageHelper {
  setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getData(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  get UserInfo(){
    return this.getData(LOCAL_STORAGE_KEYS.USER_INFO);
  }

  set UserInfo(data:UserInfo){
    this.setData(LOCAL_STORAGE_KEYS.USER_INFO, data)
  }
}

export const storageHelperObj = new StorageHelper();
