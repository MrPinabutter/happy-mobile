import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout, Marker } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';


import mapMarker from './src/images/map-marker.png';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold, 
    Nunito_700Bold, 
    Nunito_800ExtraBold
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude:-5.0713033,
          longitude:-42.7934535,
          latitudeDelta:0.07,
          longitudeDelta:0.07,
        }} 
      >
        <Marker 
          icon={mapMarker}
          coordinate={{
            latitude:-5.0713033,
            longitude:-42.7934535,
          }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8, 
          }}
        >
          <Callout tooltip onPress={() => {}}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das criança cabeçuda</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Tantas cria encontrada</Text>

        <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}} >
          <Feather name="plus" color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    height: 46,
    width: 160,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },

  footer: {
    position: 'absolute',
    right:24,
    left:24,
    bottom:32,
    
    backgroundColor: '#fff',
    borderRadius: 20,
    height:56,
    paddingLeft:24,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',

    elevation: 3,
  },
  
  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold',
  },

  createOrphanageButton: {
    height: 56,
    width:56,
    backgroundColor:'#15c3d6',
    borderRadius:20,

    alignItems:'center',
    justifyContent: 'center',
  }
});
