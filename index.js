 
$(document).ready(function(){
      var first="";
      var second="";
      var ans=0;
     var x=0;//
      var arith=['add','subtract','multiply','divide'];
      var arithChoice='';//
       var next=false; 
  // used for second operand                             
       //numberic buttons                         
  var more=false;//used to accumulate
  
  for(let i=0;i<=9;i++){
    
      $(".b"+i).click(function(){
         //x++;
           if(next==false){
           first+=""+i;
        $("#operations").text(first);        }else{
       second+=""+i;
        $("#operations").text(second); 
        }
      });
    
  }// forloop
      //numbers
      
      
       $("#bC").click(function(){
        //txt+="";
         first="";
         second="";
         x=0;
         ans=0;
         more=false;//
         $("#operations").text("");       
        arithChoice="";
      });
      function clear(){
         $("#operations").text("");
        next=false;
      
      } 
  $(".decimal").click(function(){
    if(next==false){
    first+=".";
      $("#operations").text(first);
    }else{
      second+=".";
      $("#operations").text(second);
    }
  });//decimal
      
  $(".plus").click(function(){
        clear();
        next=true;
 arithChoice=arith[0];//
       x++;  
        //
      });//addition
      $(".minus").click(function(){
        clear();
        next=true;
 arithChoice=arith[1];//
   x++;  
      });//subtraction
      $(".mult").click(function(){
        clear();
        next=true;
 arithChoice=arith[2];//
   x++;  
      });//multiplication
  $(".divide").click(function(){
        clear();
        next=true;
 arithChoice=arith[3];//
   x++;  
      });//division
      
      $(".equal").click(function(){
         clear();
        
       if(more==false){
        if(arithChoice==arith[0]){
         
        ans=parseFloat(first)+ parseFloat(second);
        $("#operations").text(ans);//
        first="";
          second="";
    }else if(arithChoice==arith[1]){
      
      ans=parseFloat(first)- parseFloat(second); $("#operations").text(ans);//
      first="";
          second="";
      
      
    }// minus
     else if(arithChoice==arith[2]){
      
      ans=parseFloat(first)* parseFloat(second); $("#operations").text(ans);//
      first="";
          second="";
      
      
    }else {
      
           ans=parseFloat(first)/parseFloat(second);
 $("#operations").text(ans);//
       first="";
          second="";
      
    }   
       more=true;//           
       }
     /*  */else{
        
        
        
         if(arithChoice==arith[0]){
         
        ans+= parseFloat(second);
        $("#operations").text(ans);//
         first="";
          second="";
    }else if(arithChoice==arith[1]){
      
     ans-= parseInt(second); $("#operations").text(ans);//
       first="";
          second="";
      
      
    }// minus
     else if(arithChoice==arith[2]){
      
      ans*= parseInt(second);
       $("#operations").text(ans);//
     
       first="";
          second="";
      
    }else {
      
     ans/=parseInt(second); $("#operations").text(ans);//
      //
       first="";
          second="";
      
    }
        
        
        
      } 
     
      });
      
        
        
        
    }); // end                              
