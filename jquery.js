$('document').ready(function () {
   $('.on').click(function () {
      $('.onlight').show();
   });

   $('.off').click(function () {
      $('.onlight').hide();

   });
   $('.on').click(function () {
      $('.offlight').hide();
   });
   $('.off').click(function () {
      $('.offlight').show();
   });



  


   $('.classone').click(function () {
      $('.p1').text('hello developer');
      $('#p1').text('hello bangladesh');

   });
   $('.classtwo').click(function () {
      $('.p1').text('hello bangladesh');
      $('#p1').text('hello developer');
   });
   $('.classthree').click(function () {
      $('.p1').text('click the button');
      $('#p1').text('');
   });


   // mouse events open


   $('.mouse-event').click(function () {
      $('.colorcng').css('background-color', 'red');

   });
   $('.mouse-event').dblclick(function () {
      $('.colorcng').css("background-color", "blue");
   });
   $('.mouse-event').contextmenu(function () {
      $('.colorcng').css('background-color', "green");
   });
   $('.mouse-event').mouseenter(function () {
      $('.colorcng').css('background-color', "pink");
   });

   $('.mouse-event').mouseleave(function () {
      $('.colorcng').css('background-color', "yellow");
   });

   // mouse events close


   // keyboard events open

   $('body').keypress(function(){
      $(this).css('background-color', "yellow");
   });
   $('body').keyup(function(){
      $(this).css('background-color', "green");
   });
   $('body').keydown(function(){
      $(this).css ('background-color', "red");
   });
   // keybord events close\

   // form events open 
//   focus
     $('#fname, #lname, #country').focus(function(){
      $(this).css('background-color', '#d9d7d7');
   });
//  blur
   $('#fname,#lname,#country').blur(function(){
      $(this).css('background-color', '')
   });
// change
$('#country').change(function(){
   var a= $(this).val();
   $('.sre').html(a);
});

//select
$('#fname, #lname').select(function (){
   $(this).css ('background-color', '#010224');
});
   //submit
   $('.form').submit(function(){
      alert('submit done');
   });
   $("#btn").click(function () {
      $("#printarea").print();
  });
  $$(".scr1").scroll(function(){
   $("span").text( x+= 1);
 });
      
});

alert('Wellcome to the page' );