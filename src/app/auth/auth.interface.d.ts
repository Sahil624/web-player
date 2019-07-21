export interface AuthRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  refresh: string;
  access: string;
}

export interface SignUpRequest {
    email: string;
    password: string;
}
