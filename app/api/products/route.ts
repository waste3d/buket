import { NextResponse } from 'next/server';

export async function GET() {
  const GROUP_ID = '43935551';
  // Используем мобильную ссылку, она легче парсится
  const url = `https://m.vk.com/market-${GROUP_ID}`;

  try {
    const response = await fetch(url, {
      headers: {
        // Имитируем реальный браузер на iPhone
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
      },
      next: { revalidate: 60 } // Кэшируем на 1 минуту для тестов
    });

    const html = await response.text();

    // Запасные товары, если парсинг не удастся
    const fallbackProducts = [
      { id: '1', title: 'Букет «Весенний микс»', price: '2 800 ₽', img: 'https://images.unsplash.com/photo-1561149830-282e3bb07663?q=80&w=800', url: `https://vk.com/market-${GROUP_ID}` },
      { id: '2', title: 'Розы Эквадор (15 шт)', price: '3 450 ₽', img: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800', url: `https://vk.com/market-${GROUP_ID}` },
      { id: '3', title: 'Корзина к 9 Мая', price: '4 200 ₽', img: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800', url: `https://vk.com/market-${GROUP_ID}` },
      { id: '4', title: 'Гортензия Blue', price: '1 900 ₽', img: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800', url: `https://vk.com/market-${GROUP_ID}` },
    ];

    const products = [];
    
    // Регулярка для поиска блоков товаров в мобильном ВК
    const itemRegex = /<a href="\/product-(.*?)"[\s\S]*?<div class="MarketItem__photo" style="background-image: url\((.*?)\)[\s\S]*?<div class="MarketItem__title">(.*?)<\/div>[\s\S]*?<div class="MarketItem__price">(.*?)<\/div>/g;
    
    let match;
    while ((match = itemRegex.exec(html)) !== null) {
      products.push({
        id: match[1],
        url: `https://vk.com/product-${match[1]}`,
        img: match[2],
        title: match[3].replace(/&amp;/g, '&').replace(/&quot;/g, '"'),
        price: match[4].replace(/&nbsp;/g, ' '),
      });
    }

    // Если ничего не распарсилось (ВК заблочил), отдаем запасные товары
    if (products.length === 0) {
      console.log("Парсинг не удался, отдаем fallback данные");
      return NextResponse.json(fallbackProducts);
    }

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "API Error" }, { status: 500 });
  }
}