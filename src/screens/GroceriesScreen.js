import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

//Lorem Ipsum Generator
const GroceriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Icon
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => navigation.goBack()}
      />
      <View>
        <View style={styles.textContainer}>
          <Text>
            Groceries. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <TouchableOpacity
            style={styles.altButton}
            onPress={() => navigation.navigate('Tabs', 'Testtab')}>
            <Text>Show homescreen with the bottom navigation tabs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// have a accept/decline button, acce
export default GroceriesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    width: SCREENWIDTH,
  },
  textContainer: {
    justifyContent: 'center',
    padding: 20,
  },
});
