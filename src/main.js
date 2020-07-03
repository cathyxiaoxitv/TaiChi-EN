let html = document.querySelector('#html');
let style = document.querySelector('#style');

let string=`/*Hello guys! I am gonna draw a taichi today.
*Just watch!
*First I will draw a div for taichi.
*I am gonna make a div for taichi.
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*next I am goona turn it into a cool taichi!
* Watch...*/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*Taichi is made of yin and yang. Just like white and black.*/
#div1{
 background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);}
 /*And I am gonna put two magic balls on it*/
 #div1::before{
  width:100px;
  height:100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%); 
 }
 #div1::after{
 width:100px;
  height:100px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
   background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%); 
 }
 /*Now I can spin it！*/
  #div1{
            animation:spin 1s linear infinite;
        }
`


let string2 = ``;
let n = 0;

let step = () =>{
    setTimeout(()=>{
        if(string[n] === '\n'){
            string2 += '<br>'
        }else if(string[n] === ' '){
            string2 += '&nbsp;'
        }else{
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,999999);
        html.scrollTo(0,999999);
        if(n < string.length-1){
            n = n + 1;
            step();
        }
    },10)
}

step();


