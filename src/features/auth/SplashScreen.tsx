import { splashStyles } from "@unistyles/authStyles";
import React, { FC } from "react";
import { View, Text, StatusBar, Platform, Image } from "react-native";
import { useStyles } from "react-native-unistyles";
import Animated, { FadeInDown } from "react-native-reanimated";

const SplashScreen: FC = () => {

    const { styles } = useStyles(splashStyles);


    return (
        <View style={styles.container}>
            <StatusBar hidden={Platform.OS !== 'android'} />
            <Image source={require('@assets/images/logo_t.png')} style={styles.logoImage} />


            <Animated.View style={styles.animatedContainer} entering={FadeInDown.duration(400).duration(800)}>
                <Image source={require('@assets/images/tree.png')} style={styles.animatedContainer} />
            </Animated.View>
        </View>
    )
}

export default SplashScreen