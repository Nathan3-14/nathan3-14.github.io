const getCookie = (cname) => {
    let output = document.cookie
    .split('; ')
    .find((row) => row.startsWith(cname+'='))
    ?.split('=')[1];
    return output
};
const themes = ['dark', 'light'];
const items = ['pasta_sausage', 'brownie'];

var theme_cookie = getCookie('theme');
if (theme_cookies != null) { document.getElementById('style').href='style-'+theme_cookie+'.css'; }
else { document.getElementById('style').href='style-light.css'; }



for (var i = 0; i < themes.length; i++) {
    let theme = themes[i];
    document.getElementById(theme).addEventListener('click', () => {
        document.getElementById('style').href='style-'+theme+'.css';
        document.cookie = 'theme='+theme+'; SameSite=Strict;max-age=2592000;';
    });
}




items.forEach(item => {
    let element = document.getElementById(item);
    if (element != null) {
        element.addEventListener('click', (event) => {
            window.location = '/menu/recipes/'+element.id;
        })
    }
});