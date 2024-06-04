export const getPageTitle = (location: string) => {
    const routAr = location.split('/');
    return routAr[1] === '' ? 'Dashboard' : 'Details'
}