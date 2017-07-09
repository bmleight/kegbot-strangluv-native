const React = require('react');
const { View, Text, Image, Button, StyleSheet } = require('react-native');
const styles = require('./styles');

const Icon = require('react-native-vector-icons/MaterialIcons').default;

class GameListView extends React.Component {

    static navigationOptions = {
        tabBar: {
            icon: () => (<Icon size={24} color='white' name='videogame-asset' />)
        }
    }

    static propTypes = {
        navigation: React.PropTypes.object.isRequired
    };

    onPressStart() {
        alert('Start!');
    }

    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Select a game</Text>
                <View style={styles.gameContainer}>
                    
                </View>
                <Text style={styles.subTitle}>Can you find the differences in the photos???????</Text>
                <Button
                  onPress={this.onPressStart}
                  title="Start"
                  color="#2196F3"
                  accessibilityLabel="Start the game"
                />
            </View>
        );
    }
}

module.exports = GameListView;
