import {Platform} from 'react-native';
import {TransitionPresets} from '@react-navigation/stack';

export const modalNavigatorStyle = ({route}) => {
  return {
    headerStyle: {
      backgroundColor: 'orangered',
    },
    headerTintColor: 'white',
    headerBackTitleVisible: false,

    gestureEnabled: true,
    cardOverlayEnabled: true,
    ...TransitionPresets.ModalPresentationIOS,
  };
};

export const NAVIGATOR_STYLE = {
  headerStyle: {
    backgroundColor: 'orangered',
  },
  headerTitleStyle: {
    fontSize: 18,
  },
  headerTintColor: 'white',
  headerBackTitleVisible: false,
};

const APPBAR_HEIGHT = Platform.select({
  ios: 105,
});
export const CUSTOM_NAVIGATOR_STYLE = {
  headerTitleAlign: 'center',
  headerStyle: {
    height: APPBAR_HEIGHT,
    backgroundColor: '#013476',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomWidth: 1,
    borderBottomColor: 'orangered',
  },
};

export const DRAWER_NAVIGATOR_STYLE = {
  activeTintColor: '#fff',
  inactiveTintColor: 'orangered',
  activeBackgroundColor: 'transparent',
  inactiveBackgroundColor: 'transparent',
  itemStyle: {
    paddingVertical: 0,
    paddingHorizontal: 10,
    marginVertical: 0,
    marginHorizontal: 0,
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: 'orangered',
    borderRadius: 0,
    backgroundColor: 'orangered',
  },
  labelStyle: {
    fontSize: 16,
  },
};
