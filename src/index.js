import './index.less'
import './components/article/article.js'
import './components/menu/menu.js'
import { data } from 'msw/lib/types/context';
function menuMaker(linksArray) {
    const menuWrapper = document.createElement('div');
    //const menuList = document.createElement('ul');

    menuWrapper.appendChild(menuList);

    menuWrapper.classList.add('menu');

linksArray.forEach(linkText => {
    const link = document.createElement('li');
    link.textContent = linkText;
    //menuList.appendChild(link);
})

const hamMenu = document.querySelector('.menu-button');

hamMenu.addEventListener('click', () => {
menuWrapper.classList.toggle('menu--open');
})
return menuWrapper;
}

//document.querySelector('.header').appendChild(menuMaker(menuList));

function articleMaker(articleObj){
    const articleWrapper = document.createElement('div');
    const articleTitle = document.createElement('h2');
    const articleDate = document.createElement('p');
    const articlePara0ne = document.createElement('p');
    const articleParatwo = document.createElement('p');
    const articleParathree = document.createElement('p');
    const expandButton= document.createElement('span');

    articleWrapper.classList.add('article');
    articleDate.classlist.add('date')
    expandButton.classList.add('expandbutton');

    articleWrapper.appendChild(articleTitle);
    articleWrapper.appendChild(articleDate);
    articleWrapper.appendChild(articlePara0ne);
    articleWrapper.appendChild(articleParatwo);
    articleWrapper.appendChild(articleParathree);
    articleWrapper.appendChild(expandButton);

articleTitle.textContent = articleObj.title;
articleDate.textContent = articleObj.date;
articlePara0ne.textContent = articleObj.firstParagraph;
articleParatwo.textContent = articleObj.secondParagraph;
articleParathree.textContent = articleObj.thirdParagraph;
expandButton.textContent = "+";


    expandButton.addEventListener('click', () =>{
        articleWrapper.classList.toggle('article-open');
    })
    return articleWrapper;
}

data.forEach(article =>{
    document.querySelector('div.articles').appendChild(articleMaker(article));
})