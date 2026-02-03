import { COLORS } from '@/constants/colors';
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

type ScreenWrapperProps = {
    children: React.ReactNode;
    style?: any;
};

export default function ScreenWrapper({ children, style }: ScreenWrapperProps) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
            <View style={[styles.content, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: Platform.OS === 'android' ? 32 : 0,
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
});
