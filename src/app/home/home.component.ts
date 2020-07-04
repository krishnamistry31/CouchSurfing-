import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#img1").hover(function(){
        $("#pname").text("Hallstatt, Austria");
        $(this).addClass("imghover");
      },
      function(){
        $("#pname").text("");
        $(this).removeClass("imghover");
      });
      $("#img1").click(function(){
        window.location.href="http://localhost:4200/hosts"
      });

      $("#img2").hover(function(){
        $("#pname2").text("Plitvice Lake");
        $(this).addClass("imghover");
      },
      function(){
        $("#pname2").text("");
        $(this).removeClass("imghover");
      });
      $("#img2").click(function(){
        window.location.href="http://localhost:4200/hosts"
      });

      $("#img3").hover(function(){
        $("#pname3").text("Secret Lagoon");
        $(this).addClass("imghover");
      },
      function(){
        $("#pname3").text("");
        $(this).removeClass("imghover");
      });
      $("#img3").click(function(){
        window.location.href="http://localhost:4200/hosts"
      });

      $("#img4").hover(function(){
        $("#pname4").text("Strasbourg, France");
        $(this).addClass("imghover");
      },
      function(){
        $("#pname4").text("");
        $(this).removeClass("imghover");
      });
      $("#img4").click(function(){
        window.location.href="http://localhost:4200/hosts"
      });

      $("#img5").hover(function(){
        $("#pname5").text("Milan, Italy");
        $(this).addClass("imghover");
      },
      function(){
        $("#pname5").text("");
        $(this).removeClass("imghover");
      });
      $("#img5").click(function(){
        window.location.href="http://localhost:4200/hosts"
      });

      $("#img6").hover(function(){
        $("#pname6").text("Mount Fuji");
        $(this).addClass("imghover");
      },
      function(){
        $("#pname6").text("");
        $(this).removeClass("imghover");
      });
      $("#img6").click(function(){
        window.location.href="http://localhost:4200/hosts"
      });

      $("#img7").hover(function(){
        $("#pname7").text("Moscow, Russia");
        $(this).addClass("imghover");
      },
      function(){
        $("#pname7").text("");
        $(this).removeClass("imghover");
      });
      $("#img7").click(function(){
        window.location.href="http://localhost:4200/hosts"
      });

      $("#img8").hover(function(){
        $("#pname8").text("San Francisco, California");
        $(this).addClass("imghover");
      },
      function(){
        $("#pname8").text("");
        $(this).removeClass("imghover");
      });
      $("#img8").click(function(){
        window.location.href="http://localhost:4200/hosts"
      });

      $("#img9").hover(function(){
        $("#pname9").text("Rakotzbrucke, Germany");
        $(this).addClass("imghover");
      },
      function(){
        $("#pname9").text("");
        $(this).removeClass("imghover");
      });
      $("#img9").click(function(){
        window.location.href="http://localhost:4200/hosts"
      });
    });

  }

}
