import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Platform,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";





export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.upperContainer}>
          <Image
            source={require("../assets/appIcon.png")}
            style={styles.appIcon}
          />
          <Text style={styles.appName}>Look Me....</Text>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.contentText}>
                Look Me is the best photo filter app for pictures and selfies. There are a wide range of filters available at your choice. SO choose the best filter for you.
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/hat-pic1.png")}
                style={styles.image}
              />
              <Image
                source={require("../assets/crown-pic1.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/flower-pic2.png")}
                style={styles.image}
              />
              <Image
                source={require("../assets/other-pic1.png")}
                style={styles.image}
              />
            </View>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Main")}
          >
            <Text style={styles.buttonText}>Try Now!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}