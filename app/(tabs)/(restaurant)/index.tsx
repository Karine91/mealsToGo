import { View, SafeAreaView, FlatList, StatusBar } from "react-native";
import SearchBar from "@/components/SearchBar";
import RestaurantInfoCard from "@/features/restaurants/components/restaurant-info-card/RestaurantInfoCard";
import styled from "styled-components/native";

const list = [
  { name: "1" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
  { name: "10" },
  { name: "11" },
  { name: "12" },
  { name: "13" },
  { name: "14" },
  { name: "15" },
  { name: "16" },
];

type ListItem = (typeof list)[number];

const SearchView = styled(View)(({ theme }) => ({
  padding: theme.space[3],
  backgroundColor: theme.colors.bg.primary,
}));

const ContainerView = styled(SafeAreaView)({
  flex: 1
});

const RestaurantList = styled(FlatList<ListItem>).attrs({
  contentContainerStyle: { padding: 16, gap: 16 },
})``;

export default function Index() {
  return (
    <ContainerView>
      <SearchView>
        <SearchBar />
      </SearchView>
      <RestaurantList
        data={list}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </ContainerView>
  );
}
