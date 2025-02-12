$(document).ready(function(){
$(".outer").mouseover(function(){
  console.log("Outer Mouse Over Event...")
})
$(".outer").mouseenter(function(){
  console.log("Outer Mouse Enter Event ...")
})
$(".inner").mouseover(function(){
  console.log("Inner Mouse Over Event...")
})
$(".inner").mouseenter(function(){
  console.log("Inner Mouse Enter Event ...")
})
// 인풋 상자가 선택되면 핑크색 
// 선택이 해제되면 노랑색
$("input[type='password']").focus(function(){
  $(this).css("background-color","pink")
})
$("input[type='password']").blur(function(){
  $(this).css("background-color","yellow")
})
})