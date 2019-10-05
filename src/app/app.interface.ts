import { CloudServiceEnum } from './app.structs';

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
    [key: string]: string;
}

export interface RegisterDropBoxParams {
    auth_key: string;
}

export interface StartDownloadParams {
    link: string;
    cloud_service: number;
}

export interface FoldersRequest {
    cloud_service: number;
}

export interface FoldersResponse {
    [key: string]: {
        info: FileMetaData;
        is_folder: boolean;
        image_link?: string;
        sub_directories: FoldersResponse[];
    };
}

export interface FileMetaData {
    id: string;
    name: string;
    path: string;
}

export interface FetchFileInfoRequest {
    cloud_service: CloudServiceEnum;
    file_path: string;
}

export interface FileInfo {
    client_modified: string;
    id: string;
    name: string;
    server_modified: string;
    size: number;
}
