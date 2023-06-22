import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FCF7FF",
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    height: 40,
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  btnLogin: {
    borderWidth: 2,
    borderColor: 'black',
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'black'
  },
  viewLinks: {
    marginTop: 10,
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
  }
});

export default styles;