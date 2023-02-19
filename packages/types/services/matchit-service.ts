import {
  ActivateAccountRequest,
  ActivateAccountResponse,
  AuthenticatedRequest,
  GetRoomStatusRequest,
  GetRoomStatusResponse,
  JoinRoomRequest,
  JoinRoomResponse,
  LoginRequest,
  LoginResponse,
  OpenGameRoom,
  SignUpRequest,
  SignUpResponse
} from "../model/matchit-model";

export type MatchItService = {
  login(request: LoginRequest): Promise<LoginResponse>;
  signUp(request: SignUpRequest): Promise<SignUpResponse>;
  activateAccount(
    request: ActivateAccountRequest
  ): Promise<ActivateAccountResponse>;

  listPublicOpenGames(req: AuthenticatedRequest): Promise<OpenGameRoom[]>;
  joinRoom(req: JoinRoomRequest): Promise<JoinRoomResponse>;

  getRoomStatus(req: GetRoomStatusRequest): Promise<GetRoomStatusResponse>;
};
