import React from 'react';
import { VerticalContainer, NavigationBar } from "../../components/common/Interface";

const Map = () => {
  return (
    <VerticalContainer>
      <NavigationBar currentFeature={"map"} style={{marginTop: "auto"}}/>
    </VerticalContainer>
  );
};

export default Map;
