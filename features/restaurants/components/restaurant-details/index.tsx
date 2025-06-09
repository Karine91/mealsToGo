import React from "react";
import { View, ScrollView } from "react-native";
import { List } from "react-native-paper";

import { AccordionIcon, AccordionGroup, Accordion } from "./styles";

const RestaurantDetails = () => {
  return (
    <ScrollView style={{ height: "100%" }}>
      <AccordionGroup>
        <List.AccordionGroup>
          <Accordion
            title="Breakfast"
            id={1}
            left={(props) => <AccordionIcon icon="bread-slice" />}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </Accordion>
          <Accordion
            left={(props) => <AccordionIcon icon="hamburger" />}
            title="Lunch"
            id={2}
          >
            <View style={{ backgroundColor: "white" }}>
              <List.Item title="Burger w/Fries" />
              <List.Item title="Steak Sandwich" />
              <List.Item title="Mushroom Soup" />
            </View>
          </Accordion>
          <Accordion
            left={(props) => <AccordionIcon icon="food-turkey" />}
            title="Dinner"
            id={3}
          >
            <View style={{ backgroundColor: "white" }}>
              <List.Item title="Spaghetti Bolognese" />
              <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
              <List.Item title="Steak Frites" />
            </View>
          </Accordion>
          <Accordion
            left={(props) => <AccordionIcon icon="glass-mug" />}
            title="Drinks"
            id={4}
          >
            <View style={{ backgroundColor: "white" }}>
              <List.Item title="Coffee" />
              <List.Item title="Tea" />
              <List.Item title="Modelo" />
              <List.Item title="Coke" />
              <List.Item title="Fanta" />
            </View>
          </Accordion>
        </List.AccordionGroup>
      </AccordionGroup>
    </ScrollView>
  );
};

export default RestaurantDetails;
