import React from 'react'
import { VerticalContainer, NavigationBar } from "../../components/common/Interface";

const chat = () => {
  return (
    <VerticalContainer>
      <NavigationBar currentFeature={"chat"} style={{ marginTop: "auto" }} />
    </VerticalContainer>
  )
};

export default chat;