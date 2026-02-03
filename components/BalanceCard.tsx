import { COLORS } from '@/constants/colors';
import { ArrowDownRight, ArrowUpRight, TrendingUp } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function BalanceCard() {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.label}>Saldo Total</Text>
                    <Text style={styles.amount}>$4,250.00</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TrendingUp size={24} color="white" />
                </View>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <View style={[styles.statIcon, { backgroundColor: 'rgba(16, 185, 129, 0.2)' }]}>
                        <ArrowUpRight size={16} color="#4ade80" />
                    </View>
                    <View>
                        <Text style={styles.statLabel}>Ingresos</Text>
                        <Text style={styles.statValue}>$5,200</Text>
                    </View>
                </View>

                <View style={styles.statItem}>
                    <View style={[styles.statIcon, { backgroundColor: 'rgba(244, 63, 94, 0.2)' }]}>
                        <ArrowDownRight size={16} color="#fb7185" />
                    </View>
                    <View>
                        <Text style={[styles.statLabel, { color: '#ffe4e6' }]}>Gastos</Text>
                        <Text style={[styles.statValue, { color: '#fff1f2' }]}>$950</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.primary,
        borderRadius: 24,
        padding: 24,
        marginBottom: 24,
        shadowColor: '#1e3a8a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    label: {
        color: '#dbeafe', // blue-100
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 4,
    },
    amount: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
    },
    iconContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 8,
        borderRadius: 999,
    },
    statsContainer: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 8,
    },
    statItem: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 12,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    statIcon: {
        padding: 6,
        borderRadius: 999,
    },
    statLabel: {
        color: '#d1fae5', // emerald-100
        fontSize: 12,
    },
    statValue: {
        color: '#ecfdf5', // emerald-50
        fontSize: 14,
        fontWeight: '600',
    },
});
