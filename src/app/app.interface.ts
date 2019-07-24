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