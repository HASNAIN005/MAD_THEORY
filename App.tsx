import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name: string;
}

const Greeting: FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Greeting;
