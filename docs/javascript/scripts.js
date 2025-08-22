// ####################################################
// ###   SELF-UPDATING TABLE OF CONTENTS (JQUERY)   ###
// ####################################################
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


ToC += "</ul>" + "";
$(".sidebar").prepend(ToC);


// CHECK IF THE DATE FOR THE APPLICATION BUTTON HAS PASSED
var btn = document.getElementById('apply_button')
if (btn !== null){

  // IF THE APPLICATION HAS NOT YET OPENED, DO:
  if ( new Date() < new Date(btn.getAttribute('open')) ) {
    btn.textContent = "Application opens on " + btn.getAttribute('open');

  } else {

    // IF THE APPLICATION PERIOD HAS PASSED, DO:
    if ( new Date() > new Date(btn.getAttribute('close')) ) {
      btn.textContent = "Application closed on " + btn.getAttribute('close');

    // IF TODAY IS WITHIN THE APPLICATION WINDOW, DO:
    } else {
      btn.textContent = "Apply now ▸";
      btn.className = "active_button";
    }
  }
}





// #####################################################
// ###   FUNCCTION TO UPDATE THE NEWS ON A DIV-TAG   ###
// #####################################################
function updateNews( data , TAG ) {
  // CLear inner HTML
  document.getElementById(TAG).innerHTML  = ''

  if( data['length'] > 0 ){
    data.forEach((row) => {
      document.getElementById(TAG).innerHTML +=
          `<a title="${row.DESCRIPTION_MAX20WORDS}" id="news_link" href="${row.URL}" class="active">
            <div class="news_link">
              <p style="float: left; text-align: left; font-weight: bold;">${row.DATE_START_YYYYMMDD}</p>
              <p style="float: right;">▸</p> <br>
              <p style="float: left; text-align: left;">${row.TITLE_MAX60CHAR}</p>
            </div>
          </a>`;
    });
  };
};





// ##############################################
// ###   LOAD THE NEWS AND EVENTS .CSV FILE   ###
// ##############################################
d3.csv("pages/news/new_and_events.csv", function(data) {
  // data = data.sort((a, b) => a[0] - b[0]);
  window.ALLNEWS = data;

  // window.NEWS = window.ALLNEWS.filter(function (el) {
  //   return el.TYPE == "News" ;
  // });
  // updateNews( window.NEWS , "NEWS" )

  window.EVENTS = window.ALLNEWS.filter(function (el) {
 //   return el.TYPE <= "Event" && new Date(el.DATE_START_YYYYMMDD) >= new Date();
    return el.TYPE <= "Event";
  });
  updateNews( window.EVENTS , "EVENTS" )
});




// <a title="${row.DESCRIPTION_MAX20WORDS}" id="news_link" href="${row.URL}" class="active">
//   <div style="display: inline-block;">
//     <p style="float: left; text-align: left; font-weight: bold;">${row.DATE_START_YYYYMMDD}</p>
//     <p style="float: right;">▸</p>
//     <p style="float: right; text-align: left;">${row.TITLE_MAX60CHAR}</p>
//   </div>
// </a>
// <iframe src="${row.SCR}" width="${row.WIDTH}" height="${row.HEIGHT}"></iframe></div>`

// window.EVENTS.forEach( function(x) {
//   console.log(x)
//   // title = $(this).text();
//   // link = "#" + $(this).attr("id");
//   //
//   // newLine =
//   //   "<li class='toc toc-" + $(this).get(0).tagName +
//   //     "'><a href='" + link + "'><div style='width:100%; height: 100%;'>" +
//   //       title +
//   //     "</div></a>" +
//   //   "</li>";
//   // ToC += newLine;
// });
//


// window.onload = updateEvents();



//
