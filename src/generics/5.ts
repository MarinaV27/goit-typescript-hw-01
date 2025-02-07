export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record
type Role = Record<UserRole, string>;

const RoleDescription: Role = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};

export {RoleDescription}