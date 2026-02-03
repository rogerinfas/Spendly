import ScreenWrapper from '@/components/ScreenWrapper';
import TransactionItem from '@/components/TransactionItem';
import { COLORS } from '@/constants/colors';
import { CATEGORIES, INITIAL_TRANSACTIONS } from '@/constants/mockData';
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TransactionsScreen() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredTransactions = selectedCategory
        ? INITIAL_TRANSACTIONS.filter(t => t.categoryId === selectedCategory)
        : INITIAL_TRANSACTIONS;

    return (
        <ScreenWrapper>
            <View style={styles.header}>
                <Text style={styles.title}>Movimientos</Text>
            </View>

            {/* Filters */}
            <View style={styles.filterContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContent}>
                    <TouchableOpacity
                        onPress={() => setSelectedCategory(null)}
                        style={[
                            styles.filterChip,
                            !selectedCategory ? styles.activeChip : styles.inactiveChip
                        ]}
                    >
                        <Text style={[styles.filterText, !selectedCategory ? styles.activeText : styles.inactiveText]}>Todos</Text>
                    </TouchableOpacity>

                    {CATEGORIES.map(cat => (
                        <TouchableOpacity
                            key={cat.id}
                            onPress={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
                            style={[
                                styles.filterChip,
                                selectedCategory === cat.id ? styles.activeChip : styles.inactiveChip
                            ]}
                        >
                            <Text style={[styles.filterText, selectedCategory === cat.id ? styles.activeText : styles.inactiveText]}>{cat.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <FlatList
                data={filteredTransactions}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <TransactionItem transaction={item} />}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No hay movimientos</Text>
                    </View>
                }
            />
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
    filterContainer: {
        marginBottom: 24,
    },
    filterContent: {
        gap: 8,
    },
    filterChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    activeChip: {
        backgroundColor: 'white',
        borderColor: 'white',
    },
    inactiveChip: {
        backgroundColor: 'transparent',
    },
    filterText: {
        fontWeight: '500',
    },
    activeText: {
        color: COLORS.card,
    },
    inactiveText: {
        color: 'white',
    },
    listContent: {
        paddingBottom: 100,
    },
    emptyContainer: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    emptyText: {
        color: COLORS.muted,
    },
});
