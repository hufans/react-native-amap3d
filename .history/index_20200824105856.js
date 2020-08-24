import React from "react";
import { AppRegistry, View } from "react-native";

import { MapView } from "./src";

const Mapx = () => <MapView style={{ flex: 1 }}></MapView>;

AppRegistry.registerComponent("RNAMap3D", () => Mapx);
