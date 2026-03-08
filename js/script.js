function openVeil(){

const veil=document.getElementById("veil")

veil.classList.add("open")

setTimeout(()=>{
veil.style.display="none"
},2600)

}

const title=document.getElementById("veilTitle")

const text=title.textContent

title.innerHTML=""

let delay=0

for(let char of text){

const span=document.createElement("span")

span.className="gold-letter"
span.textContent=char

span.style.animationDelay=delay+"s"

title.appendChild(span)

delay+=0.06

}
const canvas=document.getElementById("veilParticles")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<80;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+1,
speed:Math.random()*0.3+0.1
})

}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="rgba(255,215,150,0.6)"
ctx.fill()

p.y-=p.speed

if(p.y<0){
p.y=canvas.height
p.x=Math.random()*canvas.width
}

})

requestAnimationFrame(animateParticles)

}

animateParticles()
