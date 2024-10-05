import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const IconButton = ({ onPress, name, size, color }) => {
  return (
    <Pressable className="mr-2" onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
