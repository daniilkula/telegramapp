
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const contact = e.target.contact.value;
    const message = e.target.message.value;

    const data = { name, contact, message };

    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData(JSON.stringify(data));
    }
  };

  const cases = [
    "Продвижение медиапроекта",
    "Альфастрахование",
    "Продвижение товаров для косметологов",
    "Продвижение товаров для подологов",
    "Строительство домов из кедра",
    "Салон красоты",
    "Центр косметологии",
    "Детейлинг-центр",
    "Магазин для тату-мастеров",
    "Магазин для кондитеров",
    "Магазин ювелирных украшений",
  ];

  return (
    <div className="p-4 space-y-6 text-center text-white bg-black min-h-screen">
      <h1 className="text-2xl font-bold">Портфолио</h1>
      <div className="space-y-4">
        {cases.map((item, index) => (
          <div key={index} className="bg-white text-black p-4 rounded-2xl shadow">
            <h2 className="font-semibold text-lg">Кейс: {item}</h2>
            <p>Описание и результаты доступны по запросу</p>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold pt-6">Оставить заявку</h2>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input name="name" placeholder="Ваше имя" className="w-full p-2 rounded bg-gray-100 text-black" required />
        <input name="contact" placeholder="Telegram или телефон" className="w-full p-2 rounded bg-gray-100 text-black" required />
        <textarea name="message" placeholder="Ваш запрос или проект" className="w-full p-2 rounded bg-gray-100 text-black" />
        <button type="submit" className="w-full p-2 bg-blue-500 rounded text-white font-semibold">Отправить заявку</button>
      </form>
    </div>
  );
}
