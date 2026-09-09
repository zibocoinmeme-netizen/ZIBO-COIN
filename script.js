const nav=document.querySelector('.navlinks');
const navLinks=document.querySelectorAll('.navlinks a');
const sections=document.querySelectorAll('section,.hero-art,.hero h1,.hero-title,.actions,.tag');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('in')});
},{threshold:.08});
sections.forEach(el=>{el.classList.add('reveal');observer.observe(el)});
navLinks.forEach(link=>link.addEventListener('click',()=>nav?.classList.remove('open')));
window.addEventListener('scroll',()=>document.documentElement.style.setProperty('--scroll',window.scrollY),{passive:true});
