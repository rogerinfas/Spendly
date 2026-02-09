import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReportsScreen() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="p-4 bg-card shadow-sm mb-4 border-b border-border">
                <Text className="text-2xl font-bold text-foreground">Financial Reports</Text>
            </View>

            <ScrollView contentContainerClassName="p-4 gap-6">
                <View className="bg-card p-6 rounded-2xl items-center justify-center h-64 shadow-sm border border-border">
                    <Text className="text-muted-foreground font-medium">Chart Placeholder</Text>
                    <Text className="text-xs text-muted-foreground/60 mt-2">(Requires chart library)</Text>
                </View>

                <View className="bg-card p-4 rounded-xl shadow-sm border border-border">
                    <Text className="text-lg font-bold text-foreground mb-4">Spending by Category</Text>
                    {['Food', 'Transport', 'Entertainment', 'Bills'].map((category, i) => (
                        <View key={category} className="mb-4 last:mb-0">
                            <View className="flex-row justify-between mb-1">
                                <Text className="text-foreground font-medium">{category}</Text>
                                <Text className="text-muted-foreground text-sm">25%</Text>
                            </View>
                            <View className="h-2 bg-muted rounded-full overflow-hidden">
                                <View className="h-full bg-primary rounded-full" style={{ width: '25%' }} />
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
