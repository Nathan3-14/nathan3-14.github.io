let getCookie = (cname) => {
    let output = document.cookie
    .split('; ')
    .find((row) => row.startsWith(cname+'='))
    ?.split('=')[1];
    return output
}


document.getElementById('style').href='style-'+getCookie('theme')+'.css';


const themes = ['dark', 'light'];

for (var i = 0; i < themes.length; i++) {
    let theme = themes[i];
    document.getElementById(theme).addEventListener('click', () => {
        document.getElementById('style').href='style-'+theme+'.css';
        document.cookie = 'theme='+theme+'; SameSite=Strict';
    });
}




const items = ['pasta_sausage', 'brownie'];
items.forEach(item => {
    let element = document.getElementById(item);
    if (element != null) {
        element.addEventListener('click', (event) => {
            window.location = '/menu/recipes/'+element.id;
        })
    }
});