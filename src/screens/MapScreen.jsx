import { Text, View, FlatList } from 'react-native';

export const MapScreen = () => {
  const tests = [
    ['Dragon', 'Alice', 'Renaud'],
    ['EldenRing', 'Violent', 'Force'],
  ];

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
    </View>
  );
};
