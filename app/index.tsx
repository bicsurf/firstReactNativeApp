import Todo from "@/components/Todo";
import { Text, View } from "react-native";

export default function index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text>testing   Edit app/index.tsx to edit this screen.</Text> */}
      <Todo />
    </View>
  );
}
