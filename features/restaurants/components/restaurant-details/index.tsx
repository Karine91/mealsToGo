import React from "react";
import { View, ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";

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
            <Divider />
            <List.Item title="Classic Breakfast" />
          </Accordion>
          <Divider />

          <Accordion
            left={(props) => <AccordionIcon icon="hamburger" />}
            title="Lunch"
            id={2}
          >
            <View style={{ backgroundColor: "white" }}>
              <List.Item title="Burger w/Fries" />
              <Divider />
              <List.Item title="Steak Sandwich" />
              <Divider />
              <List.Item title="Mushroom Soup" />
            </View>
          </Accordion>
          <Divider />
          <Accordion
            left={(props) => <AccordionIcon icon="food-turkey" />}
            title="Dinner"
            id={3}
          >
            <View style={{ backgroundColor: "white" }}>
              <List.Item title="Spaghetti Bolognese" />
              <Divider />
              <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
              <Divider />
              <List.Item title="Steak Frites" />
            </View>
          </Accordion>
          <Divider />
          <Accordion
            left={(props) => <AccordionIcon icon="glass-mug" />}
            title="Drinks"
            id={4}
          >
            <View style={{ backgroundColor: "white" }}>
              <List.Item title="Coffee" />
              <Divider />
              <List.Item title="Tea" />
              <Divider />
              <List.Item title="Modelo" />
              <Divider />
              <List.Item title="Coke" />
              <Divider />
              <List.Item title="Fanta" />
            </View>
          </Accordion>
        </List.AccordionGroup>
      </AccordionGroup>
    </ScrollView>
  );
};

export default RestaurantDetails;
