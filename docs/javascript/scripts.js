// SELF-UPDATING TABLE OF CONTENTS (JQUERY)
// jQuery(document).ready(function( $ ){
var ToC = "" +
  "<ul class='toc'>";
var newLine, el, title, link;


var all = $("#content-column").find("h1, h2, h3, h4, h5, h6");
all.each(function(){
  // docmap.append( this.innerHTML );
  title = $(this).text();
  link = "#" + $(this).attr("id");

  newLine =
    "<li class='toc toc-" + $(this).get(0).tagName +
      "'><a href='" + link + "'><div style='width:100%; height: 100%;'>" +
        title +
      "</div></a>" +
    "</li>";
  ToC += newLine;
});


ToC +=
   "</ul>" +
  "";

$(".sidebar").prepend(ToC);

// });
