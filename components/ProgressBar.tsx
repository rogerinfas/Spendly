import { COLORS } from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    label: string;
    amount: number;
    total: number;
    color: string;
};

export default function ProgressBar({ label, amount, total, color }: Props) {
    const percentage = Math.min(100, Math.max(0, (amount / total) * 100));

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{percentage.toFixed(0)}% (${amount})</Text>
            </View>
            <View style={styles.track}>
                <View
                    style={[
                        styles.fill,
                        { width: `${percentage}%`, backgroundColor: color }
                    ]}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        color: COLORS.text,
        fontSize: 14,
        fontWeight: '500',
    },
    value: {
        color: COLORS.muted,
        fontSize: 14,
    },
    track: {
        height: 12,
        backgroundColor: COLORS.slate800,
        borderRadius: 999,
        overflow: 'hidden',
    },
    fill: {
        height: '100%',
        borderRadius: 999,
    },
});
