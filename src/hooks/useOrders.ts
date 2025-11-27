import { create } from 'zustand';
import { Order } from '@/types/product';

interface OrdersStore {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  updateEstimatedPickupTime: (orderId: string, estimatedTime: Date) => void;
  getOrderById: (orderId: string) => Order | undefined;
  getUserOrders: (userId: string) => Order[];
  loadOrders: () => void;
  clearAllOrders: () => void;
}

const STORAGE_KEY = 'tap_n_take_orders_v5';

// Limpiar claves antiguas del localStorage
if (typeof window !== 'undefined') {
  ['tap_n_take_orders_v1', 'tap_n_take_orders_v2', 'tap_n_take_orders_v3', 'tap_n_take_orders_v4'].forEach(key => {
    localStorage.removeItem(key);
  });
}

// Helper to save orders to localStorage
const saveOrders = (orders: Order[]) => {
  try {
    const serialized = JSON.stringify(orders.map(order => ({
      ...order,
      timestamp: order.timestamp instanceof Date ? order.timestamp.toISOString() : order.timestamp,
      estimatedPickupTime: order.estimatedPickupTime instanceof Date ? order.estimatedPickupTime.toISOString() : order.estimatedPickupTime
    })));
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (error) {
    console.error('Error saving orders to localStorage:', error);
  }
};

// Helper to load orders from localStorage
const loadOrders = (): Order[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.map((order: any) => ({
        ...order,
        timestamp: new Date(order.timestamp),
        estimatedPickupTime: order.estimatedPickupTime ? new Date(order.estimatedPickupTime) : undefined
      }));
    }
  } catch (error) {
    console.error('Error loading orders from localStorage:', error);
  }
  return [];
};

export const useOrders = create<OrdersStore>((set, get) => ({
  orders: loadOrders(),
  
  loadOrders: () => {
    const loaded = loadOrders();
    set({ orders: loaded });
  },
  
  addOrder: (order) => {
    const newOrders = [order, ...get().orders];
    set({ orders: newOrders });
    saveOrders(newOrders);
  },
  
  updateOrderStatus: (orderId, status) => {
    const updatedOrders = get().orders.map(order =>
        order.id === orderId
          ? { ...order, status }
          : order
    );
    set({ orders: updatedOrders });
    saveOrders(updatedOrders);
  },
  
  updateEstimatedPickupTime: (orderId, estimatedTime) => {
    const updatedOrders = get().orders.map(order =>
        order.id === orderId
          ? { ...order, estimatedPickupTime: estimatedTime }
          : order
    );
    set({ orders: updatedOrders });
    saveOrders(updatedOrders);
  },
  
  getOrderById: (orderId) => {
    // Always check localStorage for latest data
    const allOrders = loadOrders();
    return allOrders.find(order => order.id === orderId);
  },
  
  getUserOrders: (userId) => {
    const allOrders = loadOrders();
    return allOrders.filter(order => order.userId === userId);
  },
  
  clearAllOrders: () => {
    set({ orders: [] });
    localStorage.removeItem(STORAGE_KEY);
  }
}));
