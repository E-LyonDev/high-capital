
//Example of referred users data for refred-user.html
const referredUsers = [
    { name: 'Amauche Martins', bonus: 20 },
    { name: 'Fred Ezem', bonus: 20 },
    { name: 'Charles Blord', bonus: 20 },
    { name: 'Kenneth hardin', bonus: 20 },
    { name: 'Amauche Martins', bonus: 20 },
    { name: 'Amauche Martins', bonus: 20 },
    { name: 'Fred Ezem', bonus: 20 },
    { name: 'Charles Blord', bonus: 20 },
    { name: 'Kenneth hardin', bonus: 20 },
    { name: 'Amauche Martins', bonus: 20 },
    { name: 'Amauche Martins', bonus: 20 },
    { name: 'Fred Ezem', bonus: 20 },
    { name: 'Charles Blord', bonus: 20 },
    { name: 'Kenneth hardin', bonus: 20 },
    { name: 'Amauche Martins', bonus: 20 },
];
 //  // Example transaction data for history.html
 const transactions = [
    { type: 'deposit', currency: 'ethereum', date: '2024-05-04', time: '16:04:21', amount: 2000, status: 'Success' },
    { type: 'deposit', currency: 'bitcoin', date: '2025-01-04', time: '15:10:09', amount: 2000, status: 'Failed' },
    { type: 'earnings', currency: 'bitcoin', date: '2025-01-08', time: '14:00:23', amount: 2200, status: 'Success' },
    { type: 'referral', currency: 'litecoin', date: '2025-01-03', time: '05:44:59', amount: 300, status: 'Success' },
    { type: 'deposit', currency: 'bitcoin', date: '2025-01-04', time: '16:04:21', amount: 2000, status: 'Success' },
    { type: 'deposit', currency: 'litecoin', date: '2024-08-04', time: '15:10:09', amount: 2000, status: 'Failed' },
    { type: 'earnings', currency: 'ethereum', date: '2024-07-08', time: '14:00:23', amount: 2200, status: 'Success' },
    { type: 'referral', currency: 'bitcoin', date: '2025-01-03', time: '05:44:59', amount: 300, status: 'Success' },
    { type: 'deposit', currency: 'bitcoin', date: '2025-01-04', time: '16:04:21', amount: 2000, status: 'Success' },
    { type: 'deposit', currency: 'bitcoin', date: '2025-01-04', time: '15:10:09', amount: 2000, status: 'Failed' },
    { type: 'earnings', currency: 'ethereum', date: '2025-01-08', time: '14:00:23', amount: 2200, status: 'Success' },
    { type: 'referral', currency: 'litecoin', date: '2025-01-03', time: '05:44:59', amount: 300, status: 'Success' },
    { type: 'deposit', currency: 'bitcoin', date: '2025-01-04', time: '16:04:21', amount: 2000, status: 'Success' },
    { type: 'deposit', currency: 'bitcoin', date: '2023-04-04', time: '15:10:09', amount: 2000, status: 'Failed' },
    { type: 'earnings', currency: 'ethereum', date: '2025-01-08', time: '14:00:23', amount: 2200, status: 'Success' },
    { type: 'referral', currency: 'litecoin', date: '2025-01-03', time: '05:44:59', amount: 300, status: 'Success' },
];

const data = {
    bitcoin: {
        accountBalance: 1000.00,
        totalEarning: 500.00,
        activeDeposit: 300.00,
        totalDeposit: 800.00,
        referralBonus: 50.00
    },
    ethereum: {
        accountBalance: 2000.00,
        totalEarning: 1000.00,
        activeDeposit: 600.00,
        totalDeposit: 1600.00,
        referralBonus: 100.00
    },
    litecoin: {
        accountBalance: 1500.00,
        totalEarning: 750.00,
        activeDeposit: 450.00,
        totalDeposit: 1200.00,
        referralBonus: 75.00
    }
};


