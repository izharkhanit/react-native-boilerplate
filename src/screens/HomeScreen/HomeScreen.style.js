'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SharedStyles = StyleSheet.create({
    productContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        top: 0,
    },
    productTitle: {
        color: 'black',
        fontSize: 20,
        padding:8,
    },
    productImage: {
        width: width - 12,
        height: 180,
        padding:8,
        margin:8,
    },
    filterIcon: {
        position: 'absolute',
        right: 30,
        top: 50,
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        color: 'orange',
    },
    productPrice: {
        color: 'grey',
        fontSize: 20,
        alignSelf: 'flex-end',
    },
    
});

export default SharedStyles;