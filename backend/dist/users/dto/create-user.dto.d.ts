export declare class CreateUserDto {
    username: string;
    password: string;
    fullName: string;
    email?: string;
    mobile?: string;
    pin?: string;
    isActive?: boolean;
    hourlyRate?: number;
    outletId?: number;
    permissions?: string[];
}
