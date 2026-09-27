export type MenuCategory = 'coffee' | 'drinks' | 'bakery';

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
}

export const menuItems: MenuItem[] = [
  { id: 'c1', category: 'coffee', name: 'Флэт уайт', description: 'Двойной эспрессо, бархатное молоко', price: 320 },
  { id: 'c2', category: 'coffee', name: 'Капучино', description: 'Мягкая пенка, наша обжарка', price: 290 },
  { id: 'c3', category: 'coffee', name: 'V60', description: 'Альтернатива, зерно недели', price: 350 },
  { id: 'c4', category: 'coffee', name: 'Раф на топлёном молоке', description: 'Ваниль, тростниковый сахар', price: 340 },
  { id: 'd1', category: 'drinks', name: 'Матча-латте', description: 'Церемониальная матча, овсяное молоко', price: 380 },
  { id: 'd2', category: 'drinks', name: 'Какао с корицей', description: 'Тёмный шоколад, щепотка соли', price: 300 },
  { id: 'd3', category: 'drinks', name: 'Домашний лимонад', description: 'Сезонные ягоды и травы', price: 280 },
  { id: 'b1', category: 'bakery', name: 'Круассан с миндалём', description: 'Выпекаем каждое утро', price: 260 },
  { id: 'b2', category: 'bakery', name: 'Чизкейк баск', description: 'Карамелизированная корочка', price: 320 },
  { id: 'b3', category: 'bakery', name: 'Морковный кекс', description: 'Крем-чиз, грецкий орех', price: 290 },
];
