import { View, SafeAreaView } from "react-native";
import SearchBar from "@/components/SearchBar";
import RestaurantInfoCard from "@/features/restaurants/components/RestaurantInfoCard";
import styled from "styled-components/native";

const ListView = styled(View)({
  backgroundColor: "blue",
  flex: 1,
  padding: 16,
});

const SearchView = styled(View)({
  padding: 16,
  backgroundColor: "white",
});

const ContainerView = styled(SafeAreaView)({
  flex: 1,
});

export default function Index() {
  return (
    <ContainerView>
      <SearchView>
        <SearchBar />
      </SearchView>
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </ContainerView>
  );
}
