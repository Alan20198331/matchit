export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export type SignUpRequest = {
  name: string;
  email: string;
  password: string;
};

export type SignUpResponse =
  | {
      success: true;
    }
  | {
      success: false;
      errorMessage: string;
    };

export type ActivateAccountRequest = {
  otp: string;
};

export type ActivateAccountResponse =
  | {
      success: true;
    }
  | {
      success: false;
      errorMessage: string;
    };
