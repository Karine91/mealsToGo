import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "@/services/location/location.context";

const SearchView = styled(View)(({ theme }) => ({
  padding: theme.space[3],
  backgroundColor: theme.colors.bg.primary,
}));

const Search = () => {
  const { keyword, search, location } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  console.log(location);

  return (
    <SearchView>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
};

export default Search;
