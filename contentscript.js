var finishedLoading = 0;
var ti;
var n;

function getElementsByClassName(node,classname) {
  if (node.getElementsByClassName) { // use native implementation if available
    return node.getElementsByClassName(classname);
  } else {
    return (function getElementsByClass(searchClass,node) {
        if ( node == null )
          node = document;
        var classElements = [],
            els = node.getElementsByTagName("*"),
            elsLen = els.length,
            pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"), i, j;

        for (i = 0, j = 0; i < elsLen; i++) {
          if ( pattern.test(els[i].className) ) {
              classElements[j] = els[i];
              j++;
          }
        }
        return classElements;
    })(classname, node);
  }
}

function addLikeElement() { 
	var posts = getElementsByClassName(document, 'md gi');
	n = posts.length;
	for (var i = 0; i < n; i++) {
		var post = posts[i];
		var linkElements = getElementsByClassName(post, "c-G-j c-i-j-ua hl");
		var linkElement = linkElements[0].href;
		var likeIframe = '<iframe src="//www.facebook.com/plugins/like.php?href='+linkElement+'&amp;send=false&amp;layout=button_count&amp;width=200&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=tahoma&amp;height=21" scrolling="no" frameborder="0" style="border:none; width:100px; height:21px; margin-bottom:-5px" allowTransparency="true"></iframe>';

		var elements = getElementsByClassName(post, 'dl'),
		nn = elements.length;
		for (var j = 0; j < nn; j++) {
			var e = elements[j];
			var likeB = getElementsByClassName(e, "facebook-like-button");
			if (likeB.length > 0) continue;
			var separator = document.createTextNode("  -  ");
			var likeButton = document.createElement('span');//document.createTextNode("Hello. This is a new node.");
			likeButton.setAttribute("role", "button");
			likeButton.setAttribute("class", "facebook-like-button");
			likeButton.innerHTML = likeIframe;
			e.appendChild(separator);
			e.appendChild(likeButton);		
		}
	}	
}

function checkFinishLoading() {
	console.log("checkfinishloading. ");
	var posts = getElementsByClassName(document, 'md gi');
	t = posts.length;
	if (n < t) {
		addLikeElement();
		clearInterval(ti);
	}
}

function moreClicked(event) {
	var posts = getElementsByClassName(document, 'md gi');
	n = posts.length;
	ti = setInterval("checkFinishLoading();", 2000);
}

addLikeElement();

var streamDivs = getElementsByClassName(document, 'a-j hk ir');
var streamDiv = streamDivs[0];
if (streamDiv.addEventListener) {
	streamDiv.addEventListener ("click", moreClicked, false);
}

var homeDivs = getElementsByClassName(document, 'a-j c-i-j-ua Kb a-l-k Fja lQ Kb-X');
var homeDiv = homeDivs[0];
if (homeDiv.addEventListener) {
	homeDiv.addEventListener ("click", moreClicked, false);
}
