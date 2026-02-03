import ProgressBar from '@/components/ProgressBar';
import ScreenWrapper from '@/components/ScreenWrapper';
import { COLORS } from '@/constants/colors';
import { CATEGORIES } from '@/constants/mockData';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ReportsScreen() {
    const sortedCategories = [...CATEGORIES].sort((a, b) => b.spent - a.spent);

    return (
        <ScreenWrapper>
            <View style={styles.header}>
                <Text style={styles.title}>Reportes</Text>
                <Text style={styles.subtitle}>Presupuesto vs Real (Enero)</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Summary Card */}
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryLabel}>Gasto Total este mes</Text>
                    <Text style={styles.summaryAmount}>$1,440.00</Text>
                    <View style={styles.progressBarBg}>
                        <View style={styles.progressBarFill} />
                    </View>
                    <Text style={styles.summaryDetail}>65% del presupuesto total</Text>
                </View>

                <Text style={styles.sectionTitle}>Por Categoría</Text>

                <View style={styles.listContainer}>
                    {sortedCategories.map(cat => (
                        <ProgressBar
                            key={cat.id}
                            label={cat.name}
                            amount={cat.spent}
                            total={cat.budget}
                            color={cat.color}
                        />
                    ))}
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 24,
        marginTop: 8,
    },
    title: {
        color: COLORS.text,
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        color: COLORS.muted,
    },
    summaryCard: {
        backgroundColor: COLORS.card,
        padding: 24,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: COLORS.border,
        marginBottom: 32,
    },
    summaryLabel: {
        color: COLORS.muted,
        marginBottom: 8,
        fontWeight: '500',
    },
    summaryAmount: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    progressBarBg: {
        height: 8,
        backgroundColor: COLORS.slate800,
        borderRadius: 999,
        marginBottom: 4,
    },
    progressBarFill: {
        width: '65%',
        height: '100%',
        backgroundColor: COLORS.blue500,
        borderRadius: 999,
    },
    summaryDetail: {
        textAlign: 'right',
        fontSize: 12,
        color: '#60a5fa', // blue-400
        marginTop: 8,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 16,
    },
    listContainer: {
        paddingBottom: 96,
        gap: 16,
    },
});
