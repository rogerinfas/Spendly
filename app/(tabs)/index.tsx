import BalanceCard from '@/components/BalanceCard';
import ScreenWrapper from '@/components/ScreenWrapper';
import TransactionItem from '@/components/TransactionItem';
import { COLORS } from '@/constants/colors';
import { INITIAL_TRANSACTIONS } from '@/constants/mockData';
import { Plus } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Dashboard() {
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);

  const addNewTransaction = () => {
    const newTx = {
      id: Math.random().toString(),
      title: 'Nuevo Gasto Simulado',
      amount: Math.floor(Math.random() * 50) + 10,
      date: new Date().toISOString(),
      categoryId: '1', // Comida default
      type: 'expense' as const,
    };
    // @ts-ignore
    setTransactions([newTx, ...transactions]);
  };

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Buenos días,</Text>
            <Text style={styles.username}>Acide</Text>
          </View>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>
          </View>
        </View>

        {/* Balance */}
        <BalanceCard />

        {/* Recent Transactions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Reciente</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Ver todo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          {transactions.slice(0, 5).map((tx) => (
            <TransactionItem key={tx.id} transaction={tx} />
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        onPress={addNewTransaction}
        activeOpacity={0.8}
        style={styles.fab}
      >
        <Plus color="white" size={30} />
      </TouchableOpacity>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  greeting: {
    color: COLORS.muted,
    fontSize: 14,
    fontWeight: '500',
  },
  username: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatarContainer: {
    backgroundColor: COLORS.slate800,
    padding: 8,
    borderRadius: 999,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 999,
    backgroundColor: COLORS.blue500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  seeAll: {
    color: COLORS.primary,
    fontWeight: '500',
  },
  listContainer: {
    paddingBottom: 96,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 16,
    backgroundColor: COLORS.primary,
    width: 56,
    height: 56,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.blue500,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
});
