import React from "react";
import { AppRegistry, View } from "react-native";

import { MapView } from "./src";

const Mapx = () => <MapView style={{ backgroundColor: "red", height: 100, width: 200 }}></MapView>;

AppRegistry.registerComponent("RNAMap3D", () => Mapx);
