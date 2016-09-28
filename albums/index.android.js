//import a library to help create a Component
import React from 'react';
import {Text, AppRegistry} from 'react-native';

//create a Component
//A component is something that produces some amount of text or content that we can render on a mobile device
//A JS function that returns some amount of JSX
const App = () => (
    <Text>Some Text</Text>
);


//Run the component- take the JSX that was returned and decides what content should appear on the screen
//render it to the device

AppRegistry.registerComponent('albums', () => App);
