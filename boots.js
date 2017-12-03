<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width = device-width, initial-scale = 1">
<title>i2K's Website </title>
<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type ='text/css'>
<link href='https://fonts.googleapis.com/css?family=Arvo' rel='stylesheet' type ='text/css'>
<style type = "text/css">

body 
{
	font-size: 62.5%;
	font-family: arial, sans-serif;

}

#i2kLogo{
	height:30%;
	width:30%;
}
#websiteTitle{
	font-size:10em;
	vertical-align: middle;
	font-family: 'Arvo';
	padding-left:15px;
	color:#191970;
	


}
#dynamindimage
{
	height:30%;
	width:30%;
	margin-left: 30%;

}
#websiteSlogan{
	font-size:5.4em;
	font-family:'Pacifico', cursive;
	text-align: center;

	
}
h1 {
	;
}
/*Carousel Styling*/
.slide1{
	background-image: url('bkgrnd1.png');
	height:500px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	}
.slide2{
	background-image: url('bkgrnd2.png');
	height:500px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
.slide3{
	background-image: url('bkgrnd3.png')
	height:500px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
.carousel-caption h1 {
	font-size:5.4em;
	font-family: 'Cookie', cursive;
padding-bottom: .4em;
}
.carousel-caption p{
	font-size: 2em;
}
</style>

<section class="demo">
  <button class="next">Next</button>
  <button class="prev">Previous</button>
  <div class="slider">
    <div style="display: inline-block;">
      <img src="http://clientwebsite.in/course/images/slider_seven.jpg"/>
    </div>
    <div>
     <img src="http://clientwebsite.in/course/images/slider_six.jpg"/>
    </div>
    <div>
      <img src="http://clientwebsite.in/course/images/slider_two.jpg"/>
    </div>
    
  </div>
</section>


</head>
<body>
<div class="container">
<div class="jumbotron">

<img src="ieee-logo.png" id = "i2kLogo" alt = "IEEE Logo">
<span id="websiteTitle"> i2K Solutions </span>
<p id="websiteSlogan"> We convert potential to performance, We care.</p>

</div>
</div>
<div class="dynamind">
<img src= "http://clientwebsite.in/course/images/logo.jpg"; id="dynamindimage" alt ="Dynamind Logo">
P </p>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js">
	
	var currentIndex = 0,
  items = $('.slider div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.slider div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var currentIndex = 0,
  items = $('.slider div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.slider div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});

</script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>


