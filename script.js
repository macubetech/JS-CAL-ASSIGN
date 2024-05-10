
      function cal() {
        var opt1 = document.getElementById("first").value;
        var opt2 = document.getElementById("second").value;
        var ope = document.getElementById("ope").value;
        if (ope == "+") {
          var res = parseInt(opt1) + parseInt(opt2);
        }
        if (ope == "-") {
          var res = parseInt(opt1) - parseInt(opt2);
        }
        if (ope == "*") {
          var res = parseInt(opt1) * parseInt(opt2);
        }
        if (ope == "/") {
          var res = parseInt(opt1) / parseInt(opt2);
        }
        document.getElementById("res").value = res;
      }
 