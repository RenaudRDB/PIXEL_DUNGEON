import { Text, View, FlatList } from 'react-native';

export const MapScreen = () => {
  const tests = [
    ['Dragon', 'Alice', 'Renaud'],
    ['EldenRing', 'Violent', 'Force'],
  ];

  // const vides = [[4]];
  // const vides = [];
  // const vides = [4[4]];
  // const vides = [4][4];
  const vides = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  console.log('ceci est un tableau', vides[0]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      {tests.map((test) => {
        return (
          <FlatList
            data={test}
            renderItem={({item}) => {
              console.log('qqchose', item);
              return <Text>{item}</Text>;
            }}
          />
        );
      })}
      {/* {vides.map((vide)=> {
        return (
          <FlatList
            data={vide}
            renderItem={(vide) => {
              console.log('quoi', vide);
              return <Text>{vide.item}</Text>
            }}
          />
        )
      })} */}
    </View>
  );
};
