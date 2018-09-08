function pasCode() {
 var a = document.getElementById("js_code").value;
    var info = ["compiled_code", "warnings", "errors", "statistics"];
    var postdata = {
  js_code: a,
  compilation_level: "SIMPLE_OPTIMIZATIONS",
  output_format: "json",
  output_info: info
  };

    $.ajax({
        type: "POST",
        url: "https://closure-compiler.appspot.com/compile",
        data: postdata,
        dataType: "json",
        processdata: !0,
        traditional: !0,
        success: function(b) {
            console.log(b);
   var json = JSON.stringify(b, null, '\t');
   var j = JSON.parse(json);
            document.getElementById("js_opt").innerHTML = j.compiledCode;
            document.getElementById("hasil").innerHTML = json;
        }
    });
};

function pasClear() {
     $("textarea").val('');
     document.getElementById("hasil").innerHTML = "";
     document.getElementById("js_opt").innerHTML = "";
};
