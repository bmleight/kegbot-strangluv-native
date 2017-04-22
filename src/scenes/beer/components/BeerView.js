const React = require('react');
const { View, Text, Image, StyleSheet } = require('react-native');
const styles = require('./styles');

const Icon = require('react-native-vector-icons/FontAwesome').default;

class BeerView extends React.Component {

    static navigationOptions = {
        tabBar: {
            icon: () => (<Icon size={24} color='white' name='beer' />)
        }
    };

    static propTypes = {
        navigation: React.PropTypes.object.isRequired
    };

    render() {

        const { navigation } = this.props;

        return (

            <View style={styles.container}>
                <View style={styles.beerHeader}>

                    <View style={styles.beerInfoContainer}>

                        <Text style={styles.beerName}>Epiphany</Text>

                        <View style={styles.beerStatsContainer}>
                            <View style={styles.beerStatContainer}>
                                <Text style={styles.beerStat}>8%</Text>
                            </View>
                            <View style={styles.beerStatContainer}>
                                <Text style={styles.beerStat}>85 IBUs</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.beerImageContainer}>
                        <Image
                            source={require('../assets/epiphany-logo.jpg')}
                            style={styles.beerImage}
                            resizeMode="cover"
                        />
                    </View>

                </View>

                <View style={styles.beerDescriptionContainer}>
                    <Text style={styles.beerDescription}>
                        We indulged in our desire to create an IPA that personifies the vivid flavors that can be coaxed from the hop cone, painted on a canvas of soft malt that allows the flavors to shine through.  Extensively hopped in the kettle and in the fermentor, we spared nothing in making this beer.  Epiphany was designed to showcase the glorious flavor and aromatics of hops without any astringent bitterness.  Citrus, tropical fruit and pine blend to provide you with a sublimely juicy hop experience. East or west coast? No. This is a Maine IPA.
                    </Text>
                </View>

            </View>
        );
    }
}

module.exports = BeerView;
