/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/08/index.html","c950464e460ba5417474b13f9cdcdbb0"],["/archives/2023/10/index.html","652aea0a17efcb9fefb3e6f2bb4cacf0"],["/archives/2023/11/index.html","15c87038cd3520fe14058b5f414c385a"],["/archives/2023/index.html","dc9a7fecae8295194478b14cb7de0d3e"],["/archives/index.html","f54e1fbb528cec81897bd1531a302683"],["/categories/index.html","2ffcbadcddd408e6afcff05f5cd436d1"],["/css/background.css","39d814228a30689be357cdece139ca57"],["/css/index.css","a929dfa887e6ef3126238f0915587aec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google49d2fffa78b4cfa4.html","d6331c8783609baf36e762dad87313a0"],["/images/helloworld.png","8d4599783c36069321a6b19c93071c8a"],["/images/image-20231016165552576.png","b5dcec231aed3a67091feaf308ee6f8e"],["/images/image-20231016193441251.png","e77c2ed59eed21d000baf53a4f48ca11"],["/images/image-20231016193908951.png","b848a8771f559c5e89e9d125e44729a3"],["/images/image-20231127115632458.png","5608667e09c52e51b75408d353aad8ed"],["/images/image-20231127115811701.png","bce46ccb845c2363110d80571ec68fbc"],["/images/image-20231127115934642.png","514c3eb1c12a45ee14d8933307a25f0e"],["/images/image-20231127120311234.png","23880c5453a68112882f9d9c3675d304"],["/images/image-20231127120455805.png","6f7f69df5fc625702893ae1f618a49ca"],["/images/image-20231127120819376.png","898a48758dbed4821f09e6d95cdd8126"],["/images/image-20231127120844370.png","b8214b68190f9c5afcaaf2d696245e5f"],["/images/image20231016195803091.png","e1fa739198350ce4485dbc2b96b31d8a"],["/images/image20231016195945050.png","f69bd8b60797ff6ea3d673435b4513c7"],["/images/image20231016200219125.png","ca4223c6ac8467a617acabc1cee9119b"],["/images/image20231016200310797.png","0e84a9dbfc03c17cd008991d45dd7f3d"],["/images/image20231016200749843.png","01dd1882468892600122bc5921ff9611"],["/images/image20231016200853748.png","4ed4154fd1d56bd5373de91e77d19747"],["/images/image20231017100516252.png","a5d71dce60a56f07b68f088eea7facc7"],["/images/image20231018171822020.png","7abd5d7fee682c77fd1565494ab00870"],["/images/image20231018172130793.png","ed68d646ad6a324019833bdd6db1f534"],["/images/image20231018172207499.png","e8afd90640c6bb53c515c940900cc078"],["/images/image20231018172522710.png","d1c867f29ba4ddd95ece19c0a6ff334e"],["/images/image20231018172919486.png","e2aad43daad0c60510d508153eb2ab97"],["/images/image20231018173037419.png","39b9c88f52398c227c75b3ffa5070978"],["/images/image20231018173147429.png","43ba4a858b3ed44821f2c0d49f7a8dce"],["/images/image20231018173316871.png","516a83a512c6a7ef8bf051a3da41a61c"],["/images/image20231018173704371.png","8367fced29ab5695c4ea684f31042b12"],["/images/image20231018173847292.png","9ddc18a5ef6cd158337ae3dfce743a67"],["/images/image20231018174746878.png","fd5808de4b447ed4f42c1c37b7fadc97"],["/images/image20231018180114403.png","a3d5208ccfeeb018950f4c5f70910d2b"],["/img/background.jpg","e73042ebb215d1171c65acb23723fcc5"],["/index.html","b2159542bedf920a0a7d7bee71622f2f"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/posts/3ff958bf.html","42a534e5dff5b98216f197275fe919e4"],["/posts/4a17b156.html","35defceb32e58b9fc93fc7243fe94f56"],["/posts/54dba225.html","7662efd47fc7e9567bdea8e144e3d778"],["/posts/c442673f.html","a18a7395f08345c785bdaf4c9cfb9b14"],["/posts/d13bbf6d.html","6737e604f4e3406bf9196f535e381d43"],["/sw-register.js","cad770564415697a6c6c3739b9c475e7"],["/tags/index.html","f706f3ddaae6f4dbf4c461b15f069ea4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
