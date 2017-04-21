const React = require('react');
const Counter = require('./counter');
const Home = require('./home');
const { NavigationComponent } = require('react-native-material-bottom-navigation');

module.exports = (store) => {

    return [
        {
            Home,
            Counter
        },
        {
            // Main app navigation config
            // https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig
            initialRouteName: 'Home',
            tabBarComponent: NavigationComponent,
            tabBarPosition: 'bottom',
            tabBarOptions: {
                bottomNavigationOptions: {
                    labelColor: 'white',
                    rippleColor: 'white',
                    tabs: {
                        Home: {
                            barBackgroundColor: '#37474F'
                        },
                        Counter: {
                            barBackgroundColor: '#e6158d'
                        }
                    }
                }
            }
        }
    ];
};
