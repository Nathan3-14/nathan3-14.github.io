const getCookie = (cname) => {
    let output = document.cookie
    .split('; ')
    .find((row) => row.startsWith(cname+'='))
    ?.split('=')[1];
    return output
};
document.getElementById('home_button').addEventListener('click', () => {
    console.log('Home button clicked')
    window.location = '/menu/';
});
const themes = ['dark', 'light'];


var theme_cookie = getCookie('theme');
console.info('Theme cookie '+theme_cookie);
if (theme_cookie != null) { document.getElementById('style').href='style-'+theme_cookie+'.css'; }
else { document.getElementById('style').href='style-light.css'; }



for (var i = 0; i < themes.length; i++) {
    let theme = themes[i];
    console.log(theme);
    document.getElementById(theme).addEventListener('click', () => {
        console.log('Setting theme');
        document.getElementById('style').href='style-'+theme+'.css';
        document.cookie = 'theme='+theme+'; SameSite=strict; max-age=2592000; path=/;';
        console.log('set cookie');
    });
}


