const renderNews = (err, data) => {
  if (err) {
    return;
  }

  const template = document.createDocumentFragment();
  const result = data.articles;
  const news = result.map(item => {
    const date = item.publishedAt.split('-').join('/').substring(0, item.publishedAt.length - 10);
    const time = item.publishedAt.substring(11, 16);
    const newsItem = document.createElement('li');
    newsItem.className = 'news-item';
    newsItem.innerHTML = `
       <img src="${item.urlToImage}" alt="${item.title}" class="news-image">
                    <h3 class="news-title">
                        <a href="#" class="news-link">${item.title}</a>
                    </h3>
                    <p class="news-description">${item.description}</p>
                    <div class="news-footer">
                        <time class="news-datetime" datetime="${item.publishedAt}">
                            <span class="news-date">${date}</span> ${time}
                        </time>
                        <p class="news-author">${item.author ? item.author : 'автор'}</p>
                    </div>
    `;

    console.log(item.publishedAt.split('-').join('/').substring(0, item.publishedAt.length - 10));
    return newsItem;
  });

  template.append(...news);
  return template;
};

export default renderNews;


//newDate = rDate.split('-').reverse().join('.');
