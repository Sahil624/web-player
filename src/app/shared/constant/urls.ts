class ApplicationUrls {
    // serverUrl = 'https://cloudownload.herokuapp.com/';
    serverUrl = 'http://localhost:8000/';

    get loginUrl() { return this.serverUrl + 'auth/login/'; }
    get registerUrl() { return this.serverUrl + 'auth/sign_up/'; }
    get linkedServices() { return this.serverUrl + 'cloud/linked_services/'; }
    get registerDropbox() { return this.serverUrl + 'cloud/register_drop_box/'; }
    get downloadDropbox() { return this.serverUrl + 'cloud/download_file/'; }
}

export const urls = new ApplicationUrls();
