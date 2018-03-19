  // This function gives us the random number according to the password   lenght but it will give us the Password in Only Numbers.. 
    function PassGen()
    {
         var x=document.getElementById('output');
         var y= document.getElementById('input');
         var z= document.getElementById('msg');
         if(y.value=="")
             {
                 z.innerHTML='Specify the length';
             }
        var key='abcdefghijklmnopqrstuvwxyz1234567890!@#$%&';
        
     
      var val=1;
        var tmp='';
      for(var i=1;i<=y.value;i++)
         {
          
             tmp+=key.charAt(Math.trunc(Math.random()*key.length))
             
         }
          x.value=tmp;
    }


    
