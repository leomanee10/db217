function expandTextbox() {
    var textbox = document.getElementById("textbox");
    textbox.size = textbox.size + 1;
   }
   function expandTextbox() {
    const textbox = document.getElementById("textbox");
    textbox.size++;
   }    
   function expandTextbox() {
    $("#textbox").attr("size", function(index, attr) {
       return parseInt(attr) + 1;
    });
   }
   document.getElementById("textbox").addEventListener("click", expandTextbox);