import React, { FC } from 'react';
import { View, Text } from 'react-native';

interface Props {
  name: string;
}

const Greeting: FC<Props> = ({ name }) => {
  const capitalized = name.toUpperCase();

  return (
    <View>
      <Text>Hello, {capitalized}!</Text>
    </View>
  );
};

export default Greeting;
