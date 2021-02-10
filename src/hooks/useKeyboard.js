import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export default () => {
  const [keyboardIsShown, setKeyboardShown] = useState(false);
  const [keyboardWillBeShown, setKeyboardWillBeShown] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  function onKeyboardWillShow() {
    setKeyboardWillBeShown(true);
  }

  function onKeyboardWillHide() {
    setKeyboardWillBeShown(false);
  }

  function onKeyboardDidShow(event) {
    setKeyboardShown(true);
    setKeyboardHeight(event.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setKeyboardShown(false);
    setKeyboardHeight(0);
  }

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', onKeyboardWillShow);
    Keyboard.addListener('keyboardWillHide', onKeyboardWillHide);
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return () => {
      Keyboard.removeListener('keyboardWillShow', onKeyboardWillShow);
      Keyboard.removeListener('keyboardWillHide', onKeyboardWillHide);
      Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide);
    };
  }, []);

  return {keyboardHeight, keyboardWillBeShown, keyboardIsShown};
};
