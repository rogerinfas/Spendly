import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TransactionsScreen() {
    const transactions = Array.from({ length: 10 }).map((_, i) => ({
        id: i.toString(),
        title: `Transaction ${i + 1}`,
        amount: (Math.random() * 100).toFixed(2),
        date: '2023-10-25',
        type: i % 2 === 0 ? 'expense' : 'income',
    }));

    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="p-4 bg-card shadow-sm mb-2 border-b border-border">
                <Text className="text-2xl font-bold text-foreground">Transactions</Text>
            </View>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                contentContainerClassName="p-4 gap-3"
                renderItem={({ item }) => (
                    <View className="bg-card p-4 rounded-xl shadow-sm flex-row justify-between items-center border border-border">
                        <View>
                            <Text className="font-semibold text-foreground">{item.title}</Text>
                            <Text className="text-muted-foreground text-xs">{item.date}</Text>
                        </View>
                        <Text className={`font-bold ${item.type === 'income' ? 'text-primary' : 'text-destructive'}`}>
                            {item.type === 'income' ? '+' : '-'}${item.amount}
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}
