export interface SignInResponse {
  username: string;
  email: string;
  _id: number;
}

export interface SignUpResponse {
  message: string;
  result: SignInResponse;
  success: boolean;
}

export type FormFields = {
  username?: string;
  email?: string;
  password?: string;
};

export type FormState =
  | {
      errors?: {
        username?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type SessionPayload = {
  email: string;
  access: string;
  refresh: string;
};
