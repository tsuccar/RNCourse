
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <ImageBackground source={{
          uri:
            'https://cdn.pixabay.com/photo/2017/01/10/14/48/umbrella-1969261_960_720.png'}} style={styles.image} opacity={0.2}  tintColor="red"    /> */}

      <ImageBackground source={require('./assets/images/background.png')} style={styles.image} opacity={0.2}  tintColor="red"    />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image:{
    flex:1,
    tintColor:'red'
    // width: '100%', 
    // height: '100%'
    // justifyContent: 'center'
  }
});
