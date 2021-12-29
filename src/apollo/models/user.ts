export type AuthUser = {
  id?: number;
  uuid?: string;
  isEnabled?: boolean;
  createdByUserId?: number;
  modifiedByUserId?: number;
  name?: string;
  email?: string;
  password?: string;
  salt?: string;
  avatar?: string;
  bio?: string;
  isAdmin?: boolean;
  status?: UserStatus;
  verifiedAt?: Date;
  token?: string;
  expiredAt?: Date;
};

enum UserStatus {
  Waiting = "Waiting",
  Active = "Active",
  Disabled = "Disabled",
  Blocked = "Blocked",
}

export type CreateUser = {
  email: string;
  name?: string;
  clientId: number;
};

export type UserCredentials = {
  email: string;
  password: string;
};

export type User = {
  name: string;
  confirmPassword: string;
};

export type NewUser = User & UserCredentials;

export type UpdatePassword = {
  userId: string;
  oldPassword: string;
  password: string;
  confirmPassword: string;
};

export type ForgotAuth = {
  email: string;
};

export type ResetAuth = {
  password: string;
  confirmPassword: string;
  id: number;
  token: string;
  showPassword?: boolean;
};

export type VerifyAuth = {
  expires: string;
  id: number;
  token: string;
  signature: string;
};

export type VerifyResendAuth = {
  id: number;
};
