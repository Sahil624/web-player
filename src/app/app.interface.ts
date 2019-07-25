export interface UserInfo {
    accessToken: string;
    refreshToken: string;
    username: string;
    getTime: number;
    expires: number;
}

export interface Routes {
    name: string;
    link: string;
}

export interface LinkedServicesResponse {
    [key: string]: string
}

export interface RegisterDropBoxParams {
    auth_key: string;
}

export interface StartDownloadParams {
    link: string;
    cloud_service: number;
}
