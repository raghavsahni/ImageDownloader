

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';



import ImageDownload from './components/imageDownload';




export default function App() {
  return (
    <SafeAreaView >
      <StatusBar  />
      <ScrollView>
        <View>
          <ImageDownload/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

};

  

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// export default App;
