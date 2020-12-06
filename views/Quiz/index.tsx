import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView } from 'react-native';
import { FlagMap } from '../../library/FlagMap';
import { getRandomCountry, getButtonCountries } from '../../library/methods';
import { Button } from '../../library/components';
import { padding, window } from '../../library/constants';

interface IProps {
  back: () => void;
}

export default function Quiz(props: IProps) {
  const [flagCode, setFlagCode] = useState(() => getRandomCountry());
  const [correct, setcorrect] = useState(0);
  const [questionNum, setQuestionNum] = useState(1);
  const [buttonCountries, setButtonCountries] = useState(() =>
    getButtonCountries(flagCode)
  );

  const handleCountryPress = (code: string) => {
    if (code === flagCode) {
      setcorrect(correct + 1);
    }
    const newCountry = getRandomCountry();
    setQuestionNum((num) => num + 1);
    setFlagCode(newCountry);
    setButtonCountries(getButtonCountries(newCountry));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageHeaderText}>Flag Quiz</Text>
        <View style={styles.score}>
          <Text style={styles.questionText}>Question</Text>
          <Text style={styles.questionNumber}>{questionNum}</Text>
          <Text style={styles.pageHeaderText}>/30</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.flagContainer}>
          <Image source={FlagMap[flagCode].img} style={styles.flagImage} />
        </View>
        <View style={styles.buttonContainer}>
          {buttonCountries.map((code) => (
            <Button
              key={code}
              title={FlagMap[code].label}
              handlePress={() => handleCountryPress(code)}
            />
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Button title={'Quit & Exit'} handlePress={props.back} />
      </View>
    </SafeAreaView>
  );
}

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
  },
  footer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: padding,
  },

  // Flag
  flagContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagImage: {
    width: window.width * 0.85,
    borderRadius: 20,
    backgroundColor: 'white',
  },

  // Buttons
  buttonContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: padding,
    paddingRight: padding,
  },

  // Score
  score: {
    flexDirection: 'row',
  },
  pageHeaderText: {
    color: '#2c3046',
    fontSize: 20,
    marginBottom: 8,
    letterSpacing: 1.4,
  },
  questionText: {
    letterSpacing: 0.8,
    color: '#bfc0c5',
    fontWeight: '500',
    fontSize: 28,
    fontFamily: 'Futura',
  },
  questionNumber: {
    fontSize: 32,
    marginLeft: 12,
    marginTop: -2,
    color: '#d6d8da',
    fontFamily: 'Futura',
  },
});
