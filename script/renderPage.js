import fetchRequest from './fetchRequest.js';
import renderSelect from './renderSelect.js';
import preload from './preload.js';
import renderNews from "./renderNews.js";

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

const form = document.querySelector('.form-search');
const searchBtn = document.querySelector('.search-submit');

const init = () => {
    preload.show();

    return Promise.all([fetchRequest(`top-headlines?country=${form.country.value|| 'ru'}&pageSize=8`,{
        callback: renderNews,
        headers: {
            'X-Api-Key': '3d502708fae84aaeb6a35e65974dac3c',
        }
    }),
    fetchRequest(`everything?q=${form.search.value || 'Россия'}&pageSize=4`,{
        callback: renderNews,
        headers: {
            'X-Api-Key': '3d502708fae84aaeb6a35e65974dac3c',
        }
    })
    ])
};


searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    init().then(data => {
        preload.remove();
        const title = document.querySelectorAll('.title');
        title[0].textContent = `По вашему запросу "${form.country.textContent || 'Россия'}" найдено 8 результатов`;
        title[1].textContent = 'Свежие новости';
        newsList[0].append(data[0]);
        newsList[1].append(data[1]);
        form.reset();
    })
})


