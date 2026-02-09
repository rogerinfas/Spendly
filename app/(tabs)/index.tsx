import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView contentContainerClassName="p-4 gap-4">
        <View className="bg-white p-6 rounded-2xl shadow-sm">
          <Text className="text-gray-500 text-sm font-medium">Total Balance</Text>
          <Text className="text-4xl font-bold text-gray-900 mt-2">$12,450.00</Text>
        </View>

        <View className="flex-row gap-4">
          <View className="flex-1 bg-green-500 p-4 rounded-xl items-center">
            <Text className="text-white font-medium">Income</Text>
            <Text className="text-white text-lg font-bold">+$4,200</Text>
          </View>
          <View className="flex-1 bg-red-500 p-4 rounded-xl items-center">
            <Text className="text-white font-medium">Expenses</Text>
            <Text className="text-white text-lg font-bold">-$1,800</Text>
          </View>
        </View>

        <View className="bg-white p-4 rounded-xl shadow-sm">
          <Text className="text-lg font-bold text-gray-800 mb-4">Recent Transactions</Text>
          {[1, 2, 3].map((i) => (
            <View key={i} className="flex-row justify-between items-center py-3 border-b border-gray-100 last:border-0">
              <View>
                <Text className="font-semibold text-gray-800">Grocery Store</Text>
                <Text className="text-gray-500 text-xs">Today, 2:30 PM</Text>
              </View>
              <Text className="font-bold text-red-500">-$45.00</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
