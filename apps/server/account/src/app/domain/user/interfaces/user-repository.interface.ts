export interface IUserRepository {
    create(user: any): Promise<any>;
    save(user: any): Promise<any>;
    findById(id: string): Promise<any>;
    findByEmail(email: string): Promise<any>;
    findByUsername(username: string): Promise<any>;
    delete(id: string): Promise<void>;
}