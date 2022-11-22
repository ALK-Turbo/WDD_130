var menus = document.getElementsByClassName('hamburger-menu')[0];
var searches = document.getElementsByClassName('search-input')[0];

menus.addEventListener('click', () => {
    menus.classList.toggle('open');
})

searches.addEventListener('click', () => {
    searches.classList.toggle('open');
})

var themes = Array.from(document.getElementsByClassName('themes-menu')[0].children);
themes.forEach(e => {
    e.addEventListener('click', function () {
        var newTheme = e.className;
        var main = document.getElementsByTagName('main')[0];
        main.className = `theme-${newTheme}`;
    })
});
