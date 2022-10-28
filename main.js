// theme changer

function changeTheme(){
    
    if(document.getElementById('themeSwitcher').checked){
        document.documentElement.style.setProperty('--mainTextColor', '#fff');
        document.documentElement.style.setProperty('--secondaryTextColor', '#adb0b1');
        document.documentElement.style.setProperty('--mainLinkColor', 'rgb(30, 190,214)');
        document.documentElement.style.setProperty('--mainBgColor', '#131415');
        document.getElementById("profile-pic").src = "./assets/images/darkmode.png";

  
    } else {
        document.documentElement.style.setProperty('--mainTextColor', '#000');
        document.documentElement.style.setProperty('--secondaryTextColor', 'rgb(51 51 51)');
        document.documentElement.style.setProperty('--mainLinkColor', '#0da2b8');
        document.documentElement.style.setProperty('--mainBgColor', 'rgb(249, 250,251)');
        document.getElementById("profile-pic").src = "./assets/images/lightmode.png";
    }
}