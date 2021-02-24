Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            console.log(result);
            randomNotification();
        }
    });

function randomNotification() {
    const games = ['pardhu', 'prabhu', 'dad', 'mom'];
    let randomItem = Math.floor(Math.random()*games.length);
    let notifTitle = games[randomItem].toLocaleLowerCase();
    let notifBody = 'Created by '+games[randomItem].toUpperCase()+'.';
    let notifImg = '/assets/img/favicon.png';
    let options = {
        body: notifBody,
        icon: notifImg
    }
    new Notification(notifTitle, options);
    setTimeout(randomNotification, 5000);
}