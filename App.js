import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import { Navigation } from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
