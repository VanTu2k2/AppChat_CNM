import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
} from "react-native";

const DanhBa1 = () => {
  const navigation = useNavigation();
  const [selectedMenuItem, setSelectedMenuItem] = useState("Friends");

  useEffect(() => {
    // Set mặc định là tab "Bạn bè" được chọn khi component được render lần đầu
    setSelectedMenuItem("Friends");
  }, []);

  const handleMenuChange = (menuItem) => {
    if (selectedMenuItem !== menuItem) {
      setSelectedMenuItem(menuItem); // Cập nhật trạng thái trước khi chuyển trang
      navigation.navigate(menuItem);
    }
  };

  const MenuItem = ({ icon, text, routeName }) => {
    const isSelected = selectedMenuItem === routeName;
    const handlePress = () => {
      navigation.navigate(routeName); // Điều hướng đến trang tương ứng
      // Sử dụng hàm callback của navigate để cập nhật trạng thái selectedMenuItem sau khi điều hướng đã hoàn tất
      navigation.addListener("transitionEnd", () => {
        setSelectedMenuItem(routeName);
      });
    };

    return (
      <Pressable
        style={styles.menuItem}
        onPress={handlePress}
      >
        <Icon
          name={icon}
          size={30}
          color={isSelected || routeName === "DanhBa1" ? "blue" : "#66E86B"} // Giữ màu xanh cho tab "Danh bạ"
        />
        {/* Giữ màu xanh cho tab "Danh bạ" (DanhBa1) và tab được chọn */}
        <Text style={{ color: isSelected || routeName === "DanhBa1" ? "blue" : "#66E86B" }}>{text}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Icon name="search" size={25} color="white" style={styles.icon} />
          <TextInput style={styles.textTK} placeholder="Tìm kiếm"></TextInput>
        </View>
        <View style={styles.iconContainer2}>
          <Icon name="person-add-outline" size={25} color="white" style={styles.icon} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.tabBar}>
          <Pressable
            style={[styles.tabItem, selectedMenuItem === 'Friends' && styles.selectedTab]}
            onPress={() => handleMenuChange('Friends')}>
            <Text style={styles.tabText}>Bạn bè</Text>
          </Pressable>
          <Pressable
            style={[styles.tabItem, selectedMenuItem === 'Groups' && styles.selectedTab]}
            onPress={() => handleMenuChange('Groups')}>
            <Text style={styles.tabText}>Nhóm</Text>
          </Pressable>
          <Pressable
            style={[styles.tabItem, selectedMenuItem === 'Games' && styles.selectedTab]}
            onPress={() => handleMenuChange('Games')}>
            <Text style={styles.tabText}>Game</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.menuContainer}>
          <MenuItem
            icon="chatbubbles-outline"
            text="Tin nhắn"
            routeName="TinNhan" // Thay bằng route name của màn hình Tin nhắn
          />
          <MenuItem
            icon="person-outline"
            text="Danh bạ"
            routeName="DanhBa1"
          />
          <MenuItem
            icon="apps"
            text="Khám phá"
            routeName="KhamPha"
          />
          <MenuItem
            icon="book-outline"
            text="Nhật ký"
            routeName="NhatKy"
          />
          <MenuItem
            icon="person-circle-outline"
            text="Cá nhân"
            routeName="CaNhan"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#66E86B",
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  iconContainer: {
    marginLeft: 5,
    flexDirection: 'row',
  },
  textTK: {
    marginLeft: 5,
    fontSize: 18,
    color: 'white',
    width: 250,
  },
  iconContainer2: {
    marginRight: 15,
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  selectedTab: {
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  footer: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  menuItem: {
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
});

export default DanhBa1;
