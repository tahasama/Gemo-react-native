import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Item({ item }) {
  return (
    <View style={styles.infos}>
      <View style={styles.upperInfos}>
        <Text style={styles.repoName}>{item.name}</Text>
        <Text style={styles.repoDesc}>{item.description}</Text>
      </View>
      <View style={styles.bottomInfos}>
        <Image
          style={styles.avatar}
          source={{ uri: item.owner.avatar_url }}
          style={styles.avatar}
        />
        <Text style={styles.owner}>{item.owner.login}</Text>

        <View style={styles.ranking}>
          <AntDesign name="star" size={16} color="black" style={styles.star} />
          <Text style={styles.nb}>{item.stargazers_count}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  element: {
    flex: 1,
    marginTop: 10,
  },
  message: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  bottomInfos: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
  },
  owner: {
    flex: 1,
    fontStyle: "italic",
    marginLeft: 10,
    marginTop: 6,
  },
  nb: {
    marginTop: 4,
  },
  star: {
    marginRight: 5,
    marginTop: 5,
  },

  ranking: {
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
  infos: {
    marginBottom: 30,
  },

  avatar: {
    width: 30,
    height: 30,
  },
});
