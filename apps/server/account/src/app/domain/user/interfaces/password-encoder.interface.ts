export interface IPasswordEncoder {
  hash(password: string): Promise<string>;
  compare(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
