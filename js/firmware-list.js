var postTitle=[],postUrl=[],postDate=[],postLabels=[],postNew=[],sortBy="titleasc",tocLoaded=!1,numChars=250,postFilter="",numberfeed=0;function loadtoc(n){(function(){if("entry"in n.feed){var t=n.feed.entry.length;numberfeed=t;for(var e=ii=0;e<t;e++){for(var s,o=n.feed.entry[e],l=o.title.$t,r=o.published.$t.substring(0,10),i=0;i<o.link.length;i++)if("alternate"==o.link[i].rel){s=o.link[i].href;break}for(i=0;i<o.link.length;i++)if("enclosure"==o.link[i].rel){o.link[i].href;break}var p="";if("category"in o)for(i=0;i<o.category.length;i++){var a=(p=o.category[i].term).lastIndexOf(";");-1!=a&&(p=p.substring(0,a)),postLabels[ii]=p,postTitle[ii]=l,postDate[ii]=r,postUrl[ii]=s,postNew[ii]=!!(e<1),++ii}}}})(),sortPosts(sortBy="titleasc"),sortlabel(),tocLoaded=!0,displayToc2()}function sortPosts(t){function e(t,e){var s=postTitle[t];postTitle[t]=postTitle[e],postTitle[e]=s,s=postDate[t],postDate[t]=postDate[e],postDate[e]=s,s=postUrl[t],postUrl[t]=postUrl[e],postUrl[e]=s,s=postLabels[t],postLabels[t]=postLabels[e],postLabels[e]=s,s=postNew[t],postNew[t]=postNew[e],postNew[e]=s}for(var s=0;s<postTitle.length-1;s++)for(var o=s+1;o<postTitle.length;o++)"titleasc"==t&&postTitle[s]>postTitle[o]&&e(s,o),"titledesc"==t&&postTitle[s]<postTitle[o]&&e(s,o),"dateoldest"==t&&postDate[s]>postDate[o]&&e(s,o),"datenewest"==t&&postDate[s]<postDate[o]&&e(s,o),"orderlabel"==t&&postLabels[s]>postLabels[o]&&e(s,o)}function sortlabel(){sortPosts(sortBy="orderlabel");for(var t=0,e=0;e<postTitle.length;){for(temp1=postLabels[e],firsti=t;postLabels[++t]==temp1;);if(e=t,sortPosts2(firsti,t),e>postTitle.length)break}}function sortPosts2(t,e){for(var s=t;s<e-1;s++)for(var o=s+1;o<e;o++)postTitle[s]>postTitle[o]&&(r=o,i=void 0,i=postTitle[l=s],postTitle[l]=postTitle[r],postTitle[r]=i,i=postDate[l],postDate[l]=postDate[r],postDate[r]=i,i=postUrl[l],postUrl[l]=postUrl[r],postUrl[r]=i,i=postLabels[l],postLabels[l]=postLabels[r],postLabels[r]=i,i=postNew[l],postNew[l]=postNew[r],postNew[r]=i);var l,r,i}function displayToc2(){for(var t="",e=0,s=0;s<postTitle.length;){for(temp1=postLabels[s],firsti=e;t+='<li><a href="'+postUrl[e]+"\"><svg class='icon folder'><use xlink:href='#icon-folder'></use></svg> "+postTitle[e]+"</a></li>",postLabels[++e]==temp1;);if(s=e,t+="</ul>",sortPosts2(firsti,e),s>postTitle.length)break}document.getElementById("firmware").innerHTML=t}