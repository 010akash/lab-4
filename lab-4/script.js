// function showIt() {
//     document.getElementById("hid").style.visibility = "visible";
//   }
//   setTimeout("showIt()", 5000); 
  function validateForm() {
    var x = document.forms["myForm"]["text"].value;
    if (x == "" || x == null) {
      alert("please fill all the field?");
      return false;
    }
  }
