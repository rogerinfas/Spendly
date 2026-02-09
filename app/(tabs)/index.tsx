import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerClassName="p-4 gap-4">
        <View className="bg-card p-6 rounded-2xl shadow-sm border border-border">
          <Text className="text-muted-foreground text-sm font-medium">Total Balance</Text>
          <Text className="text-4xl font-bold text-foreground mt-2">$12,450.00</Text>
        </View>

        <View className="flex-row gap-4">
          <View className="flex-1 bg-primary p-4 rounded-xl items-center">
            <Text className="text-primary-foreground font-medium">Income</Text>
            <Text className="text-primary-foreground text-lg font-bold">+$4,200</Text>
          </View>
          <View className="flex-1 bg-destructive p-4 rounded-xl items-center">
            <Text className="text-white font-medium">Expenses</Text>
            <Text className="text-white text-lg font-bold">-$1,800</Text>
          </View>
        </View>

        <View className="bg-card p-4 rounded-xl shadow-sm border border-border">
          <Text className="text-lg font-bold text-foreground mb-4">Recent Transactions</Text>
          {[1, 2, 3].map((i) => (
            <View key={i} className="flex-row justify-between items-center py-3 border-b border-border last:border-0">
              <View>
                <Text className="font-semibold text-foreground">Grocery Store</Text>
                <Text className="text-muted-foreground text-xs">Today, 2:30 PM</Text>
              </View>
              <Text className="font-bold text-destructive">-$45.00</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
