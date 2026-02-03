import { Car, Coffee, Dumbbell, Film, Home, Plane, ShoppingCart, Zap } from 'lucide-react-native';
import { COLORS } from './colors';

export type Category = {
  id: string;
  name: string;
  icon: any; 
  color: string; // Hex color now
  budget: number;
  spent: number;
};

export type Transaction = {
  id: string;
  title: string;
  amount: number;
  date: string; 
  categoryId: string;
  type: 'expense' | 'income';
};

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Comida', icon: Coffee, color: COLORS.amber500, budget: 500, spent: 350 },
  { id: '2', name: 'Compras', icon: ShoppingCart, color: COLORS.blue500, budget: 300, spent: 120 },
  { id: '3', name: 'Servicios', icon: Zap, color: COLORS.yellow500, budget: 150, spent: 140 },
  { id: '4', name: 'Transporte', icon: Car, color: COLORS.indigo500, budget: 200, spent: 80 },
  { id: '5', name: 'Hogar', icon: Home, color: COLORS.emerald500, budget: 800, spent: 750 },
  { id: '6', name: 'Salud', icon: Dumbbell, color: COLORS.rose500, budget: 100, spent: 20 },
  { id: '7', name: 'Viajes', icon: Plane, color: COLORS.sky500, budget: 1000, spent: 0 },
  { id: '8', name: 'Ocio', icon: Film, color: COLORS.purple500, budget: 200, spent: 180 },
];

const generateTransactions = (): Transaction[] => {
  const transactions: Transaction[] = [];
  const now = new Date();
  
  transactions.push({ id: 't1', title: 'Starbucks', amount: 5.50, date: now.toISOString(), categoryId: '1', type: 'expense' });
  transactions.push({ id: 't2', title: 'Uber', amount: 12.20, date: now.toISOString(), categoryId: '4', type: 'expense' });
  transactions.push({ id: 't3', title: 'Spotify Premium', amount: 9.99, date: new Date(now.setDate(now.getDate() - 1)).toISOString(), categoryId: '8', type: 'expense' });
  
  return transactions;
};

export const INITIAL_TRANSACTIONS = generateTransactions();
