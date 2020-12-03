import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
const FlagMap = require('./flag-map');

const getRandomCountry = () => {
  const codes = Object.keys(FlagMap);
  const randomIndex = Math.floor(Math.random() * codes.length);
  const code = codes[randomIndex];
  console.log(code)
  return code;
}

export default function App() {
  const [code, setCode] = useState(getRandomCountry());
  return (
    <View style={styles.container}>
      {
        <Card
          containerStyle={{marginBottom: 24}}
        >
          <Card.Title>{code ? FlagMap[code]?.label : 'Country'}</Card.Title>
          <Card.Divider/>
          <Image
            source={FlagMap[code].img}
            style={{
              width: 240,
              height: 158,
            }}
          />
        </Card>
      }
      <View>
        <Button
          title='Click for Random Flag'
          type='outline'
          onPress={() => setCode(getRandomCountry())}
        />
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
