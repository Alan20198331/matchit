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

export type AuthenticatedRequest = {
  jwtToken: string;
};

export type OpenGameRoom = {
  roomId: string;
  creatorUsername: string;
  createdAt: number;
  maxPlayers: number;
  playersInRoom: string[];
};

export type JoinRoomRequest = AuthenticatedRequest & {
  roomId: string;
  roomPassword: string;
};

export type JoinRoomResponse = {
  success: boolean;
  playerId: string;
};

export type GameStatus = "open" | "canceled" | "in-progress" | "done";

export type GameRoomPlayer = {
  username: string;
  playerId: string;

  ranking: number;
};

export type GameRoom = {
  roomId: string;
  creatorUsername: string;
  createdAt: number;
  players: GameRoomPlayer[];
  status: GameStatus;
  finishedAt?: number;
  imageAssets: GameImageAssetId[];
  deck: GameImageCard[];
};

export type GetRoomStatusRequest = AuthenticatedRequest & {
  roomId: string;
};

export type RoomStatusPlayer = {
  username: string;
  cardsInHand: number;
  points: number;
};

export type GetRoomStatusResponse = {
  roomId: string;
  creatorUsername: string;
  createdAt: number;
  finishedAt?: number;
  players: RoomStatusPlayer[];
};

export type GameImageAssetId = string;

export type GameImageAsset = {
  imageAssetId: GameImageAssetId;
  imageDataURI: string;
};

export type GameImageCard = {
  cardId: string;
  assets: GameImageAssetId[];
};
