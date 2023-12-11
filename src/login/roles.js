export const Roles = {
    // Admin can do everything
    ADMIN: 'ADMIN',
    // User can only access home page, search page, login / register page, about page
    // and contact page, but no access to Profile List
    USER: 'USER',
    // Business Owner can only access login / register, profile page, and Profile List
    BUSINESS_OWNER: 'BUSINESS_OWNER',
    // Anonymous can only access home page, and login / register page, and about page
    ANONYMOUS: 'ANONYMOUS',
};

// Usage:
//const userRole = Roles.USER;