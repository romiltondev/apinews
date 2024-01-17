document.addEventListener('DOMContentLoaded', function () {

const apiUrl='https://newsapi.org/v2/top-headlines'

const apiKey='0c9595cdb70147fb8ec428a02e3ffdbe'
const url = `${apiUrl}?apiKey=${apiKey}&category=technology&pageSize=50`;

const newsContainer=document.getElementById('news-container')
fetch(url)
.then(response=>{
    if(!response.ok){
        throw new Error(`Error na solicitacao ${response.status}`);
    }
    return response.json();
})
.then(data=>{
    data.articles.forEach(article=>{
        const newsItem=document.createElement('div');
        newsItem.innerHTML=`
        <div class="news">
        <h3 class="title">${article.title}</h3>
        <p>${article.author}</p>
        <li><a href="${article.url}" target="_blank"/>Ler mais ></li>
        </div>
        `;
        newsContainer.appendChild(newsItem);
    });
})
.catch(error=>{
    console.error(`Error:${error.message}`);
});
});
