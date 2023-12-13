export const Roles = {
  // Admin can do everything except access contact page
  ADMIN: 'ADMIN',
  // User can access home page, search page, login / register page, about page and contact page, but no access to profile list
  USER: 'USER',
  // Business Owner can only access login / register, profile page, and profile list
  BUSINESS_OWNER: 'BUSINESS_OWNER',
  // Anonymous can only access home page, login / register page, and about page
  ANONYMOUS: 'ANONYMOUS',
};
