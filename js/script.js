let slider = document.getElementById("move-slider")
let rightPos = document.getElementById("move-slider").style.right
let sliderRight = document.getElementById("slider-right")
let sliderLeft = document.getElementById("slider-left")

let x = 0
let x2 = String('translateX('+x+'px)')
let x1 = String('translateX('+x+250+'px)')
console.log(slider)


sliderRight.addEventListener('click',function(){
    slider.animate([
        { 
            transform : x2
        },
        {
            transform : x1
        }
    ],500,)
})


sliderLeft.onclick = function() { slider.style.right += "300px";}


