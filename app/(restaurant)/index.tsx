import { View, SafeAreaView } from "react-native";
import SearchBar from "@/components/SearchBar";
import RestaurantInfoCard from "@/features/restaurants/components/RestaurantInfoCard";
import styled from "styled-components/native";

const ListView = styled(View)(({ theme }) => ({
  backgroundColor: theme.colors.bg.secondary,
  flex: 1,
  padding: theme.space[3],
}));

const SearchView = styled(View)(({ theme }) => ({
  padding: theme.space[3],
  backgroundColor: theme.colors.bg.primary,
}));

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
