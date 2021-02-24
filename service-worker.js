self.addEventListener("install", function(event) {
    event.waitUntil(preLoad());
});

var preLoad = function(){
    console.log("Installing web app");
    console.log('load completed');
    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            randomNotification();
        }
    });
    return caches.open("offline").then(function(cache) {
        console.log("caching index and important routes");
        return cache.addAll(["/", "/software", "/education","/image-segmentation-using-awdo","image-segmentation-using-wdo" ,"/offline.html"]);
    });
};

self.addEventListener("fetch", function(event) {
    event.respondWith(checkResponse(event.request).catch(function() {
        return returnFromCache(event.request);
    }));
    event.waitUntil(addToCache(event.request));
});

self.addEventListener("fetch", function () {
    console.log('load completed');
    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            randomNotification();
        }
    });
})

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
}

var checkResponse = function(request){
    return new Promise(function(fulfill, reject) {
        fetch(request).then(function(response){
            if(response.status !== 404) {
                fulfill(response);
            } else {
                reject();
            }
        }, reject);
    });
};

var addToCache = function(request){
    return caches.open("offline").then(function (cache) {
        return fetch(request).then(function (response) {
            console.log(response.url + " was cached");
            return cache.put(request, response);
        });
    });
};

var returnFromCache = function(request){
    return caches.open("offline").then(function (cache) {
        return cache.match(request).then(function (matching) {
            if(!matching || matching.status == 404) {
                return cache.match("offline.html");
            } else {
                return matching;
            }
        });
    });
};