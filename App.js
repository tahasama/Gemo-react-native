import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <>
      <View style={styles.infos}>
        <View style={styles.upperInfos}>
          <Text style={styles.repoName}>repository name</Text>
          <Text style={styles.repoDesc}>repository description</Text>
        </View>
        <View style={styles.bottomInfos}>
          <Image
            source={{
              uri: "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png",
            }}
            style={styles.tinyLogo}
          />
          <Text style={styles.owner}>repository owner</Text>

          <View style={styles.stars}>
            <AntDesign
              name="star"
              size={16}
              color="black"
              style={styles.star}
            />
            <Text style={styles.nb}>100</Text>
          </View>
        </View>
      </View>
      <View style={styles.infos}>
        <View style={styles.upperInfos}>
          <Text style={styles.repoName}>repository name</Text>
          <Text style={styles.repoDesc}>
            repository description pository descriptionpository
            descriptionpository description
          </Text>
        </View>
        <View style={styles.bottomInfos}>
          <Image
            source={{
              uri: "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png",
            }}
            style={styles.tinyLogo}
          />
          <Text style={styles.owner}>repository owner</Text>

          <View style={styles.stars}>
            <AntDesign
              name="star"
              size={16}
              color="black"
              style={styles.star}
            />
            <Text style={styles.nb}>100</Text>
          </View>
        </View>
      </View>
      <View style={styles.infos}>
        <View style={styles.upperInfos}>
          <Text style={styles.repoName}>repository name</Text>
          <Text style={styles.repoDesc}>
            repository description pository descriptionpository
            descriptionpository descriptionpository descriptionpository
            descriptionpository descriptionpository description
          </Text>
        </View>
        <View style={styles.bottomInfos}>
          <Image
            source={{
              uri: "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png",
            }}
            style={styles.tinyLogo}
          />
          <Text style={styles.owner}>repository owner</Text>

          <View style={styles.stars}>
            <AntDesign
              name="star"
              size={16}
              color="black"
              style={styles.star}
            />
            <Text style={styles.nb}>100</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  settings: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  bottomInfos: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    flex: 1,
    paddingBottom: 20,
  },
  owner: {
    flex: 1,
    fontStyle: "italic",
    marginLeft: 10,
    marginTop: 6,
  },
  nb: { marginTop: 4 },
  star: { marginRight: 5, marginTop: 5 },
  stars: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 100,
  },
  upperInfos: {
    marginLeft: 20,
  },
  repoName: {
    fontSize: 24,
    marginBottom: 5,
  },
  repoDesc: {
    fontWeight: "300",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
  infos: { marginBottom: 30 },
  screen: {
    // paddingTop: Constants.statusBarHeight,
    paddingTop: Platform.OS === "android" ? 40 : 20,
  },

  tinyLogo: {
    width: 30,
    height: 30,
  },
});
