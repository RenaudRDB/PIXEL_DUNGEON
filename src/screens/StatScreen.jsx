import { Text, View, Button, StyleSheet } from 'react-native';

export const  StatScreen = () => {
  return (
    <>
      <Text style={styles.title}>Adventurer lvl {}</Text>
        <View style={styles.container}>
          <Text>Puissance : lvl {}</Text>
          <Button title="+"></Button>
        </View>
        <View style={styles.container}>
          <Text>Résistance : lvl {}</Text>
          <Button title="+"></Button>
        </View>
        <View style={styles.container}>
          <Text>Taux critique : lvl {}</Text>
          <Button title="+"></Button>
          </View>
        <View style={styles.container}>
          <Text>Perception : lvl {}</Text>
          <Button title="+" style={styles.right}></Button>
      </View>
    </>
    );
};
  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  }

});