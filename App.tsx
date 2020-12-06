import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Quiz from './views/Quiz';

type PagesMap = { [page: string]: JSX.Element };

export default function App() {
  const [page, setPage] = useState(() => 'home');
  return page === 'home' ? (
    <View style={styles.container}>
      <Button
        title={'Take the quiz'}
        onPress={() => setPage((curr) => 'quiz')}
      />
    </View>
  ) : (
    getPage(page, () => setPage('home'))
  );
}

const getPage = (page: string, back: () => void): JSX.Element => {
  const pages: PagesMap = {
    quiz: <Quiz back={back} />,
  };
  return pages[page];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10152a',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
  },
});
