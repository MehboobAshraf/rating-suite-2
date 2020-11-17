class HelperService {
  checkUserStatusAndNavigate = (user) => {
    if (user) {
      if (user.userType === 'E') {
        return '/dashboard/reviews';
      }
      if (user.userType === 'NE') {
        if (user.userStatus === 'NEW' || user.userStatus === 'PROSPECT') {
          return '/dashboard/product-setup';
        }
        if (user.userStatus === 'BETA' || user.userStatus === 'CUSTOMER') {
          return '/dashboard/reviews';
        }
      }
    }
  };
}

export default new HelperService();
