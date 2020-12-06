import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

interface IProps {
  text: string;
}

export const Header = (props: IProps) => {
  const { text } = props;
  return <RNText style={styles.text}>{text}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    color: '#d6d8da',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
