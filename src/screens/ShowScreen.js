import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';
// Could use Context as BlogContext for multiple context calls

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

  return (
    <View>
      <View style={styles.title}>
        <Text>{blogPost.title}</Text>
      </View>
      <View style={styles.content}>
        <Text>{blogPost.content}</Text>
      </View>
    </View>
  );
};
 
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity 
        onPress={() => 
          navigation.navigate('Edit', { id: navigation.getParam('id')})
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    paddingBottom: 15
  },
  content: {
    fontSize: 18
  }
});
 
export default ShowScreen;
