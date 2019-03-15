"use strict";

$("#going-up").click(function(){
	$(this).css('font-weight', '900');
});

$(window).on("scroll touchmove", function () {
  $('#back-to-top').toggleClass('transitional', $(document).scrollTop() > 840);
});


$('#show-more').on('click',function(){
	$('.destination-ports').show();
	$('#show-more-caret').classList.toggle('going-up');
});

$('#show-more').on('mouseover',function(){
	$(this).toggleClass('')
});


// JSON for watch later list
var counter = 0;
var jsonObj = new Object();

$('.watch-later').click(function () {
   var title = $(this).parent().parent().find('.c-fyc-v2__result__content__inner').html();
   if (!(title in jsonObj)) { 

       jsonObj[title] = { 
           image: image,
           description: 'Example'
       }
       counter++;
       $('#lblCart').html(counter);
   } else {
       alert('Item already in the list');
       console.log(jsonObj[title]);
   }
});


// toggle show more on smaller screens
// function showMoreOptions(){
	//var showMoreDiv = document.getElementById("collapsable");
	//var itemToExpand = document.getElementsById("collapsable");
	// showMoreDiv.onclick(function(){
	// 	if(itemToExpand.className === ""){}
	// });
	// if (showMoreDiv.className === "filters") {
	// 	showMoreDiv += "responsive";
	// } else {
	// 	showMoreDiv.className = "filters";
	// }
//}
//$("#btn-collapse-search").click(function(){
//	$("#collapsable").hide();
//});

// $("#btn-collapse-search").click(function(){
// 	$("#collapsable").show();
// });


// $('#btn-collapse-search').click(function(){

// });