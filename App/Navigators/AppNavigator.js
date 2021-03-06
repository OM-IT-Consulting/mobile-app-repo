import { createAppContainer, createStackNavigator,createDrawerNavigator } from 'react-navigation'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import SampleScreen from 'App/Containers/Sample/SampleScreen'
import ForgotPasswordScreen from 'App/Containers/ForgotPassword/ForgotPasswordScreen'
import RegisterScreen from 'App/Containers/Register/RegisterScreen'
import DashBoardScreen from 'App/Containers/DashBoard/DashBoardScreen'
import DonorListScreen from 'App/Containers/DonorList/DonorListScreen'
import AdminListScreen from 'App/Containers/AdminList/AdminListScreen'
import AdminDonorShareScreen from 'App/Containers/AdminDonorShare/AdminDonorShareScreen'
import LogoutScreen from 'App/Containers/Logout/LogoutScreen'
import RecipientDonorListScreen from 'App/Containers/RecipientDonorList/RecipientDonorListScreen'
import RecipientDonorListResultScreen from 'App/Containers/RecipientDonorListResult/RecipientDonorListResultScreen'
import ForgotPasswordResultScreen from 'App/Containers/ForgotPasswordResult/ForgotPasswordResultScreen'
import RegisterScreenOTPScreen from 'App/Containers/RegisterScreenOTP/RegisterScreenOTPScreen'
import RegisterScreenResultScreen from 'App/Containers/RegisterScreenResult/RegisterScreenResultScreen'
import RecipientDonorListDetailsScreen from 'App/Containers/RecipientDonorListDetails/RecipientDonorListDetailsScreen'
import DonorListDetailsScreen from 'App/Containers/DonorListDetails/DonorListDetailsScreen'
import AdminListSendResponseScreen from 'App/Containers/AdminListSendResponse/AdminListSendResponseScreen'
import AdminReportScreen from 'App/Containers/AdminReport/AdminReportScreen'
import AdminReportDetailsScreen from 'App/Containers/AdminReportDetails/AdminReportDetailsScreen'
import ForgotPasswordOTPScreen from 'App/Containers/ForgotPasswordOTP/ForgotPasswordOTPScreen'
import ContactUsScreen from 'App/Containers/ContactUs/ContactUsScreen'
import RecipientNotificationScreen from 'App/Containers/RecipientNotification/RecipientNotificationScreen'
import DonorNotificationScreen from 'App/Containers/DonorNotification/DonorNotificationScreen'
import AdminNotificationScreen from 'App/Containers/AdminNotification/AdminNotificationScreen'
import DrawerScreen from "../DrawerScreen/DrawerScreen";

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createDrawerNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: LoginScreen,
    //SampleScreen with initial data. Acts as a template to create new screens
    SampleScreen: SampleScreen,
    //InitialPage for ForgotPassword
    ForgotPasswordOTPScreen: ForgotPasswordOTPScreen,
    //ForgotPasswordScreen with initial data. For forgot password
    ForgotPasswordScreen: ForgotPasswordScreen,
    //ForgotPassword Result Screen
    ForgotPasswordResultScreen: ForgotPasswordResultScreen,
    //RegisterScreen with initial data. For new user registration
    RegisterScreen: RegisterScreen,
    // New User Registration OTP Screen
    RegisterScreenOTPScreen: RegisterScreenOTPScreen,
    // New User Registration Result Screen
    RegisterScreenResultScreen: RegisterScreenResultScreen,
    //DashBoardScreen with initial data. For dashboard loading
    DashBoardScreen: DashBoardScreen,
    // HomePage for the donors
    DonorListScreen: DonorListScreen,
    // DonorList Details Screen
    DonorListDetailsScreen: DonorListDetailsScreen,
    // HomePage for the admin
    AdminListScreen: AdminListScreen,
    //Admin List Send Response Screen
    AdminListSendResponseScreen: AdminListSendResponseScreen,
    // Screen to Share the details to donor for admin
    AdminDonorShareScreen: AdminDonorShareScreen,
    // Report Screen for Admin
    AdminReportScreen: AdminReportScreen,
    //Admin Report Details Screen
    AdminReportDetailsScreen: AdminReportDetailsScreen,
    //Logout Screen
    LogoutScreen: LogoutScreen,
    // Recipient List Screen
    RecipientDonorListScreen: RecipientDonorListScreen,
    // Recipient List Result Screen
    RecipientDonorListResultScreen: RecipientDonorListResultScreen,
    // Recipient List Details Screen
    RecipientDonorListDetailsScreen: RecipientDonorListDetailsScreen,
    //ContactUs Screen
    ContactUsScreen: ContactUsScreen,
    //RecipientNotification Screen
    RecipientNotificationScreen: RecipientNotificationScreen,
    //DonorNotification Screen
    DonorNotificationScreen: DonorNotificationScreen,
    //AdminNotification Screen
    AdminNotificationScreen: AdminNotificationScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'MainScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
    contentComponent: DrawerScreen,
  }
)

export default createAppContainer(StackNavigator)
