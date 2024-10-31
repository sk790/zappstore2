import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// Example banner data - replace with your actual data
const banners = [
  {
    id: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDY0Pr7sbl6jbQbO5nAzvMqk71njPz8bB0w&s?height=200&width=400",
    title: "Special Offer",
  },
  {
    id: "2",
    image:
      "https://miro.medium.com/v2/resize:fit:4320/1*JktzC9GrA_l4yz0cCy8a5Q.jpeg?height=200&width=400",
    title: "New Services",
  },
  {
    id: "3",
    image:
      "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg?height=200&width=400",
    title: "Limited Time",
  },
];

export default function SliderBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handlePressLeft = () => {
    if (activeIndex > 0) {
      scrollViewRef.current?.scrollTo({
        x: (activeIndex - 1) * width,
        animated: true,
      });
      setActiveIndex(activeIndex - 1);
    }
  };

  const handlePressRight = () => {
    if (activeIndex < banners.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: (activeIndex + 1) * width,
        animated: true,
      });
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleMomentumScrollEnd = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / width);
    setActiveIndex(index);
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        margin: 10,
        // padding: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          {/* Left Navigation Button */}
          <TouchableOpacity
            style={[styles.navButton, styles.leftButton]}
            onPress={handlePressLeft}
            disabled={activeIndex === 0}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={activeIndex === 0 ? "#ccc" : "#fff"}
            />
          </TouchableOpacity>

          {/* Slider Content */}
          <Animated.ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            onMomentumScrollEnd={handleMomentumScrollEnd}
            scrollEventThrottle={16}
            style={styles.scrollView}
          >
            {banners.map((banner, index) => (
              <View key={banner.id} style={styles.slide}>
                <Image
                  source={{ uri: banner.image }}
                  style={styles.image}
                  resizeMode="cover"
                />
                <View style={styles.overlay}>
                  <Text style={styles.title}>{banner.title}</Text>
                </View>
              </View>
            ))}
          </Animated.ScrollView>

          {/* Right Navigation Button */}
          <TouchableOpacity
            style={[styles.navButton, styles.rightButton]}
            onPress={handlePressRight}
            disabled={activeIndex === banners.length - 1}
          >
            <Ionicons
              name="chevron-forward"
              size={24}
              color={activeIndex === banners.length - 1 ? "#ccc" : "#fff"}
            />
          </TouchableOpacity>

          {/* Bottom Dots */}
          <View style={styles.pagination}>
            {banners.map((_, index) => {
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ];

              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [8, 16, 8],
                extrapolate: "clamp",
              });

              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp",
              });

              return (
                <Animated.View
                  key={index}
                  style={[
                    styles.dot,
                    {
                      width: dotWidth,
                      opacity,
                    },
                  ]}
                />
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 150,
    position: "relative",

  },
  scrollView: {
    flex: 1,

  },
  slide: {
    width,
    height: 150,
    position: "relative",

  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -20 }],
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  leftButton: {
    left: 10,
  },
  rightButton: {
    right: 10,
  },
  pagination: {
    position: "absolute",
    bottom: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginHorizontal: 4,
  },
});
