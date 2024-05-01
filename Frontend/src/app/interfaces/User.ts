export class User {
  constructor(
    public name: string,
    public email: string,
    public role: string,
    public password: string,
    public rpassword: string
  ) { }
}

export interface ChangePassword {
  old_password: string,
  new_password: string,
  new_password_confirmation: string;
}