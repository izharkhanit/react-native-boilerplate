import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from 'react-native-testing-library';
import RootNavigator from './../navigation/RootNavigator';

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
  
  
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Testing react navigation from Product list to Selected Product', () => {
  test('page contains the header and 3 listitems', () => {
    const component = (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    );
    const { getByText, getAllByText } = render(component);

    const header = getByText('List of numbers from 1 to 20');
    const items = getAllByText(/Item number/);

    expect(header).toBeTruthy();
    expect(items.length).toBe(3);
  });

  test('clicking on one product item takes you to the product details screen', async () => {
    const component = (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    );

    const { getByText } = render(component);
    const toClick = getByText('Product Item number 2');

    fireEvent(toClick, 'press');
    const newHeader = getByText('Showing product details for 2');
    const newBody = getByText('the number you have chosen is 2');

    expect(newHeader).toBeTruthy();
    expect(newBody).toBeTruthy();
  });
});