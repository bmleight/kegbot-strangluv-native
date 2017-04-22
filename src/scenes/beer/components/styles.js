const { StyleSheet } = require('react-native');

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        margin: 10
    },
    beerHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    beerInfoContainer: {
        flex: 2,
    },
    beerName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black'
    },
    beerStatsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 35
    },
    beerStatContianer: {
        flex: 2
    },
    beerStat: {
        margin: 10,
        fontSize: 18
    },
    beerImageContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    beerImage: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        top: 10
    },
    beerDescriptionContainer: {
        flex: 2,
        height: 200
    },
    beerDescription: {
        margin: 10,
        fontSize: 18
    }
});
