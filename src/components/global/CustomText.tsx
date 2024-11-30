import { Colors } from "@unistyles/Constants";
import { Platform, StyleSheet, Text, TextStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { text } from "stream/consumers";

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7'
type PlatformType = 'ios' | 'android';

interface CustomTextProps {
    variant?: Variant;
    fontFamily?: "Okra-Bold" | "Okra-Black" | "Okra-Medium" | "Okra-Light" | "Okra-Regular";
    fontSize?: number;
    color?: string;
    children?: React.ReactNode;
    style?: TextStyle | TextStyle[];
    numberOfLines?: number;
    onLayout?: (event: any) => void;
}


const fontSizeMap: Record<Variant, Record<PlatformType, number>> = {
    h1: { android: 24, ios: 22 },
    h2: { android: 22, ios: 20 },
    h3: { android: 20, ios: 18 },
    h4: { android: 18, ios: 16 },
    h5: { android: 16, ios: 14 },
    h6: { android: 12, ios: 10 },
    h7: { android: 10, ios: 9 }
}

const CustomText: React.FC<CustomTextProps> = ({ variant, fontFamily = 'Okra-Regular', fontSize, color, children, style, numberOfLines, onLayout, ...props }) => {
    let computedFontSize: number = Platform.OS === 'android' ? RFValue(fontSize || 12) : fontSize || RFValue(12);

    if (variant && fontSizeMap[variant]) {
        const defaultSize = fontSizeMap[variant][Platform.OS as PlatformType];
        computedFontSize = RFValue(fontSize || defaultSize);
    }

    const fontFamilyStyle = {
        fontFamily,
    }
    return (
        <Text onLayout={onLayout} style={[styles.text, { color: color || Colors.text, fontSize: computedFontSize },
            fontFamilyStyle, style]}
            numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
            {...props}>{children}</Text>
    )
}


const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
    }
})