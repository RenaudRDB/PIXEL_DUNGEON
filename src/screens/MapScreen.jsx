import { Text, View, FlatList } from 'react-native';

export const MapScreen = () => {
  const tests = [
    ['Dragon', 'Alice', 'Renaud'],
    ['EldenRing', 'Violent', 'Force'],
  ];
  // const vides = [];
  const vides4 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  const vides5 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  const vides6 = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ];
  console.log('Petit donjon :', vides4);
  console.log('Moyen donjon :', vides5);
  console.log('Grand donjon :', vides6);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      {vides4.map((test) => {
        return (
          <FlatList
            data={test}
            renderItem={({item}) => {
              console.log('numéro :', item);
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
