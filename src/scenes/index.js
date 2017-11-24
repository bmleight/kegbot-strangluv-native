const React = require('react');
const beer = require('./beer');
const games = require('./games');
const drive = require('./drive');
const { NavigationComponent } = require('react-native-material-bottom-navigation');

module.exports = (store) => {

    return [
        {
            beer,
            games,
            drive
        },
        {
            // Main app navigation config
            // https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig
            initialRouteName: 'beer',
            tabBarComponent: NavigationComponent,
            tabBarPosition: 'bottom',
            tabBarOptions: {
                bottomNavigationOptions: {
                    labelColor: 'white',
                    rippleColor: 'white',
                    tabs: {
                        beer: {
                            barBackgroundColor: '#37474F'
                        },
                        games: {
                            barBackgroundColor: '#37474F'
                        },
                        drive: {
                            barBackgroundColor: '#37474F'
                        }
                    }
                }
            }
        }
    ];
};
