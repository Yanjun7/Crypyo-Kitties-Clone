
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function earColor(color,code) {
    $('.cat__ear--left, .cat__ear--right, .cat__paw-left, .cat__paw-right, .cat__tail, .cat__paw-right_inner, .cat__paw-left_inner').css('background', '#' + color)  //This changes the color of the cat
    $('#earcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function eyeColor(color,code) {
    $('.pupil-left, .pupil-right, .cat__nose').css('background', '#' + color)  //This changes the color of the cat
    $('#eyecode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function mouthColor(color,code) {
    $('.cat__mouth-contour, .cat__ear--left-inside, .cat__ear--right-inside, .cat__chest_inner, .cat__head-dots, .cat__head-dots_first, .cat__head-dots_second').css('background', '#' + color)  //This changes the color of the cat
    $('#mouthcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the cat
}


//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyename').html('Look towards Left')
            break
        case 2:
            normalEyes()
            $('#eyename').html('Round Eyes')
            roundEyes()
            break
        case 3:
            normalEyes()
            $('#eyename').html('Look Towards Right')
            lookToRight()
            break
        case 4:
            normalEyes()
            $('#eyename').html('Look Up')
            lookUp()
            break
        case 5:
            normalEyes()
            $('#eyename').html('Look At You')
            lookAtYou()
            break
        case 6:
            normalEyes()
            $('#eyename').html('Chill')
            chill()
            break
    }
}

function dotsStyle(num){
    $('#dnadotsstyle').html(num)
    switch(num){
        case 1:
            normalDots()
            $('#dotsname').html('Cute')
            break
        case 2:
            normalDots()
            $('#dotsname').html('Bad Boy')
            sideFringe()
            break
        case 3:
            normalDots()
            $('#dotsname').html('Nerd')
            nerdFringe()
            break
        case 4:
            normalDots()
            $('#dotsname').html('Bald')
            bald()
            break
        case 5:
            normalDots()
            $('#dotsname').html('Rocky')
            rock()
            break
    }
}
function animationStyle(num){
    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            $('#animationname').html("Moving Head")
            clearAnimation();
            movingHead()
            break;
        case 2:
            $('#animationname').html("Scaling Head")
            clearAnimation();
            scaleHead()
            break;
        case 3:
            $('#animationname').html("Noding Head")
            clearAnimation();
            nodHead()
            break;
        case 4:
            $('#animationname').html("Moving Tail")
            clearAnimation();
            moveTail()
            break;
        case 5:
            $('#animationname').html("Winking Eyes")
            clearAnimation();
            wink()
            break;
        case 6:
            $('#animationname').html("Moving Ears")
            clearAnimation();
            moveEars()
            break;
    }
}
function movingHead(){
    $("#head").addClass("movingHead")
    $("#ears").addClass("movingHead")
}
function scaleHead(){
    $("#head").addClass("scalingHead")
    $("#ears").addClass("scalingHead")
}
function nodHead(){
    $("#head").addClass("noddingHead")
    $("#ears").addClass("noddingHead")
}
function moveTail(){
    $("#tail").addClass("movingTail")
}
function wink(){
    $(".cat__eye--left").addClass("winking")
    $(".cat__eye--right").addClass("winking")
}
function moveEars(){
    $(".cat__ear--left").addClass("movingLeftEar")
    $(".cat__ear--right").addClass("movingRightEar")
}

function clearAnimation(){
    $("#head").removeClass("movingHead")
    $("#head").removeClass("noddingHead")
    $("#head").removeClass("scalingHead")
    $("#ears").removeClass("movingHead")
    $("#ears").removeClass("noddingHead")
    $("#ears").removeClass("scalingHead")
    $(".cat__ear--left").removeClass("movingLeftEar")
    $(".cat__ear--right").removeClass("movingRightEar")
    $(".cat__eye--left").removeClass("winking")
    $(".cat__eye--right").removeClass("winking")
    $("#tail").removeClass("movingTail")
}


async function normalEyes() {
    $('.cat__eye').find('span').css({"position": "absolute",
        "top": "30px",
        "width": "20px",
        "height": "45px",
        "border-radius": "50%",
        "z-index": "200"})
    $('.pupil-right').css({"left": "166px"})
    $('.pupil-left').css({"left": "42px"})
    
}
async function roundEyes() {
    $('.cat__eye').find('span').css({"width":"40px", "height":"48px","top": "29px"})
    // $('.pupil-right').css({"left": "166px"})
    // $('.pupil-left').css({"left": "42px"})
}
async function lookToRight() {

    $('.pupil-right').css({"left": "192px"})
    $('.pupil-left').css({"left": "67px"})
}
async function lookAtYou() {

    // $('.pupil-right').css({"left": "192px"})
    $('.pupil-left').css({"left": "67px"})
}
async function lookUp(){
    $('.cat__eye').find('span').css({"top": "29px","width": "30px","height": "25px"})
}
async function chill(){
    roundEyes()
    $('.cat__eye--left, .cat__eye--right').css('border-top', '20px solid')
    $('.cat__eye').find('span').css({"top": "47px","width": "40px","height": "30px"})
   

}


async function normalDots() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots_mid').css({ "transform": "rotate(0deg)", "position": "absolute",
    "left": "100px",
    "height": "48px",
    "top": "2px",
    "width": "14px",
    "border-radius": "20% 20% 50% 50%"})
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "position": "absolute",
    "content": '',
    "top": "2px",
    "width": "14px",    
    "height": "35px",
    "left": "75px",
    "border-radius": "50% 0 50% 50%"})
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "position": "absolute",
    "content": '',
    "top": "2px",
    "width": "14px",    
    "height": "35px",
    "left": "125px",
    "border-radius": "0 50% 50% 50%"})
}
async function sideFringe(){
    $('.cat__head-dots_mid').css({ "transform": "rotate(50deg)",
    "top": "-7px"})
    $('.cat__head-dots_first').css({ "transform": "rotate(50deg)", 
    "top": "-7px",
    "left": "70px",
    "height": "45px"})
    $('.cat__head-dots_second').css({ "transform": "rotate(50deg)", 
    "top": "-1px",
    "left": "130px"})
}
async function nerdFringe(){
    $('.cat__head-dots_mid').css({ "top": "8px"})
    $('.cat__head-dots_first').css({"transform": "rotate(45deg)", "height": "50px", "left": "65px"})
    $('.cat__head-dots_second').css({"transform": "rotate(-45deg)", "height": "50px", "left": "135px"})
}
async function bald(){
    $('.cat__head-dots_mid').css({ "height": "0px", "width": "0px"})
    $('.cat__head-dots_first').css({"height": "0px", "width": "0px"})
    $('.cat__head-dots_second').css({"height": "0px", "width": "0px"})
}
async function rock(){
    $('.cat__head-dots_first').css({ "top": "-45px", "height": "45px",
        "left": "70px",
        "border-radius": "0 0 0 180%",
        "transform": "rotate(160deg)"})

    $('.cat__head-dots_second').css({"top": "-45px", "height": "45px",
    "left": "130px",
    "border-radius": "180% 0 0 0",
    "transform": "rotate(380deg)"})

    $('.cat__head-dots_mid').css({"top": "-54px", "height": "50px",
    "border-radius": "0 0 50% 50%",
    "transform": "rotate(180deg)"})
}





function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}



async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
