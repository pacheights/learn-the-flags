import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import { FlagMap } from '../../library/FlagMap';
import { getRandomCountry, getButtonCountries } from '../../library/methods';
import { Button, Header } from '../../library/components';
const win = Dimensions.get('window');
const padding = win.width * (0.15 / 2);

interface IProps {
  back: () => void;
}

export default function Quiz(props: IProps) {
  const [flagCode, setFlagCode] = useState(() => getRandomCountry());
  const [correct, setcorrect] = useState(0);
  const [buttonCountries, setButtonCountries] = useState(() =>
    getButtonCountries(flagCode)
  );

  const handleCountryPress = (code: string) => {
    if (code === flagCode) {
      setcorrect(correct + 1);
    }
    const newCountry = getRandomCountry();
    setFlagCode(newCountry);
    setButtonCountries(getButtonCountries(newCountry));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header text={`Flag ${2}/30`} />
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
    // backgroundColor: 'pink',
  },
  body: {
    flex: 10,
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
    width: win.width * 0.85,
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
});
