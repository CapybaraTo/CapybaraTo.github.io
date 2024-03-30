/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","1e86042e0b8e7d3d59c7552dd826f8fb"],["/archives/2023/08/index.html","56718bd4fe6a3651dd954f1e31497957"],["/archives/2023/10/index.html","f6da81bcf797ac10ec9207c0a047acb9"],["/archives/2023/11/index.html","5b09923308d29c5248f212ff902eabc8"],["/archives/2023/index.html","3590b480a31016ff45ee4110d2637135"],["/archives/2024/03/index.html","46104540a3a4a6d8618d9020358eea9f"],["/archives/2024/index.html","1a53d5a9c2ede3e0b5a76c9db11fb2e2"],["/archives/index.html","c6824afd1755bf3f8e61c8826b2bdbee"],["/baidu_verify_codeva-8QIFbUE5ib.html","7551914e0f0d28e3cc5a825116d6fcf6"],["/categories/index-1.html","92ef71ce5dc5eaa83274d94755ed22e8"],["/categories/index.html","5e944441548a4e9d9855bbe9d9767f78"],["/comments/index.html","85a657060bb4c77bee46a0967e0fcbc9"],["/css/background.css","39d814228a30689be357cdece139ca57"],["/css/custom.css","c59863614232381ce8a81505a089e30e"],["/css/index.css","5dc40cf3f127d49543b363e466950eaf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google49d2fffa78b4cfa4.html","412d986b82a3c852d92f297e2089b39d"],["/images/helloworld.png","de7023a06c29070f1ea8f5c3961150ac"],["/images/image-20231016165552576.png","41633e4462afc1a4d554f465e91bd99c"],["/images/image-20231016193441251.png","18c8163fbd43be5ee917b9f68f5a9c73"],["/images/image-20231016193908951.png","1113efef5736259baa26b681df199827"],["/images/image-20231127115632458.png","92d72d3ea9f2ec0dab9205570798744a"],["/images/image-20231127115811701.png","d0dc60e21e4f9f6e57e30c1b9350797f"],["/images/image-20231127115906495.png","7384fc8dd5075a30df6972973c1eec50"],["/images/image-20231127115934642.png","681f1981afe44d891d7d1ed0c1a5bd94"],["/images/image-20231127120311234.png","661c92d1d272764dd467b0b8617c83f2"],["/images/image-20231127120455805.png","32f2fbe1d8d472275de4667d8e8dcbb2"],["/images/image-20231127120819376.png","9e8eca1d5741b6d860cd665542914325"],["/images/image-20231127120844370.png","aac55dfa00c8654647721f3648eebc84"],["/images/image20231016195803091.png","e1fa739198350ce4485dbc2b96b31d8a"],["/images/image20231016195945050.png","f69bd8b60797ff6ea3d673435b4513c7"],["/images/image20231016200219125.png","265080fe6a4e594bd0529289c8d28ce4"],["/images/image20231016200310797.png","36574217e70b5a6fd4d1130558ad7311"],["/images/image20231016200749843.png","b6a11fbe6050b082510940db50b0a144"],["/images/image20231016200853748.png","5d3c0b5bc3653e2115db063e420df856"],["/images/image20231017100516252.png","2462b20a008da52177d5c17462401ef8"],["/images/image20231018171822020.png","d7a0e64c6c2f130d29e38cec4c5be12e"],["/images/image20231018172130793.png","a6f5a7a22ee18e5b0826c24e9d7c51da"],["/images/image20231018172207499.png","96c504de00a8fca6b120d41c3cc313d3"],["/images/image20231018172522710.png","3864ea5d071a3a6ec4d2394c078c18ae"],["/images/image20231018172919486.png","6750e14e24d1e7b07190366fadace010"],["/images/image20231018173037419.png","209e728763219c5f69bb1e9bd9a938fa"],["/images/image20231018173147429.png","43ba4a858b3ed44821f2c0d49f7a8dce"],["/images/image20231018173316871.png","f9893ac0a3c52bc5cec5eed7760597e2"],["/images/image20231018173704371.png","1f18a549b280bf0114a0276e09a00bf0"],["/images/image20231018173847292.png","859c0f60708777714909ee0c42e9bf8d"],["/images/image20231018174746878.png","d95af24ad14b11cd68a941002d8a17e5"],["/images/image20231018180114403.png","04fbbe63504670c57942b7a12a644ca9"],["/img/background.jpg","e73042ebb215d1171c65acb23723fcc5"],["/img/loading.gif","3604782ccee9b144c7c2b1c0168a6bcd"],["/img/miniLM.png","19f4017d876d0c895017fec1c8674a49"],["/index.html","25679cec2a52115365dd005e3906050e"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/posts/3ff958bf.html","9e532d59b9d070552b89d4d54002427e"],["/posts/4a17b156.html","8537dab83083f08e782ad8b0f82f8e33"],["/posts/54dba225.html","512ebd8f50d123eeb2ea6521493c0eb2"],["/posts/8ad2c32e.html","4fc079b03d9aa5f08e30efde982bff08"],["/posts/c442673f.html","bde52ddb09724871bcc4c242aa7f1708"],["/posts/d13bbf6d.html","63b1a201dc046818d438812a07c66f75"],["/sw-register.js","65bab779cd17ef7333562776e67f4a42"],["/tags/index-1.html","65771ee2042aaa97900ab45bd862cfd4"],["/tags/index.html","ebfc0d732ecffc224a70f0f83644d886"]];
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
