import { Text, View } from 'react-native';



export const MapScreen = () => {

  const test = [
    ["Dragon", "Alice", "Renaud"],
    ["EldenRing", "Violent", "Force"]
  ]

  return (
    <View style={{ 
        flex: 1,
        backgroundColor:'black' }}>
          {test.map((items, index) =>{
            return (
              <ol>
                {items.map((subItems, sIndex)=> {
                  return <li>{subItems}</li>;
                })}
              </ol>
            );
          })}
    </View>
  );
}