export class User {
  constructor(
    public name: string,
    public email: string,
    public role: string,
    public password: string,
    public rpassword: string
  ) {}
}
export interface Profile {
  email: string;
  id: number;
}
export interface Num_Of_Verify_Users {
  numUsersAddedToday: number;
  numUsersAddedThisMonth: number;
  numUsersAddedThisYear: number;
  numAllUsers: number;
}
export interface Num_Of_Not_Verify_Users {
  numNotVerifyUsersAddedToday: number;
  numNotVerifyUsersAddedThisMonth: number;
  numNotVerifyUserAddThisYear: number;
  numAllNotVerifyUsers: number;
}
export interface Verify_Or_NotVerify_User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}
