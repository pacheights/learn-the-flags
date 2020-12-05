import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { FlagMap } from './FlagMap';

const getRandomCountry = () => {
  const codes = Object.keys(FlagMap);
  const randomIndex = Math.floor(Math.random() * codes.length);
  const code = codes[randomIndex];
  return code;
}

const getButtonCountries = (flagCode: string) => {
  const codes = [];
  const randomIndex = Math.floor(Math.random() * 4);
  for (let i = 0; i < 4; i++) {
    if (i === randomIndex) {
      codes.push(flagCode)
    } else {
      codes.push(getRandomCountry())
    }
  }
  return codes;
}

export default function App() {
  const [flagCode, setFlagCode] = useState(getRandomCountry());
  const [streak, setStreak] = useState(0);
  const [buttonCountries, setButtonCountries] = useState(getButtonCountries(flagCode));

  const handleCountryPress = (code: string) => {
    if (code === flagCode) {
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
    const newCountry = getRandomCountry();
    setFlagCode(newCountry)
    setButtonCountries(getButtonCountries(newCountry))
  }

  return (
    <View style={styles.container}>
      {
        <Card
          containerStyle={{marginBottom: 24}}
        >
          <Card.Title>Streak: {streak}</Card.Title>
          <Card.Divider/>
          <Image
            source={FlagMap[flagCode].img}
            style={{
              width: 240,
              height: 158,
            }}
          />
        </Card>
      }
      <View>
        {
          buttonCountries.map(code => (
            <Button
              title={FlagMap[code].label}
              style={{marginBottom: 12, width: 274}}
              type='outline'
              onPress={() => handleCountryPress(code)}
            />
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
