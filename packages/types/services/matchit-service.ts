import {
  ActivateAccountRequest,
  ActivateAccountResponse,
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from "../model/matchit-model";

export type MatchItService = {
  login(request: LoginRequest): Promise<LoginResponse>;
  signUp(request: SignUpRequest): Promise<SignUpResponse>;
  activateAccount(
    request: ActivateAccountRequest
  ): Promise<ActivateAccountResponse>;
};
