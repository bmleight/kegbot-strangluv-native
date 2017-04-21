const React = require('react');
const { View, Text, Button } = require('react-native');

const Icon = require('react-native-vector-icons/MaterialIcons').default;

class Counter extends React.Component{

    static navigationOptions = {
        tabBar: {
            icon: () => (<Icon size={24} color='white' name='add' />)
        }
    }

    render() {

        const props = this.props;

        return (

            <View style={{ margin: 128 }}>
                <Text>Counter:</Text>
                <Text>{' '}</Text>
                <Text>{props.counter}</Text>
                <Button
                    onPress={props.increment}
                    title='Increment'
                />
                <Text>{' '}</Text>
                <Button
                    onPress={props.doubleAsync}
                    title='Double (Async)'
                />
            </View>

        );
    }
}

Counter.propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
};

console.log(Counter);

module.exports = Counter;
