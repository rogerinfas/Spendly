import { COLORS } from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, Transaction } from '../constants/mockData';

type Props = {
    transaction: Transaction;
};

export default function TransactionItem({ transaction }: Props) {
    const category = CATEGORIES.find(c => c.id === transaction.categoryId) || CATEGORIES[0];
    const Icon = category.icon;

    const isExpense = transaction.type === 'expense';
    const amountColor = isExpense ? COLORS.text : COLORS.success;
    const sign = isExpense ? '-' : '+';

    const date = new Date(transaction.date);
    const formattedDate = date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });

    return (
        <View style={styles.container}>
            <View style={styles.leftContent}>
                <View style={[styles.iconContainer, { backgroundColor: category.color + '20' }]}>
                    {/* Adding alpha 20 (hex 20 is ~12%) for bg opacity if color is hex RRGGBB */}
                    <Icon size={20} color={category.color} />
                </View>
                <View>
                    <Text style={styles.title}>{transaction.title}</Text>
                    <Text style={styles.subtitle}>{category.name} • {formattedDate}</Text>
                </View>
            </View>
            <Text style={[styles.amount, { color: amountColor }]}>
                {sign}${transaction.amount.toFixed(2)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginBottom: 12,
        backgroundColor: COLORS.card,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    iconContainer: {
        padding: 12,
        borderRadius: 999,
    },
    title: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: '600',
    },
    subtitle: {
        color: COLORS.muted,
        fontSize: 12,
        marginTop: 2,
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
