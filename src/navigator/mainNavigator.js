import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList113967Navigator from '../features/ArticleList113967/navigator';
import Maps113954Navigator from '../features/Maps113954/navigator';
import ArticleList113949Navigator from '../features/ArticleList113949/navigator';
import Maps113936Navigator from '../features/Maps113936/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList113967: { screen: ArticleList113967Navigator },
Maps113954: { screen: Maps113954Navigator },
ArticleList113949: { screen: ArticleList113949Navigator },
Maps113936: { screen: Maps113936Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
