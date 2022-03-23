import { Text, View } from 'react-native';

export const ActionScreen = () => {
  return (
        <>
            <View style={{
                flex:2,
                backgroundColor:'grey',
                marginTop:40,
                marginLeft:40,
                marginRight: 40,
                marginBottom: 100,
                border: 10,
                borderColor:'darkgrey'
            }}>
            </View>
            <View style={{flex:1,
            backgroundColor:'lightgreen'}}>
                <View style={{
                    flexDirection: "column",
                }}>
                    <Text style={{textAlign:'center'}}>Player information</Text>
                    <Text>Vie: 100</Text>
                    <Text>Puissance: 1</Text>
                    <Text>Résistance: 1</Text>
                    <Text>Lvl: 1</Text>
                </View>
            </View>
        </>
  );
};