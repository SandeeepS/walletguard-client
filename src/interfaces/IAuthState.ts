interface UserDataType {
  id: string;
  name: string;
  email: string;
  role: string;
}
export interface IAuthState {
  userData: UserDataType | null;
}
