import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Button = ({ onPress, type, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View
        className={`m-2 ${
          type === "primary"
            ? "bg-indigo-800"
            : type === "danger"
            ? "bg-red-500"
            : ""
        } p-2 rounded-md`}
      >
        <Text className="text-white text-center text-lg">{title}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
export default Button;
