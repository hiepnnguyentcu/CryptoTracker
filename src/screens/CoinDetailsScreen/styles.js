import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },

  tickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  tickerTitle: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 17,
  },

  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },

  nameContainer: {
    color: "white",
    fontSize: 15,
  },

  currentPriceContainer: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  priceChange: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  priceChangeContainer: {
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
  },
  priceContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    color: 'white',
    width: 130,
    height: 40,
    margin: 12,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 16,
  },

  symbolStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
});

export default styles;
