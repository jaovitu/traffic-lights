import { StyleSheet, View } from "react-native";
import { useState } from 'react';

import Box from "../components/Box";
import Light from "../components/Light";

function Home() {

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      paddingTop: 40,
      justifyContent: 'space-around',
    },
  });

  const [ lightsStates, setLightsStates ] = useState([
    { key: 1, color: 'red', isOn: true },
    { key: 2, color: 'yellow', isOn: false },
    { key: 3, color: 'green', isOn: false },
  ]);

  return (
    <View style={styles.container} >
      <Box>
        {lightsStates.map( ({ key, color, isOn }) => (
          <Light key={key} color={color} isOn={isOn} id={key} state={lightsStates} setState={setLightsStates} />
        ) )}
      </Box>
    </View>
  );
}

export default Home;
