import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Card } from "react-native-paper";

const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    fontFamily: "Roboto",
    textAlign: "center",
  },
});

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80",
        "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1798&q=80",
        "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
      ],
      imageIndex: 0,
    };
  }
  componentDidMount() {
    let timer = setInterval(this.tick, 3000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick = () => {
    this.setState({
      imageIndex: (this.state.imageIndex + 1) % 3,
    });
  };

  render() {
    return (
      <View
        style={{
          justifyContent: "center",
        }}
      >
        <Card style={{ backgroundColor: "transparent" }}>
          <Card.Cover
            source={{
              uri: this.state.images[this.state.imageIndex],
            }}
          />
          <Card.Actions>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10",
              }}
            >
              <Button
                icon={this.state.imageIndex === 0 ? "circle" : "circle-outline"}
                mode="text"
                onPress={() =>
                  this.setState({
                    imageIndex: 0,
                  })
                }
                color={"white"}
              ></Button>
              <Button
                icon={this.state.imageIndex === 1 ? "circle" : "circle-outline"}
                mode="text"
                onPress={() =>
                  this.setState({
                    imageIndex: 1,
                  })
                }
                color={"white"}
              ></Button>
              <Button
                icon={this.state.imageIndex === 2 ? "circle" : "circle-outline"}
                mode="text"
                onPress={() =>
                  this.setState({
                    imageIndex: 2,
                  })
                }
                color={"white"}
              ></Button>
            </View>
          </Card.Actions>
        </Card>
        {/* <Text style={styles.subtitle}>Order now</Text> */}
      </View>
    );
  }
}
