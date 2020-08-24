import React from "react";
import { AppRegistry, View } from "react-native";

import MapView from "./src";

const Mapx = () => <View style={{ backgroundColor: "red", height: 100, width: 100 }}></View>;

AppRegistry.registerComponent("RNAMap3D", () => Mapx);
