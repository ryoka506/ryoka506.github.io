// var appDaily = {
//   baiduSearch: function(words) {
//     var key = 'site:' + window.location.host + '%20' + words.replace(/\s/g, '%20');
//     var url = 'https://www.baidu.com/baidu?tn=baidu&ie=utf-8&word=';
//
//     window.open(url + key, '_blank');
//   },
//   googleSearch: function(words) {
//     var key = 'site:' + window.location.host + '%20' + words.replace(/\s/g, '%20');
//     var url = 'https://www.google.com/search?q=';
//
//     window.open(url + key, '_blank');
//   },
//   submitSearch: function(search_engines) {
//     var $ipt = document.getElementById('homeSearchInput');
//
//     if (search_engines === 'baidu') {
//       this.baiduSearch($ipt.value.trim());
//     } else {
//       this.googleSearch($ipt.value.trim());
//     }
//
//     return false;
//   },
//   bindToggleButton: function() {
//     var btn = document.querySelector('.menu-toggle');
//     var nav = document.querySelector('.navbar');
//
//     btn.addEventListener('click', function() {
//       var c = nav.getAttribute('class') || '';
//
//       if (c.indexOf('show-force') !== -1) {
//         nav.setAttribute('class', c.replace(/show-force/, '').trim());
//       } else {
//         nav.setAttribute('class', (c + ' show-force').trim());
//       }
//     });
//   }
// };
// //改良版本的百度索引自动推送脚本
// 	(function(){
// 		var canonicalURL, curProtocol;
// 		//Get the  tag
// 		var x=document.getElementsByTagName("link");
// 		//Find the last canonical URL
// 		if(x.length > 0){
// 			for (i=0;i<x.length;i++){
// 				if(x[i].rel.toLowerCase() == 'canonical' && x[i].href){
// 					canonicalURL=x[i].href;
// 				}
// 			}
// 		}
// 		//Get protocol
// 	    if (!canonicalURL){
// 	    	curProtocol = window.location.protocol.split(':')[0];
// 	    }
// 	    else{
// 	    	curProtocol = canonicalURL.split(':')[0];
// 	    }
// 	    //Get current URL if the canonical URL does not exist
// 	    if (!canonicalURL) canonicalURL = window.location.href;
// 	    //Assign script content. Replace current URL with the canonical URL
//     	!function(){var e=/([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi,r=canonicalURL,t=document.referrer;if(!e.test(r)){var n=(String(curProtocol).toLowerCase() === 'https')?"https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif":"//api.share.baidu.com/s.gif";t?(n+="?r="+encodeURIComponent(document.referrer),r&&(n+="&l="+r)):r&&(n+="?l="+r);var i=new Image;i.src=n}}(window);})();
//
//
//
// appDaily.bindToggleButton();
