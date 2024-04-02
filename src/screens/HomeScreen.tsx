import React from 'react';
import {Alert, FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {
  Text,
} from 'react-native-paper';



const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>
            This is news remote repository.
          </Text>
      </View> 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 3
  },
  header: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
  },
});

export default HomeScreen;
