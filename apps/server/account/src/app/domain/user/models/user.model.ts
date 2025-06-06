export interface IUserProps {
  id: string;
  email: string;
  username: string;
  password?: string; // Optional, as it may not be needed in all contexts
  createdAt: Date;
  updatedAt: Date;
}
