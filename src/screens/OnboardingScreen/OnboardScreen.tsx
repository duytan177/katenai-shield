import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };

const slides = [
  {
    id: "1",
    image: require("../../assets/images/review1.jpg"),
    title: "Always Here for You",
    subtitle: "We’re ready to listen and help whenever you need.",
  },
  {
    id: "2",
    image: require("../../assets/images/review2.jpg"),
    title: "Share with Everyone",
    subtitle: "Join others in building a safer, more supportive community.",
  },
  {
    id: "3",
    image: require("../../assets/images/review3.jpg"),
    title: "Strengthen Your Mind",
    subtitle:
      "Empower yourself to face adversity and navigate tough situations with courage.",
  },
];

const Slide = ({ item }) => (
  <ImageBackground source={item.image} style={styles.image}>
    <View style={styles.overlay} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  </ImageBackground>
);

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex < slides.length) {
      ref.current.scrollToOffset({ offset: nextSlideIndex * width });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    ref.current.scrollToOffset({ offset: (slides.length - 1) * width });
    setCurrentSlideIndex(slides.length - 1);
  };

  const Footer = () => (
    <View style={styles.footerContainer}>
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {currentSlideIndex === slides.length - 1 ? (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <LinearGradient
              colors={["#6D5FB2", "#7E60BF"]} 
              style={styles.gradient}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "white" }}
              >
                GET STARTED
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity style={styles.skipButton} onPress={skip}>
              <Text style={styles.skipButtonText}>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToNextSlide} style={styles.nextButton}>
              <Text style={styles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View></View>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        renderItem={({ item }) => <Slide item={item} />}
        keyExtractor={(item) => item.id}
        snapToInterval={width}
        decelerationRate="fast"
        bounces={false}
      />
      <View style={styles.welcome}>
        <Text
          style={{
            color: "white",
            marginBottom: 10,
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 40,
            letterSpacing: 2,
            fontWeight: "600",
            marginBottom: -10,
            textShadowColor: "rgba(0, 0, 0, 0.5)", // Màu sắc của bóng đổ
            textShadowOffset: { width: 0, height: 2 }, // Độ lệch bóng
            textShadowRadius: 5, // Độ mờ của bóng
          }}
        >
          Katenai
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 40,
            letterSpacing: 2,
            fontWeight: "600",
            textShadowColor: "rgba(0, 0, 0, 0.5)", // Màu sắc của bóng đổ
            textShadowOffset: { width: 0, height: 2 }, // Độ lệch bóng
            textShadowRadius: 5, // Độ mờ của bóng
          }}
        >
          Shield
        </Text>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  image: {
    width,
    height,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    opacity: 0.5,
  },
  textContainer: {
    position: "absolute",
    bottom: 200,
    width,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  footerContainer: {
    position: "absolute",
    bottom: 50,
    width,
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  activeIndicator: {
    backgroundColor: COLORS.white,
    width: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skipButton: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    borderColor: COLORS.white,
    borderWidth: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  skipButtonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: COLORS.white,
  },
  nextButton: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: COLORS.primary,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  gradient: {
    flex: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  welcome: {
    position: "absolute",
    top: 100,
    width: "100%",
    paddingHorizontal: 50,
  },
});

export default OnboardingScreen;
