// If you define a variable anywhere outside of functions, you can call it anywhere (global)
// If your variable only exists within the function you cannot call it outside the function (local)

//Define Global Variables
var ingredientWrapper = document.querySelectorAll('#taco-wrapper p span');
console.log(ingredientWrapper) //gives node list^

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var apiResult = JSON.parse(this.responseText);
        //Code Dealing With The API Data Goes Here
        console.log(apiResult); //remove after test


        //Call Properties
          //object.property
          //object.property.name

        //Ingredient Calls
        console.log(apiResult.base_layer.name); //remove after test
        var baseLayer = document.createTextNode(apiResult.base_layer.name);
        ingredientWrapper[0].appendChild(baseLayer);

        console.log(apiResult.condiment.name);
        var condiment = document.createTextNode(apiResult.condiment.name);
        ingredientWrapper[1].appendChild(condiment);


        console.log(apiResult.mixin.name);
        var mixin = document.createTextNode(apiResult.mixin.name);
        ingredientWrapper[2].appendChild(mixin);


        console.log(apiResult.seasoning.name);
        var seasoning = document.createTextNode(apiResult.seasoning.name);
        ingredientWrapper[3].appendChild(seasoning);


        console.log(apiResult.shell.name);
        var shell = document.createTextNode(apiResult.shell.name);
        ingredientWrapper[4].appendChild(shell);


  }
};
xmlhttp.open('GET', 'http://taco-randomizer.herokuapp.com/random/', true);
xmlhttp.send();

//Objects start with curly brackets
//Labels came from objects in consol
//Array uses square brackets to access index #
