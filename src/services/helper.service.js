import { useLocation } from 'react-router-dom';

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
          // history.push('/dashboard/reviews');
        }
      }
    }
  };
  // useQuery() {
  //   return new URLSearchParams(useLocation().search);
  // }
}

export default new HelperService();
