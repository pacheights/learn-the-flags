import { FlagMap } from './FlagMap';

export const getRandomCountry = () => {
  const codes = Object.keys(FlagMap);
  const randomIndex = Math.floor(Math.random() * codes.length);
  const code = codes[randomIndex];
  return code;
};

export const getButtonCountries = (flagCode: string) => {
  const codes: string[] = [];
  const randomIndex = Math.floor(Math.random() * 4);
  for (let i = 0; i < 4; i++) {
    if (i === randomIndex) {
      codes.push(flagCode);
    } else {
      let newCountry = getRandomCountry();
      while (newCountry === flagCode && codes.includes(newCountry)) {
        newCountry = getRandomCountry();
      }
      codes.push(newCountry);
    }
  }
  return codes;
};
