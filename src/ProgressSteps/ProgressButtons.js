import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 90 }}>
    {/* The previous button rendering is removed */}
    <View>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;
