export interface CreateUserDTO {
  email: string;
  password: string;
  username: string;
}

export interface SignInDTO extends Omit<CreateUserDTO, 'username'> {}

export interface JwtDTO {
  refresh: string;
  access: string;
}
