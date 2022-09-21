import React from "react";
import { StyleSheet, View } from "react-native";

function Box({ children }) {

  const styles = StyleSheet.create({
    boxStyle: {
      alignItems: 'center',
      backgroundColor: 'rgba(48, 46, 60, 0.7)',
      borderRadius: 20,
      justifyContent: 'center',
      padding: 30,
    },

    base: {
      backgroundColor: 'rgba(48, 46, 60, 0.7)',
      flex: 1,
      width: 30,
    },
  });

  return (
    <>
      <View style={styles.boxStyle} >
        {children}
      </View>
      <View style={styles.base} ></View>
    </>
  );
}

export default Box;
