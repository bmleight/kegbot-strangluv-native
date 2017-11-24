const React = require('react');
const { View, Text, Image, Button, StyleSheet } = require('react-native');
const styles = require('./styles');

const Icon = require('react-native-vector-icons/MaterialIcons').default;

class DriveView extends React.Component {

    static navigationOptions = {
        tabBar: {
            icon: () => (<Icon size={24} color='white' name='directions-car' />)
        }
    }

    static propTypes = {
        navigation: React.PropTypes.object.isRequired
    };

    onPressConnect() {
        alert('Connect!');
    }

    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Drive Kegbot!</Text>
                <Text style={styles.subTitle}>Pushing connect will attempt to connect to kegbit via bluetooth.</Text>
                <Button
                  onPress={this.onPressConnect}
                  title="Connect"
                  color="#2196F3"
                  accessibilityLabel="Start the game"
                />
            </View>
        );
    }
}

module.exports = DriveView;
