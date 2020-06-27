'use strict';

import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProductList = props => {
    const {
        productImage,
        productPrice,
        productTitle,
        style,
        onPress,
    } = props;

    return (
        <View style={style.productContainer}>
            <Text style={style.productTitle}>
                {productTitle}
            </Text>
            <TouchableOpacity onPress={onPress}>
                <Image source={{ uri: productImage }} style={style.productImage} />
            </TouchableOpacity>
            <FontAwesome5 name="star" style={style.filterIcon} size={30} />

            <Text style={style.productPrice}>
                Price
                    <Text style={style.textColor}>
                    {productPrice}
                </Text>
            </Text>
            <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
        </View>
       
    );
};


export default ProductList;

