"use strict";window.addEventListener("load",function(){function e(){var e=document.body.style;e.width="100%",e.overflow="hidden",btf.animateIn(a,"to_show 0.5s"),btf.animateIn(i,"titleScale 0.5s"),setTimeout(function(){document.querySelector("#algolia-search .ais-SearchBox-input").focus()},100),document.addEventListener("keydown",function e(t){"Escape"===t.code&&(s(),document.removeEventListener("keydown",e))}),o(),window.addEventListener("resize",o)}function t(){document.querySelector("#search-button > .search").addEventListener("click",e)}function n(e){var t,a,n,i;return""===e?"":(a=(t=e.indexOf("<mark>"))+120,i=n="",(t-=30)<=0?(t=0,a=140):n="...",a>e.length?a=e.length:i="...",n+e.substring(t,a)+i)}var a=document.getElementById("search-mask"),i=document.querySelector("#algolia-search .search-dialog"),s=function(){var e=document.body.style;e.width="",e.overflow="",btf.animateOut(i,"search_close .5s"),btf.animateOut(a,"to_hide 0.5s"),window.removeEventListener("resize",o)},o=function(){window.innerWidth<768&&i.style.setProperty("--search-height",window.innerHeight+"px")};if(!((r=GLOBAL_CONFIG.algolia).appId&&r.apiKey&&r.indexName))return console.error("Algolia setting is invalid!");var r=instantsearch({indexName:r.indexName,searchClient:algoliasearch(r.appId,r.apiKey),searchFunction:function(e){e.state.query&&e.search()}}),l=instantsearch.widgets.configure({hitsPerPage:5}),c=instantsearch.widgets.searchBox({container:"#algolia-search-input",showReset:!1,showSubmit:!1,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder,showLoadingIndicator:!0}),d=instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(e){var t=e.permalink||GLOBAL_CONFIG.root+e.path,a=(e=e._highlightResult).contentStripTruncate?n(e.contentStripTruncate.value):e.contentStrip?n(e.contentStrip.value):e.content?n(e.content.value):"";return'\n          <a href="'.concat(t,'" class="algolia-hit-item-link">\n          <span class="algolia-hits-item-title">').concat(e.title.value||"no-title",'</span>\n          <p class="algolia-hit-item-content">').concat(a,"</p>\n          </a>")},empty:function(e){return'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,e.query)+"</div>"}}}),u=instantsearch.widgets.stats({container:"#algolia-info > .algolia-stats",templates:{text:function(e){return e=GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS),"<hr>".concat(e)}}}),h=instantsearch.widgets.poweredBy({container:"#algolia-info > .algolia-poweredBy"}),g=instantsearch.widgets.pagination({container:"#algolia-pagination",totalPages:5,templates:{first:'<i class="fas fa-angle-double-left"></i>',last:'<i class="fas fa-angle-double-right"></i>',previous:'<i class="fas fa-angle-left"></i>',next:'<i class="fas fa-angle-right"></i>'}});r.addWidgets([l,c,d,u,h,g]),r.start(),t(),a.addEventListener("click",s),document.querySelector("#algolia-search .search-close-button").addEventListener("click",s),window.addEventListener("pjax:complete",function(){btf.isHidden(a)||s(),t()}),window.pjax&&r.on("render",function(){window.pjax.refresh(document.getElementById("algolia-hits"))})});