$(document).ready(function(){
  $("#btn_append").on("click",function(){
    // $("p").append(" Hi~~")
    // $("p").prepend(" Hi~~")
    $("p").prepend("방가!")
    .append("Bye!~~")
  })
  $("#btn_item_prepend").on("click",function(){
    $("ol").prepend("<li>0번째 아이템</li> ")
  })
  $("#btn_item_append").on("click",function(){
    $("ol").append(" <li>4번째 아이템</li>")
  })

  $("#img_add").on("click",function(){
    let left = $("<img></img>").attr("src","./img/왼쪽.png")
    .css("width","100px")
    let right = $("<img></img>").attr("src","./img/오른쪽.png")
    .css("width","90px")
$("img").before(left).after(right)

  })

  $("#remove").on("click",function(){
    $(".del").remove()
  })
  $("#empty").on("click",function(){
    $(".del").empty()
  })
})