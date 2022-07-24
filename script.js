function menuClicked() {
    if (document.getElementById('menuButton').classList.contains('fa-close')) {
        document.getElementById('menuButton').classList.remove('fa-close');
        document.getElementById('navigation').style.top = '-50vh'

    }
    else {
        document.getElementById('menuButton').classList.add('fa-close');
        document.getElementById('navigation').style.top = '10vh'
    }

}