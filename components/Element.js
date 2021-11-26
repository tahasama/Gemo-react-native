import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import axios from "axios";

export const Element = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setmessage] = useState(false);

  // get data from API and update rpository array
  // const getUsers = async () => {
  //   const res = await axios
  //     .get(
  //       `https://api.github.com/search/repositories?q=created:2017-10-22&sort=stars&order=desc&page=${page}`
  //     )
  //     .then((res) => setRepos([...repos, ...res.data.items]))
  //     .catch((err) => setmessage(true));

  //   setLoading(false);
  // };

  const getUsers = async () => {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`
    );
    const data = await res.data;
    let arrRepos = [...repos, ...data.items];
    let uniq = new Set(arrRepos.map((objRepo) => JSON.stringify(objRepo)));
    arrRepos = Array.from(uniq).map((objRepo) => JSON.parse(objRepo));

    setRepos(arrRepos);
    setLoading(false);
  };

  // element infos
  const renderItem = ({ item }) => (
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

  // Loader
  const renderLoader = () => {
    return loading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  // Fires once scroll reaches the end of page, with onEndReached, and then go to next page
  const loadMoreItem = () => {
    setPage(page + 1);
    setLoading(true);
  };

  // Fires first page of API and then at page updating
  useEffect(() => {
    getUsers();
  }, [page]);

  return (
    <View style={styles.element}>
      <FlatList
        data={repos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.5}
      />
      {message && (
        <View style={styles.message}>
          <Text>...you have reached the limit, Thank for visiting </Text>
        </View>
      )}
    </View>
  );
};

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
