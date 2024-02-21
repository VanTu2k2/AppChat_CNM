import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/Ionicons";

import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

var url = "https://65445bd25a0b4b04436c4997.mockapi.io/Loginapp";
console.log(url);
const Login = () => {
  const navigation = useNavigation();
  const [sdt, setSdt] = useState();
  const [pass, setPass] = useState();
  const [state, setState] = useState([]);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleForgotPassword = () => {
    // Xử lý khi người dùng nhấn vào "Quên mật khẩu"
    console.log("Quên mật khẩu");
    navigation.navigate('Quenmatkhau');
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("====================================");
        console.log(data);
        console.log("====================================");
        setState(data);
      });
  }, []);

  const handleCheck = () => {
    const user = state.find((user) => user.sdt == sdt && user.pass == pass);
    if (user) {
      navigation.navigate("Home");
      //navigation.navigate("Home", user);
    } else {
      showToast();
      setPass("");
    }
  };
  const showToast = (message) => {
    Toast.show({
      type: "error",
      position: "top",
      text1: message || "Mật khẩu hoặc số điện thoại không đúng!",
      text2: message || "Có thể bạn chưa đăng ký tài khoản!",
      visibilityTime: 4000,
      autoHide: true,
      fontFamily: "Arial",
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.toastContainer}>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>

      <View style={styles.view1}>
            <Pressable
            onPress={() => {
                navigation.goBack();
            }}>
              <View style={styles.iconback}>
                  <Icon name="chevron-back" size={25} color="white" />
              </View>
            </Pressable>
          <Text style={styles.login}>Đăng nhập</Text>
      </View>

      <View style={styles.view2}>
            <Text style={styles.textNote}>Vui lòng nhập số điện thoại và mật khẩu đăng nhập</Text>
      </View>

      <View style={styles.view3}>
        <TextInput
          style={styles.textInsdt}
          placeholder= "Số điện thoại"
          value={sdt}
          onChangeText={(text) => {
            setSdt(text);
          }}>
        </TextInput>

        <View style={styles.group1}>
          <TextInput
            style={[
              styles.textInPass,
              isVisible && {
                secureTextEntry: true,
              },
            ]}
            placeholder="Mật khẩu"
            value={pass}
            onChangeText={(text) => setPass(text)}
            secureTextEntry={secureTextEntry}
          />
          <TouchableOpacity onPress={handlePasswordVisibility} style={styles.visibilityIconContainer}>
            <Text style={styles.visibilityIcon}>{secureTextEntry ? "Hiện" : "Ẩn"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view4}>
          <Pressable style={styles.PreLogin} onPress={() => handleCheck()}>
            <Text style={styles.textLogin}>Đăng nhập</Text>
          </Pressable>
        </View>
        
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Đảm bảo các phần tử con có thể sử dụng 'absolute' mà không bị hạn chế bởi parent
  },
  toastContainer: {
    position: 'absolute', // Đặt vị trí tuyệt đối để thông báo hiển thị trên tất cả các phần tử khác
    top: 0, // Hiển thị ở đỉnh của container
    left: 0, // Hiển thị bên trái của container
    right: 0, // Hiển thị bên phải của container
    zIndex: 9999, // Đảm bảo thông báo hiển thị trên tất cả các phần tử khác
  },
  view1: {
    flexDirection: "row",
    backgroundColor: "#66E86B",
  },
  view2:{
    backgroundColor: "#D9D9D9",
  },
  textNote:{
    fontSize: 16,
  },
  view3: {
    marginTop: 20,
  },
  login: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: 'white',
  },
  iconback: {
    marginTop: 15,
    height: 20,
    width: 20,
  },
  textInsdt: {
    height: 50,
    width: 380,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 20,
    marginLeft: 10,
  },
  group1: {
    flexDirection: "row",
  },
  textInPass: {
    flex: 1,
    width: 380,
    height: 50,
    borderColor: "gray",
    borderBottomWidth: 1,
    fontSize: 20,
    marginLeft: 10,
  },
  visibilityIconContainer: {
    position: 'absolute',
    right: 10, // Điều chỉnh khoảng cách nút với ô mật khẩu
    height: '100%',
    justifyContent: 'center',
  },
  visibilityIcon:{
    fontSize: 16,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  forgotPasswordText: {
    color: 'blue',
  },
  view4: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogin: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffff",
    textAlign: "center",
  },
  PreLogin: {
    margin: 40,
    backgroundColor: "#66E86B",
    height: 50,
    width: 230,
    borderRadius: 20,
    padding: 10,
  },
});

export default Login;
