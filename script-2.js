/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/
<script type="text/javascript">
  <!--
  var imlocation = "images/";
var currentdate = 0;
var image_number = 0;
function ImageArray (n) {
  this.length = n;
  for (var i =1; i <= n; i++) {
    this[i] = ' '
  }
}
image = new ImageArray(3)
image[0] = 'https://mypetnannyblog.files.wordpress.com/2014/01/potty-training-your-puppy.jpg'
image[1] = 'https://data.whicdn.com/images/191836471/original.jpg'
image[2] = 'https://i2-prod.mirror.co.uk/incoming/article9109317.ece/ALTERNATES/s615/I161023_120243_10298636oTextTRMRMMGLPICT000103055634o.jpg'
var rand = 60/image.length
function randomimage() {
  currentdate = new Date()
  image_number = currentdate.getSeconds()
  image_number = Math.floor(image_number/rand)
  return(image[image_number])
}
document.write("<img src='" + imlocation + randomimage()+ "'>");
//-->
</script>