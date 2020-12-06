import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

interface IProps {
  title: string;
  handlePress: () => void;
}

export const Button = (props: IProps) => {
  const { title, handlePress } = props;
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => handlePress()}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 16,
    borderColor: '#aab2ba',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    paddingLeft: 24,
    paddingRight: 24,
  },
  buttonText: {
    color: '#aab2ba',
    fontSize: 18,
  },
});
