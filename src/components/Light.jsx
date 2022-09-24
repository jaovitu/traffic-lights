import { StyleSheet, View } from "react-native";

const colors = {
  red: { colorOn: 'rgba(255, 0, 0, 1)', colorOff: 'rgba(255, 0, 0, 0.1)' },
  yellow: { colorOn: 'rgba(255, 255, 0, 1)', colorOff: 'rgba(255, 255, 0, 0.1)' },
  green: { colorOn: 'rgba(0, 255, 0, 1)', colorOff: 'rgba(0, 255, 0, 0.1)' },
}

function Light({ color, isOn, id, toggle }) {
  
  const { colorOn, colorOff } = colors[color];

  const styles = StyleSheet.create({
    lightStyle: {
      backgroundColor: isOn ? colorOn : colorOff,
      borderColor: 'rgba(143, 140, 140, 0.8)',
      borderRadius: 75,
      borderWidth: 10,
      height: 150,
      margin: 10,
      width: 150,
    },
  });

  return (
    <View style={styles.lightStyle} onStartShouldSetResponder={() => toggle(id)} ></View>
  );
}

export default Light;
