import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import {Button} from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window') 

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
image: {
    width
}
})

export default class extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper}
      autoplay
      >
        <View style={[styles.slide1, {backgroundColor: '#181818'}]}>
       <View  style={{padding: 20, backgroundColor: 'lightskyblue', borderColor: 'black', borderRadius: 50, }}>
          <View style={{padding: 20, backgroundColor: 'pink', borderColor: 'black', borderRadius: 50, }}>
            <Icons size={40} color='white'  name='handshake-o'/>   
          </View>
       </View>
           <Text style={{color: 'red'}} >Deals</Text>
           <Text style={{backgroundColor: 'gray', color: 'gray', marginBottom: 4, width: 100}} >Deals</Text>
           <Text style={{backgroundColor: 'gray', color: 'gray', marginBottom: 4,  width: 150}} >Deals</Text>
           <Text style={{backgroundColor: 'gray', color: 'gray', marginBottom: 4,  width: 100}} >Deals</Text>
           <Text style={{backgroundColor: 'gray', color: 'gray', marginBottom: 4,  width: 150}} >Deals</Text>
        </View>
        <View style={[styles.slide2,  {backgroundColor: 'lightskyblue'}]} >
        <View style={{padding: 20, backgroundColor: 'white', borderColor: 'black', borderRadius: 40, }}>
        <View style={{padding: 20,  backgroundColor: 'lightskyblue',  borderRadius: 40, flexDirection: 'row'}}>
           <Icons size={40} color='white'  name='bitcoin'/>   
           <Icons size={40} color='pink'  name='viacoin'/>   
         </View>
        </View>
         <Text style={{color: 'red'}} >Blockchain Wallet</Text>
           <Text style={{backgroundColor: '#181818', color: '#181818', marginBottom: 4, width: 100}} >Deals</Text>
           <Text style={{backgroundColor: '#181818', color: '#181818', marginBottom: 4,  width: 150}} >Deals</Text>
           <Text style={{backgroundColor: '#181818', color: '#181818', marginBottom: 4,  width: 100}} >Deals</Text>
           <Text style={{backgroundColor: '#181818', color: '#181818', marginBottom: 4,  width: 150}} >Deals</Text>
        </View>
        <View style={[styles.slide3, {backgroundColor: 'pink'}]}>
        <View style={{padding: 20, backgroundColor: '#181818', borderColor: 'black', borderRadius: 40, }}>
        <View style={{padding: 20, backgroundColor: 'lightskyblue', borderColor: 'black', borderRadius: 40,}}>
           <Icons size={40} color='white'  name='suitcase'/>   
         </View>
        </View>
         <Text style={{color: 'red'}} >Get Reward</Text>
           <Text style={{backgroundColor: 'black', color: 'black', marginBottom: 4, width: 100}} >Deals</Text>
           <Text style={{backgroundColor: 'black', color: 'black', marginBottom: 4,  width: 150}} >Deals</Text>
           <Text style={{backgroundColor: 'black', color: 'black', marginBottom: 4,  width: 100}} >Deals</Text>
           <Text style={{backgroundColor: 'black', color: 'black', marginBottom: 4,  width: 150}} >Deals</Text>
        </View>
        <View style={[styles.slide3,  {backgroundColor: 'white'}]}>
         <View style={{padding: 20, backgroundColor: '#181818', borderColor: 'black' }}>
         <View style={{padding: 20, backgroundColor: 'pink', borderColor: 'black' }}>
           <Icons size={60} color='green'  name='location-arrow'/>   
         </View>
         </View>
         <Text style={{color: 'red'}} >Nearby Business</Text>
           <Text style={{backgroundColor: 'gray', color: 'gray', marginBottom: 4, width: 100}} >Deals</Text>
           <Text style={{backgroundColor: 'gray', color: 'gray', marginBottom: 4,  width: 150}} >Deals</Text>
           <Text style={{backgroundColor: 'gray', color: 'gray', marginBottom: 4,  width: 100}} >Deals</Text>
           <Text style={{backgroundColor: 'gray', color: 'gray', marginBottom: 4,  width: 150}} >Deals</Text>
        <Button transparent bordered onPress={ () => Actions.home()}  style={{marginLeft: 20, width: 100, borderColor: 'black', padding: 10, marginTop: 40}}>
            <Text>Next</Text>
            <Icons size={20} name='arrow-right' />
          </Button>
        </View>
      </Swiper>
    );
  }
}