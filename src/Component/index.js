import React, { Component } from 'react';
import { Container, Header, Left, Icon, Text, Button, Body, Right, View, Title, Subtitle } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';



export default class HeaderTitle extends Component {
  render() {
    return (
      <View  style={{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}} >
         <View style={{flexDirection: 'row'}}>
           <Text style={{color: 'white', fontSize: 25, fontWeight: '300'}} >Deal</Text>
           <Icons size={35} name='linkedin-square'/>
         </View>
          <View style={{padding: 10,  backgroundColor: '#181818', borderRadius: 10}} >
          <Text style={{color: 'gray', fontSize: 10}} >Next Generation Customer loyalty</Text>
          <Text style={{color: 'gray', fontSize: 10}}>and engagement with Blockchain...</Text>
          </View>
        <Icons size={30} color='white'  name='handshake-o'/>
        <Button transparent bordered onPress={ () => Actions.first()}  style={{marginLeft: 60, width: 150, borderColor: 'black', padding: 10, marginTop: 40}}>
           <Text style={{color: 'white'}} >Dealin</Text>
          </Button>
    </View>
    );
  }
}