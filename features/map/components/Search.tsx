import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "@/services/location/location.context";

const SearchView = styled(View)(({ theme }) => ({
  padding: theme.space[3],
  position: "absolute",
  zIndex: 999,
  top: 20,
  width: "100%",
  boxShadow: "0px 3px 3px rgba(0,0,0,0.3)",
}));

const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchView>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
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
