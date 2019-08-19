 /*自动下拉补全 zhk */
   var highlightindex=-1;//当前高亮的节点
  $(document).ready(function(){//自动执行的函数 
//	  for (var i=1;i<=4 ;i++ )
//	  {
//		  document.getElementById("+i+").style.display="none";
//	  }

  var wordInput=$("#word");//input文本框
  var wordInputOffset=wordInput.offset();//offset() 方法返回或设置匹配元素相对于文档的偏移（位置）
 
   $("#auto").hide().css("border","1px black solid").css("position","absolute")//改变下拉框的位置，都是相对于input而言
    .css("top",wordInputOffset.top+wordInput.height()+10+"px")
    .css("left",wordInputOffset.left+"px").width(wordInput.width()+2);
 
  wordInput.keyup(function (event){//文本框键入事件控制
 
    var myEvent=event||window.event;
    var keyCode=myEvent.keyCode;
    if(keyCode>=65&&keyCode<=90||keyCode==8||keyCode==46){//分别对应 A.<Z.backspace.delete
 
     var wordText=$("#word").val();
      var autoNode=$("#auto");
     if(wordText!=""){
     
        
       var wordNodes=$("span");
       
       autoNode.html("");
       wordNodes.each(function(i){//为所有的匹配元素配置动作
          var wordNode=$(this);
          var newDivNode=$("<div>").attr("id",i);//设置属性值
           
          newDivNode.html(wordNode.text()).appendTo(autoNode);
          newDivNode.mouseover(function(){//鼠标进入
            if(highlightindex!=-1){
               $("#auto").children("div").eq(highlightindex)
               .css("background-color","white");
             }
             highlightindex=$(this).attr("id");
             $(this).css("background-color","red");
           })
 
           newDivNode.mouseout(function(){//鼠标移除
             $(this).css("background-color","white");
            
             })
newDivNode.click(function(){//点击
             var comText=$(this).text();
             $("#auto").hide();
          highlightindex=-1;
          $("#word").val(comText);
             })
 
        })
        if(wordNodes.length>0){
          autoNode.show();
        }else{
          autoNode.hide();
          highlightindex=-1;
         }
      
     }else{
      autoNode.hide();
        highlightindex=-1;
       }
	 }
//     else if(keyCode==38||keyCode==40){
//         if(keyCode==38){//向上
//            var autoNodes=$("#auto").children("div");
//             if(highlightindex!=-1){
//                autoNodes.eq(highlightindex).css("background-color","white");
//                 highlightindex--;
//              }else{
//                highlightindex=autoNodes.length-1;
//              }
//              
//              if(highlightindex==-1){
//                highlightindex=autoNodes.length-1;
//              }
//              autoNodes.eq(highlightindex).css("background-color","red");
//          }
//          if(keyCode==40){
//           var autoNodes=$("#auto").children("div");
//             if(highlightindex!=-1){
//                autoNodes.eq(highlightindex).css("background-color","white");
//              }
//              highlightindex++;
//              if(highlightindex==autoNodes.length){
//                highlightindex=0;
//              }
//              autoNodes.eq(highlightindex).css("background-color","red");
//          }
//      }else if(keyCode==13){
//         
//        if(highlightindex!=-1){
//          var comText=$("#auto").hide().children("div").eq(highlightindex).text();
//          highlightindex=-1;
//          $("#word").val(comText);
//          }else{
//            alert("文本框中的【"+$("#word").val()+"】被提交了");
//            $("#auto").hide();
//             $("#word").get(0).blur();//失去焦点
//          }
//       }
   });
 
   $("#submit").click(function(){
     alert("文本框中的【"+$('#word').val()+"】被提交了");
   });
 
 
})