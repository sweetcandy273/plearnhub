document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'page1') {
        page.querySelector('#john_wick_1').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/john_wick_1.html', { data: { title: 'John Wick 1' } });
        };
    } else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});
