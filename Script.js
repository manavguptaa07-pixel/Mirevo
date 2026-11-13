const WA="919322610554";
document.getElementById("yr").textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach((el,i)=>{el.style.transitionDelay=(i%4)*70+"ms";io.observe(el)});
const phone=document.getElementById("ph");if(phone)phone.addEventListener("input",()=>{phone.value=phone.value.replace(/\D/g,"").slice(0,10)});
const form=document.getElementById("f");if(form)form.addEventListener("submit",e=>{
  e.preventDefault();
  const g=id=>document.getElementById(id).value.trim(),err=document.getElementById("err");
  if(g("nm").length<2)return err.textContent="Please enter your name.";
  if(!/^[6-9]\d{9}$/.test(g("ph")))return err.textContent="Enter a valid 10-digit mobile number.";
  err.textContent="";
  const msg=`Hello Mirevo German Academy 👋\nI want to enroll / enquire.\n\nName: ${g("nm")}\nMobile: ${g("ph")}\nCourse: ${g("co")}\nGoal: ${g("gl")}${g("ms")?"\nMessage: "+g("ms"):""}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
});
const bg=document.querySelector(".burger"),nv=document.querySelector("header nav");
if(bg){bg.addEventListener("click",()=>{const o=nv.classList.toggle("open");bg.setAttribute("aria-expanded",o);bg.textContent=o?"✕":"☰"})}
/* rotating hero words */
(()=>{const el=document.getElementById("rot");if(!el||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
const w=["global career","study abroad plan","work abroad dream","bright future"];let i=0;
setInterval(()=>{el.classList.add("out");setTimeout(()=>{i=(i+1)%w.length;el.textContent=w[i];el.classList.remove("out")},350)},2800)})();
/* prefill course on contact page */
(()=>{const p=new URLSearchParams(location.search).get("course"),co=document.getElementById("co");
if(p&&co){const o=[...co.options].find(x=>x.text.toLowerCase().startsWith(p.toLowerCase()));if(o)co.value=o.text}})();
/* flashcards */
(()=>{const fc=document.getElementById("fc");if(!fc)return;
const W=[["Hallo","Hello","A1 · Greeting"],["Guten Morgen","Good morning","A1 · Greeting"],["Danke schön","Thank you very much","A1 · Polite"],["Wie geht’s?","How are you?","A1 · Conversation"],["Ich lerne Deutsch","I am learning German","A1 · Sentence"],["Ich möchte in Deutschland studieren","I want to study in Germany","A2 · Your goal"],["Bitte","Please / You are welcome","A1 · Polite"],["Auf Wiedersehen","Goodbye","A1 · Greeting"]];
let i=0;const d=document.getElementById("dots");d.innerHTML=W.map(()=>"<i></i>").join("");
function show(){fc.classList.remove("flip");const w=W[i];setTimeout(()=>{de.textContent=w[0];en.textContent=w[1];lvl.textContent=w[2]},i?250:0);[...d.children].forEach((x,k)=>x.classList.toggle("on",k===i))}
const flip=()=>fc.classList.toggle("flip");
fc.onclick=flip;fc.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();flip()}};
nxt.onclick=()=>{i=(i+1)%W.length;show()};
if(!("speechSynthesis"in window))say.style.display="none";
say.onclick=()=>{const u=new SpeechSynthesisUtterance(W[i][0]);u.lang="de-DE";u.rate=.85;speechSynthesis.cancel();speechSynthesis.speak(u)};
show()})();
/* course finder */
(()=>{const g1=document.getElementById("g1");if(!g1)return;
let goal=null,lvl=null;const res=document.getElementById("res"),q2=document.getElementById("q2");
function pick(box,btn){[...box.children].forEach(c=>c.classList.toggle("on",c===btn))}
function out(){const de=goal==="study"||goal==="work";
 if(!goal||(de&&lvl===null)){res.classList.remove("show");return}
 let t,x,c;
 if(de){if(lvl==="2"){t="German B2 with exam preparation";x="You already know the basics. We will place you at the right level and prepare you for Goethe or TELC.";c="German B2"}
  else{t="German A1 to B2 for ₹5,999";x=lvl==="0"?"Start from zero. The full course takes you from A1 to B2 with Goethe and TELC exam preparation.":"We will check your level and start from A2 or the right point. Full A1 to B2 course with exam preparation.";c="German A1 to B2 (₹5,999)"}}
 else if(goal==="health"){t="OET or DHA preparation";x="Exam preparation for healthcare professionals. Many also add German to work in Germany.";c="OET"}
 else if(goal==="ielts"){t="IELTS preparation";x="Focused training for all four IELTS sections.";c="IELTS"}
 else{t="Spanish, French or English";x="Tell us which language you want. We will share fees and batch timings.";c="Spanish"}
 rt.textContent=t;rd.textContent=x;rb.href="Contact.html?course="+encodeURIComponent(c);
 rw.href="https://wa.me/919322610554?text="+encodeURIComponent("Hello Mirevo German Academy, I am interested in: "+t);
 res.classList.add("show")}
g1.onclick=e=>{const b=e.target.closest(".chip");if(!b)return;goal=b.dataset.v;pick(g1,b);q2.style.display=(goal==="study"||goal==="work")?"block":"none";out()};
document.getElementById("g2").onclick=e=>{const b=e.target.closest(".chip");if(!b)return;lvl=b.dataset.v;pick(e.currentTarget,b);out()};
q2.style.display="none"})();