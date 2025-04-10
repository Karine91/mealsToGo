import { Text, View, StyleSheet, SafeAreaView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.search}>
        <Text>Search.</Text>
      </View>
      <View style={styles.list}>
        <Text>List.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  list: {
    backgroundColor: "blue",
    flex: 1,
    padding: 16,
  },
});
