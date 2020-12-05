import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Quiz from './views/Quiz';

type PagesMap = {[page: string]: JSX.Element};

export default function App() {
  const [page, setPage] = useState(() => 'home');
  return (
    page === 'home' ? (
      <View style={styles.container}>
        <Button
          title={"Take the quiz"}
          onPress={() => setPage(curr => 'quiz')}
        />
      </View>
    ) : (
      pages[page]
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const pages: PagesMap = {
  quiz: <Quiz/>
}