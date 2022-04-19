import fetchRequest from './fetchRequest.js';
import renderSelect from './renderSelect.js';
import preload from './preload.js';
import renderNews from "./renderGoods.js";

const newsList = document.querySelectorAll('.news-list');
const jsChoice = document.querySelector('.js-choice');

const initNews = async () => {
    const news = await fetchRequest('&pageSize=8',{
        callback: renderNews,
        headers: {
            'X-Api-Key': '3d502708fae84aaeb6a35e65974dac3c',
        }
    })
    newsList[0].append(news);
}

const initNewsRightNow = async () => {
    const news = await fetchRequest('&pageSize=4',{
        callback: renderNews,
        headers: {
            'X-Api-Key': '3d502708fae84aaeb6a35e65974dac3c',
        }
    })
    newsList[1].append(news);
}

initNews();

initNewsRightNow();
