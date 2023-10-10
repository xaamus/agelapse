let ageBlock = document.getElementById('ageBlock');
setInterval(()=>{
    document.body.style.height = window.innerHeight + 'px'
    ageBlock.style.width = 0.5076 * window.innerHeight + 'px'

},1)



function timeLapsing(){
    let age = document.getElementById('age');
    let coma = document.getElementById('coma');

    let date2 = new Date();
    let dt = 11;
    let mt = 10;
    let yt = 2005;
    let dn = date2.getDate();
    let mn = date2.getMonth()+1;
    let yn = date2.getFullYear();

    if (yn > yt){
        if (mn > mt || mn == mt && dn >= dt){
            msa = 1000 * 60 * 60 * 24 * 365;
            age.innerHTML = yn - yt;
        }

        else{
            age.innerHTML = yn - yt - 1;
        }
    }

    if (yn % 4 != 0){
        day = 1000 * 60 * 60 * 24
        msa = day * 365;
        months = [31,28,31,30,31,30,31,31,30,31,30,31];
        ms = 0;
        at = 0;

        for (i = 0; i < mt-1; i++){
            at += months[i];
        }

        for (i = 0; i < mn-1; i++){
            ms += months[i];
        }

        ms += dn - 1;
        at += dt - 1;
        ms = 365 - at + ms;
        ms = ms * day;
        ms = ms + (date2.getHours() * 3600000)
        + (date2.getMinutes() * 60000)
        + (date2.getSeconds() * 1000)
        + date2.getMilliseconds();
        dvd = ms/msa;
        dvd = dvd.toString().slice(1,dvd.length)
        coma.innerHTML = dvd;
    }

    setInterval(()=>{
        ms += 1;
        dvd = ms/msa;
        dvd = dvd.toString().slice(1,dvd.length)

        while (dvd.length < 17){
            dvd += '0'
        }
        coma.innerHTML = dvd;

        if (ms/msa >= 1){
            age.innerHTML = parseInt(age.innerHTML) + 1;
            ms = 0;
        }
    },1)
}
timeLapsing();

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}