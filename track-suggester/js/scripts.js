$(document).ready(function() {
//  event.preventDefault();
  jQuery('#btn1').click(function() {
      var technology = $("#technology option:selected").val();
      var employer = $("#employer option:selected").val();
      var project = $("#project option:selected").val();
      var passion = $("#passion option:selected").val();
      var experience = $("#experience option:selected").val();
      //alert(technology  + " " + employer + project + passion + experience);
      var countA = 0;
      var countB = 0;
      var countC = 0;

      if(technology === "a")  {
        countA = countA + 1;
      } else if (technology === "b") {
        countB = countB + 1;
      } else if (technology === "c") {
        countC = countC + 1;
      }

      if(employer === "a")  {
        countA = countA + 1;
      } else if (employer === "b") {
        countB = countB + 1;
      } else if (employer === "c") {
        countC = countC + 1;
      }

      if(project === "a")  {
        countA = countA + 1;
      } else if (project === "b") {
        countB = countB + 1;
      } else if (project === "c") {
        countC = countC + 1;
      }

      if(passion === "a")  {
        countA = countA + 1;
      } else if (passion === "b") {
        countB = countB + 1;
      } else if (passion === "c") {
        countC = countC + 1;
      }

      if(experience === "a")  {
        countA = countA + 1;
      } else if (experience === "b") {
        countB = countB + 1;
      } else if (experience === "c") {
        countC = countC + 1;
      }

      //alert(countA + " " + countB + " " + countC);
      if(countA >= countB && countA >= countC) {
          alert("You've mostly selected As so you should study C#/.net!");
      } else if(countB >= countA && countB >= countC) {
          alert("You've mostly selected Bs so you should study Ruby/Rails");
      } else if(countC >= countA && countC >= countB) {
          alert("You've mostly selected Cs so you should study PHP/Drupal!");
      }
  })
});
