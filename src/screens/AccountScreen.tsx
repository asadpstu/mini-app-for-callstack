import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const AccountScreen = () => {
  return (
    <ScrollView>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>
            This is remote repository - Account screen.
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

export default AccountScreen;
