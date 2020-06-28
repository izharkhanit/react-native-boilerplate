import React from 'react';
import {Provider} from 'react-redux';
import { render, cleanup, fireEvent } from 'react-native-testing-library';
import configureStore from 'redux-mock-store';
import HomeScreen from './../screens/HomeScreen/HomeScreen';




jest.mock('react-native-gesture-handler', () => ({
  UIManager: {
    RCTView: () => {},
  },
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {},
  },
}))

jest.mock('react-native-reanimated', () => {

  const {View} = require('react-native');
  return {
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    interpolate: jest.fn(),
    View,
    Extrapolate: { CLAMP: jest.fn() },
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In',
    },
    Easing: {
      in: jest.fn(),
      out: jest.fn(),
      inOut: jest.fn(),
    },
  };
});

jest.mock('react-native-localize', () => ({
  getLocales: () => [
    { countryCode: "GB", languageTag: "en-GB", languageCode: "en", isRTL: false },
    { countryCode: "US", languageTag: "en-US", languageCode: "en", isRTL: false },
    { countryCode: "FR", languageTag: "fr-FR", languageCode: "fr", isRTL: false },
  ],

  findBestAvailableLanguage: () => ({

  }),

  getNumberFormatSettings: () => ({
    decimalSeparator: ".",
    groupingSeparator: ",",
  }),

  getCalendar: () => "gregorian", // or "japanese", "buddhist"
  getCountry: () => "US", // the country code you want
  getCurrencies: () => ["USD", "EUR"], // can be empty array
  getTemperatureUnit: () => "celsius", // or "fahrenheit"
  getTimeZone: () => "Europe/Paris", // the timezone you want
  uses24HourClock: () => true,
  usesMetricSystem: () => true,

  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

afterEach(cleanup);


describe('<HomeScreen />', () => {
  const mockStore = configureStore([]);

  it('should display current product list', () => {
    const initialState = {
      status: Status.SUCCESS,
      items:[],
      errorMessage: 'error occured',
     };
     const store = mockStore(initialState);
     const rendered = render(
      <Provider store={store}><HomeScreen /></Provider>
    );
    const textComponent = rendered.getByTestId('text');
    
    expect(textComponent.props.children).toContain('Dark Mode');
  });

});



