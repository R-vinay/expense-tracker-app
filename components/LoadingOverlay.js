import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const LoadingOverlay = () => {
  return (
    <View className="flex-1 justify-center align-middle">
      <Text>
        <ActivityIndicator size={"large"} color="white" />
      </Text>
    </View>
  );
};

export default LoadingOverlay;
