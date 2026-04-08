export declare class User {
    id: number;
    username: string;
    password?: string;
    fullName: string;
    email: string;
    mobile: string;
    pin: string;
    isActive: boolean;
    hourlyRate: number;
    outletId: number;
    permissions: string[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
