import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import SearchBar from "@/components/SearchBar";
import RestaurantInfoCard from "@/features/restaurants/components/RestaurantInfoCard";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.search}>
        <SearchBar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
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
    backgroundColor: "white",
  },
  list: {
    backgroundColor: "blue",
    flex: 1,
    padding: 16,
  },
});
