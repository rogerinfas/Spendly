import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReportsScreen() {
    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <View className="p-4 bg-white shadow-sm mb-4">
                <Text className="text-2xl font-bold text-gray-900">Financial Reports</Text>
            </View>

            <ScrollView contentContainerClassName="p-4 gap-6">
                <View className="bg-white p-6 rounded-2xl items-center justify-center h-64 shadow-sm">
                    <Text className="text-gray-400 font-medium">Chart Placeholder</Text>
                    <Text className="text-xs text-gray-300 mt-2">(Requires chart library)</Text>
                </View>

                <View className="bg-white p-4 rounded-xl shadow-sm">
                    <Text className="text-lg font-bold text-gray-800 mb-4">Spending by Category</Text>
                    {['Food', 'Transport', 'Entertainment', 'Bills'].map((category, i) => (
                        <View key={category} className="mb-4 last:mb-0">
                            <View className="flex-row justify-between mb-1">
                                <Text className="text-gray-700 font-medium">{category}</Text>
                                <Text className="text-gray-500 text-sm">25%</Text>
                            </View>
                            <View className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <View className="h-full bg-blue-500 rounded-full" style={{ width: '25%' }} />
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
