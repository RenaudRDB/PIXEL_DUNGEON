import {View,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet}
  from "react-native";

  export const Layout = ({children}) => {
  
    if (Platform.OS === 'android') {
      return <View>
        <StatusBar barStyle="default" />
        {children}
        </View>
    }else{
      return <SafeAreaView>
        <StatusBar barStyle="default" />
        {children}
        </SafeAreaView>
    }
  };