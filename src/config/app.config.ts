interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Restaurant Staff', 'Delivery Driver'],
  tenantName: 'Restaurant',
  applicationName: 'Online Ordering System for Restaurants',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal user information',
    'Place orders',
    'Read restaurant and menu information',
    'Update own orders',
  ],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage restaurant menus',
    'Manage orders',
    'Manage delivery drivers',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/e299caf6-b81c-44b9-8513-948331930e73',
};
