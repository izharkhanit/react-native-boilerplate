import React, { useContext } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from '../../common';
import { translate } from '../../i18n';
import { ThemeContext } from '../../theme';
import SharedStyles from './../HomeScreen/HomeScreen.style';

const DetailScreen = ({ route, navigation }) => {
  const { theme } = useContext(ThemeContext);
  const {productTitle, productDescription, productSpecification,productPrice,productImage} = route.params;
        
  return (

    <ScrollView style={styles.container(theme)}>
      <View style={SharedStyles.productContainer}>
            <Text style={SharedStyles.productTitle}>
                {productTitle}
            </Text>
            <Text style={SharedStyles.productTitle}>
               Description: <Text> {productDescription}</Text>
            </Text>
            <TouchableOpacity>
                <Image source={{ uri: productImage }} style={SharedStyles.productImage} />
            </TouchableOpacity>

            <Text style={SharedStyles.productPrice}>
                Price
                    <Text style={SharedStyles.textColor}>
                    {productPrice}
                </Text>
            </Text>
            <Text style={SharedStyles.productTitle}>
            Specification: <Text> {productSpecification}</Text>
            </Text>

            <View
      />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: theme => ({
    backgroundColor: theme.backgroundColor,
  })
});

DetailScreen.propTypes = {};

DetailScreen.defaultProps = {};

export default DetailScreen;
