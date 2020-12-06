import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { PricingCard } from 'react-native-elements';
import { padding } from './library/constants';
import Quiz from './views/Quiz';

type PagesMap = { [page: string]: JSX.Element };

export default function App() {
  const [page, setPage] = useState(() => 'home');
  return page === 'home' ? (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subheaderText}>Dashboard</Text>
        <Text style={styles.headerText}>Learn The Flags</Text>
      </View>
      <View style={styles.body}>
        <PricingCard
          containerStyle={{
            borderRadius: 8,
            backgroundColor: '#bfc0c5',
          }}
          color='#2c3046'
          title='Total Flags Learned'
          price='122'
          info={['70 Remaining']}
          button={{ title: 'STUDY FLAGS', icon: 'flag' }}
        />
        <PricingCard
          containerStyle={{
            borderRadius: 8,
            backgroundColor: '#bfc0c5',
          }}
          color='#2c3046'
          title='Quiz Stats'
          price='26/30'
          info={['Avg. score - 44%', 'Total quizes taken - 5']}
          button={{ title: 'TAKE A QUIZ', icon: 'flag' }}
          onButtonPress={() => setPage('quiz')}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={{ color: '#bfc0c5' }}>Reset Progress</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  // Layout
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#10152a',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: padding,
  },
  body: {
    flex: 7,
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: padding,
    paddingRight: padding,
  },
  headerText: {
    letterSpacing: 0.8,
    color: '#bfc0c5',
    fontWeight: '500',
    fontSize: 28,
    fontFamily: 'Futura',
  },
  subheaderText: {
    color: '#2c3046',
    fontSize: 20,
    marginBottom: 8,
    letterSpacing: 1.4,
  },
});
