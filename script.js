     run_action('bwready');
      run_action('fwready');
      run_action('camready');
      var allowed = true;

      function run_action(value){
        var xmlHttp  = new XMLHttpRequest();
        var protocol  = window.location.protocol;
        var host      = window.location.host;
        var pathname  = window.location.pathname;
        url = protocol + "//" + host + pathname + "?action" + "=" + value;
        //document.getElementById("debug").innerHTML=url;
        xmlHttp.open( "GET", url, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
      }
      function set_speed(value){
        var xmlHttp  = new XMLHttpRequest();
        var protocol  = window.location.protocol;
        var host      = window.location.host;
        var pathname  = window.location.pathname;
        url = protocol + "//" + host + pathname + "?speed" + "=" + value;
        //document.getElementById("debug").innerHTML=url;
        xmlHttp.open( "GET", url, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
      }
      function keydown_event(key){
        if (event.repeat != undefined) {
          allowed = !event.repeat;
        }
        if (!allowed) return;
        allowed = false;
        if (key == 0){
          var x;
          if(window.event) { // IE8 以及更早版本
            x=event.keyCode;
          }
          else if(event.which) {// IE9/Firefox/Chrome/Opera/Safari
            x=event.which;
          }
          var keychar=String.fromCharCode(x);
        }
        else{
          keychar = key
        }
        switch(keychar){
          case 'W':
            run_action('forward')
            break;
          case 'S':
            run_action('backward')
            break;
          case 'A':
            run_action('fwleft')
            break;
          case 'D':
            run_action('fwright')
            break;
          case '&':
            run_action('camup')
            break;
          case '(':
            run_action('camdown')
            break;
          case "'":
            run_action('camright')
            break;
          case '%':
            run_action('camleft')
            break;
          case '1':
            set_speed('40')
            break;
          case '2':
            set_speed('55')
            break;
          case '3':
            set_speed('70')
            break;
          case "4":
            set_speed('85')
            break;
          case '5':
            set_speed('100')
            break;
        }
      }
      function keyup_event(key){
        allowed = true;
        if (key == 0){
          var x;
          if(window.event) { // IE8 以及更早版本
            x=event.keyCode;
          }
          else if(event.which) {// IE9/Firefox/Chrome/Opera/Safari
            x=event.which;
          }
          var keychar=String.fromCharCode(x);
        }
        else{
          keychar = key
        }
        switch(keychar){
          case 'W':
            run_action('stop')
            break;
          case 'S':
            run_action('stop')
            break;
          case 'A':
            run_action('fwstraight')
            break;
          case 'D':
            run_action('fwstraight')
            break;
          case '&':
            run_action('camready')
            break;
          case '(':
            run_action('camready')
            break;
          case "'":
            run_action('camready')
            break;
          case '%':
            run_action('camready')
            break;
        }
      }
      function forward_left(){
        run_action('forward')
        run_action('fwleft')
      }
      function forward_right(){
        run_action('forward')
        run_action('fwright')
      }
      function backward_left(){
        run_action('backward')
        run_action('fwleft')
      }
      function backward_right(){
        run_action('backward')
        run_action('fwright')
      }
      function camup_left(){
        run_action('camup')
        run_action('camleft')
      }
      function camup_right(){
        run_action('camup')
        run_action('camright')
      }
      function camdown_left(){
        run_action('camdown')
        run_action('camleft')
      }
      function camdown_right(){
        run_action('camdown')
        run_action('camright')
      }
      function stop(){
        run_action('stop')
        run_action('fwstraight')
      }

      function toggle(targetid){
        if (document.getElementById){
          target=document.getElementById(targetid);
            if (target.style.display=="block"){
              target.style.display="none";
            } else {
              target.style.display="block";
            }
        }
      }
      function tilt(){

      }function showCamera(Camera){

      }
      function inflate(){

      }
      function detach(){

      }
      function laser(){

      }
      function lights(){

      }
      function photo(){
          
      }
