import { useRoutes } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getMenus } from "./store/actions/authActions";
import Landing from "./page/Landing";
import Signup_Main from "./page/Authentication_Page/Signup/Signup_Main";
import Login_Main from "./page/Authentication_Page/Login/Login_Main";
import ManageProfileMain from "./page/ManageProfile/ManageProfileMain";
import Forget_Password from "./page/Authentication_Page/Components/Forget_Password";
import Password_Confirmation from "./page/Authentication_Page/Components/Password_Confirmation";
import Change_Password from "./page/Authentication_Page/Components/Change_Password";
import GuestDetailsMain from "./page/GuestDetails/GuestDetailsMain";
import About_Us from "./page/About_Us/About_Us";
import InvoiceDetails from "./page/InvoiceDetails/InvoiceDetails";
import DetailPage from "./page/DetailPage/DetailPage";
import Search_Results from "./page/Search_Results";
import Categories from "./page/Categories/Categories";
import Privacy_Policy from "./page/Privacy_Policy/Privacy_Policy";
import Cnfrm_Screen from "./page/Confirm_Screen/Cnfrm_Screen";
import Booking_Info from "./page/Booking_Info/Booking_Info";
import Contact_Us from "./page/Contact_Us/Contact_Us";
import BlogsMain from "./page/Blogs/BlogsMain";
import BlogDetail from "./page/Blogs/BlogDetail";
import HelpPageMain from "./page/Help_Page/HelpPageMain";
import WhereFindMain from "./page/WhereToFind/WhereFindMain";
import PaymentDetailsMain from "./page/PaymentDeatils/PaymentDetailsMain";
import AdminLogin from "./views/Auth/Login/AdminLogin";
import WishList from "./page/Wish_List/WishList";
import CartMain from "./page/ViewCart/CartMain";
import History from "./page/history/History";
import Booking from "./page/booking/Booking";
import TermsConditions from "./page/TermsConditions/TermsConditions";
import Gift from "./page/gift/Gift";
import Reviews from "./page/reviews/Reviews";
import GuidLine from "./page/guidline/GuidLine";
import GenerateInvoice from "./page/PaymentDeatils/GenerateInvoice";
import StripeGift from "./page/gift/StripeGift";
import PreviewCard from "./page/gift/PreviewCard";
import UnAuthDetail from "./page/Help_Page/UnAuthDetail";
import GenerateCheckoutInvoice from "./page/PaymentDeatils/GenerateCheckoutInvoice";
import ErrorPage from "./components/ErrorBoundary/components/ErrorPage";
import PaymentErrorPage from "./page/PaymentDeatils/PaymentErrorPage";
import ThankYouPage from "./page/PaymentDeatils/ThankYouPage";
import GiftPaymentInfo from "./page/gift/GiftPaymentInfo";

export default function Router() {
  const dispatch = useDispatch();
  const [allPaths, setAllPaths] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const result = await dispatch(getMenus());
        setAllPaths(result?.data?.payload || []);
      } catch (err) {
        console.error("Error fetching menus:", err);
      }
    };

    fetchMenus();
  }, [dispatch]);

  // Function to find the matched route for a given path
  const getMatchedRouteForPath = (path) => {
    const lowercasePath = path.toLowerCase().replace("/", "");
    const matchedPath = allPaths.find((item) => item.name.toLowerCase().includes(lowercasePath));
    if (matchedPath) {

      return { route: matchedPath.route, nameProp: matchedPath.page_title };
    } else {

      return { route: path, nameProp: '' };
    }
    // return matchedPath ? { route: matchedPath.route, nameProp: matchedPath.page_title } : { route: path, nameProp: '' };
  };


  // Route configuration
  const element = useRoutes([
    { path: "/", element: <Landing nameProp={getMatchedRouteForPath("/").nameProp} /> },
    { path: "/error", element: <ErrorPage /> },
    { path: getMatchedRouteForPath("/signup").route, element: <Signup_Main nameProp={getMatchedRouteForPath("/signup").nameProp} /> },
    { path: getMatchedRouteForPath("/login").route, element: <Login_Main nameProp={getMatchedRouteForPath("/login").nameProp} /> },
    { path: getMatchedRouteForPath("/manage-profile").route, element: <ManageProfileMain nameProp={getMatchedRouteForPath("/manage-profile").nameProp} /> },
    { path: getMatchedRouteForPath("/forget-password").route, element: <Forget_Password nameProp={getMatchedRouteForPath("/forget-password").nameProp} /> },
    { path: getMatchedRouteForPath("/otp-authentication").route, element: <Password_Confirmation nameProp={getMatchedRouteForPath("/otp-authentication").nameProp} /> },
    { path: getMatchedRouteForPath("/change-password").route, element: <Change_Password nameProp={getMatchedRouteForPath("/change-password").nameProp} /> },
    { path: getMatchedRouteForPath("/guest-details").route, element: <GuestDetailsMain nameProp={getMatchedRouteForPath("/guest-details").nameProp} /> },
    { path: getMatchedRouteForPath("/about").route, element: <About_Us nameProp={getMatchedRouteForPath("/about").nameProp} /> },
    { path: getMatchedRouteForPath("/invoice-details").route, element: <InvoiceDetails nameProp={getMatchedRouteForPath("/invoice-details").nameProp} /> },
    { path: getMatchedRouteForPath("things-to-do-in-dubai/:id").route, element: <DetailPage nameProp={getMatchedRouteForPath("things-to-do-in-dubai/:id").nameProp} /> },
    { path: getMatchedRouteForPath("/search-result").route, element: <Search_Results nameProp={getMatchedRouteForPath("/search-result").nameProp} /> },
    { path: getMatchedRouteForPath("/desert-safari").route, element: <Categories nameProp={getMatchedRouteForPath("/desert-safari").nameProp} /> },
    { path: getMatchedRouteForPath("/privacy-policy").route, element: <Privacy_Policy nameProp={getMatchedRouteForPath("/privacy-policy").nameProp} /> },
    { path: getMatchedRouteForPath("/confirmation").route, element: <Cnfrm_Screen nameProp={getMatchedRouteForPath("/confirmation").nameProp} /> },
    { path: getMatchedRouteForPath("/booking-info").route, element: <Booking_Info nameProp={getMatchedRouteForPath("/booking-info").nameProp} /> },
    { path: getMatchedRouteForPath("/contact-us").route, element: <Contact_Us nameProp={getMatchedRouteForPath("/contact-us").nameProp} /> },
    { path: getMatchedRouteForPath("/blogs").route, element: <BlogsMain nameProp={getMatchedRouteForPath("/blogs").nameProp} /> },
    { path: getMatchedRouteForPath("/blogs/:id").route, element: <BlogDetail nameProp={getMatchedRouteForPath("/blogs/:id").nameProp} /> },
    { path: getMatchedRouteForPath("/help").route, element: <HelpPageMain nameProp={getMatchedRouteForPath("/help").nameProp} /> },
    { path: getMatchedRouteForPath("/where-to-find-us").route, element: <WhereFindMain nameProp={getMatchedRouteForPath("/where-to-find-us").nameProp} /> },
    { path: getMatchedRouteForPath("/payment-details").route, element: <PaymentDetailsMain nameProp={getMatchedRouteForPath("/payment-details").nameProp} /> },
    { path: getMatchedRouteForPath("/admin-login").route, element: <AdminLogin nameProp={getMatchedRouteForPath("/admin-login").nameProp} /> },
    { path: getMatchedRouteForPath("/whish-list").route, element: <WishList nameProp={getMatchedRouteForPath("/whish-list").nameProp} /> },
    { path: getMatchedRouteForPath("/cart").route, element: <CartMain nameProp={getMatchedRouteForPath("/cart").nameProp} /> },
    { path: getMatchedRouteForPath("/history").route, element: <History nameProp={getMatchedRouteForPath("/history").nameProp} /> },
    { path: getMatchedRouteForPath("/all-booking").route, element: <Booking nameProp={getMatchedRouteForPath("/all-booking").nameProp} /> },
    { path: getMatchedRouteForPath("/terms-&-conditions").route, element: <TermsConditions nameProp={getMatchedRouteForPath("/terms-&-conditions").nameProp} /> },
    { path: getMatchedRouteForPath("/view-gift").route, element: <Gift nameProp={getMatchedRouteForPath("/view-gift").nameProp} /> },
    { path: getMatchedRouteForPath("/feedback").route, element: <Reviews nameProp={getMatchedRouteForPath("/feedback").nameProp} /> },
    { path: getMatchedRouteForPath("/guideline").route, element: <GuidLine nameProp={getMatchedRouteForPath("/guideline").nameProp} /> },
    { path: getMatchedRouteForPath("/invoice-detail").route, element: <GenerateInvoice nameProp={getMatchedRouteForPath("/invoice-detail").nameProp} /> },
    { path: getMatchedRouteForPath("/invoice-Checkout").route, element: <GenerateCheckoutInvoice nameProp={getMatchedRouteForPath("/invoice-Checkout").nameProp} /> },
    { path: getMatchedRouteForPath("/gift-pay").route, element: <StripeGift nameProp={getMatchedRouteForPath("/gift-pay").nameProp} /> },
    { path: getMatchedRouteForPath("/preview-card").route, element: <PreviewCard nameProp={getMatchedRouteForPath("/preview-card").nameProp} /> },
    { path: getMatchedRouteForPath("/payment-help").route, element: <UnAuthDetail nameProp={getMatchedRouteForPath("/payment-help").nameProp} /> },
    { path: getMatchedRouteForPath("/payment-error").route, element: <PaymentErrorPage /> }, // Add this line
    { path: getMatchedRouteForPath("/thank-you").route, element: <ThankYouPage /> }, // Add this line
    { path: getMatchedRouteForPath("/gift-payment-info/:code").route, element: <GiftPaymentInfo /> }, // Add this line
  ]);

  return element;
}
