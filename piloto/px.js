/* Píxel de Meta «GGA web» (portfolio Gabriela Gonzalo | Chamanismo Ancestral) con consentimiento previo.
   Solo se carga si la persona acepta. Uso: <script src="px.js" data-lead="1" defer></script>
   data-lead="1" manda el evento Lead al cargar la página (página de gracias). */
(function(){
  var ID='1768702265259462', LLAVE='gga-cookies', yo=document.currentScript, lead=yo&&yo.getAttribute('data-lead')==='1';
  var pend=[]; window.ggaPx=function(ev){ if(window.fbq) fbq('track',ev); else pend.push(ev); };
  function cargar(){
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
    s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init',ID); fbq('track','PageView'); if(lead) fbq('track','Lead');
    pend.forEach(function(ev){fbq('track',ev)}); pend=[];
  }
  var v=null; try{v=localStorage.getItem(LLAVE)}catch(e){}
  if(v==='si'){cargar();return;}
  if(v==='no')return;
  function aviso(){
    var d=document.createElement('div');
    d.setAttribute('role','dialog');d.setAttribute('aria-label','Cookies');
    d.style.cssText='position:fixed;left:12px;right:12px;bottom:12px;z-index:20;max-width:560px;margin:0 auto;background:#17140F;color:#F3EBDD;border-radius:14px;padding:14px 16px;font:400 14px/1.45 Inter,system-ui,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-wrap:wrap;gap:10px;align-items:center';
    var pr=(location.pathname.indexOf('/clase/')>-1?'../':'')+'privacidad.html';
    d.innerHTML='<span style="flex:1 1 260px">Uso una cookie de Meta para saber qué anuncios traen a la gente a esta clase. <a href="'+pr+'#cookies" style="color:#C9A25E">Más info</a></span>'+
      '<button type="button" data-r="no" style="background:none;border:1px solid #6B5F50;color:#F3EBDD;border-radius:999px;padding:8px 14px;font:inherit;cursor:pointer">Rechazar</button>'+
      '<button type="button" data-r="si" style="background:#A4553A;border:0;color:#fff;border-radius:999px;padding:8px 16px;font:600 14px Inter,sans-serif;cursor:pointer">Aceptar</button>';
    d.addEventListener('click',function(e){var r=e.target.getAttribute('data-r');if(!r)return;try{localStorage.setItem(LLAVE,r)}catch(x){}d.remove();if(r==='si')cargar();});
    document.body.appendChild(d);
  }
  if(document.body)aviso();else document.addEventListener('DOMContentLoaded',aviso);
})();
