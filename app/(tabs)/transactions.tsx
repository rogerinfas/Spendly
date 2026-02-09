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
        <SafeAreaView className="flex-1 bg-gray-100">
            <View className="p-4 bg-white shadow-sm mb-2">
                <Text className="text-2xl font-bold text-gray-900">Transactions</Text>
            </View>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                contentContainerClassName="p-4 gap-3"
                renderItem={({ item }) => (
                    <View className="bg-white p-4 rounded-xl shadow-sm flex-row justify-between items-center">
                        <View>
                            <Text className="font-semibold text-gray-800">{item.title}</Text>
                            <Text className="text-gray-500 text-xs">{item.date}</Text>
                        </View>
                        <Text className={`font-bold ${item.type === 'income' ? 'text-green-600' : 'text-red-500'}`}>
                            {item.type === 'income' ? '+' : '-'}${item.amount}
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}
