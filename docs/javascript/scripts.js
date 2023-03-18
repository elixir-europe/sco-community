// SELF-UPDATING TABLE OF CONTENTS (JQUERY)
// jQuery(document).ready(function( $ ){
var ToC = "" +
  "<ul class='toc'>";
var newLine, el, title, link;

var all = $("#content-column").find("h2, h3, h4, h5, h6");
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


// const myIframe = document.getElementById('frame1');
// const myIframe2 = myIframe.contentDocument;
// myIframe2.body.style.backgroundColor = "#ff0000";
// myIframe2.body.prepend('<link rel="stylesheet" href="{{site.baseurl}}/css/styles.css" />');

// });




function isDateBeforeToday(date) {
    return new Date(date) < new Date();
}

function active_until(date) {
    return new Date(date) < new Date();
}


console.log(Date());
var btn = document.getElementById('apply_button')
if (btn !== null) {
  if ( new Date() < new Date(btn.getAttribute('open')) ) {
    btn.textContent = "Application opens on " + btn.getAttribute('open');
    console.log("AAA");
  } else {
    if ( new Date() > new Date(btn.getAttribute('close')) ) {
      btn.textContent = "Application closed on " + btn.getAttribute('close');
      console.log("BBB");
    } else {
      btn.textContent = "Apply now ▸";
      btn.className = "active_button";
      console.log("CCC");
    }
  }
}













//
