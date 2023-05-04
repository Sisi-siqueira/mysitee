//alerta robo 
const avalicao = document.getElementById('chat');
      avalicao.addEventListener('mouseenter',() => {
      window.prompt('Deseja avaliar nosso site ? ⭐⭐⭐');

});
avalicao.addEventListener('click',() => {
      window.prompt('Deseja avaliar nosso site ? ⭐⭐⭐');

});

//trasicao de personagem : silvana para comit
const checkbox = document. querySelector("#checkbox");
const avatar = document.getElementById("imgAvatar");
const h2 = document.getElementById('h2');
const p = document.getElementById('p');
const br = document.getElementById("br");


checkbox.addEventListener('click',() => {
      avatar.src = "img/logo.png";
      avatar.style.height='460px';
      h2.innerText='Hello we are Comit Dev';
      p.innerText='Somos uma pagina focada em espalhar conhecimento FRONT-END para o máximo de pessoas possível ,para conhecer melhor nosso trabalho continue a navegar.'
      br.src='img/uniao.png';
      br.style.height='160px';
     
});

//conteudos blockeados 

const block1=document.getElementById('block1');
const block2=document.getElementById('block2');

block1.addEventListener('click',() =>{
      window.alert('Infelizmente esse post ainda se encontra indisponível ! :(');
});
block2.addEventListener('click',() =>{
      window.alert('Infelizmente esse post ainda se encontra indisponível ! :(');
});

//conteiner de explicar pergunta 

const seta=document.getElementById('btseta');
const fundo=document.querySelector(".quadrado");
const perguntah2=document.getElementById('pergunta');
const resposta=document.getElementById('resposta');
const ocultarp=document.getElementById('ocultar');
const btmais=document.getElementById('mais');
const menos=document.getElementById('voltar');



seta.addEventListener('click',()=>{
      fundo.style.backgroundColor='#e27add';
      perguntah2.innerText='pergunta #01 ' +':'+' Qual linguagem você tem mais familiaridade ?'+' E por quer?';
      resposta.innerText='resposta #01'+':'+' JavaScript'+','+' Pois além de ser uma linguagem que todos os navegadores suportam '+'ela ainda é indispensável para o desenvolvimento web.';
      ocultarp.innerText='';
      seta.style.display='none';
      btmais.style.display='inline-block';
      perguntah2.style.fontSize='12px';
      perguntah2.style.margin='2px';
      resposta.style.fontSize='12px';
      resposta.style.margin='0px';
        
 });
btmais.addEventListener('click',()=>{
      fundo.style.backgroundColor='#820081';
      perguntah2.innerText='pergunta #02 '+':'+'Por que você criou uma pagina sobre conteúdos de desenvolvimento Web ?'
      resposta.innerText='responta #02'+':'+'A ideia da pagina veio porque'+', Eu queria um lugar para colocar todo o conteúdo que já havia aprendido em um local que as pessoas pudessem ver e aprender junto comigo.';
      menos.style.display='inline-block';
      seta.style.display='none';
      btmais.innerText='fim';

});


menos.addEventListener('click',()=>{
      fundo.style.backgroundColor='#914ebf';
      ocultarp.innerText='arrasta pro lado ➔ ';
      perguntah2.innerText='"Duvidas que possivelmente você tem sobre mim e a pagina.."';
      resposta.innerText='';
      seta.style.display='inline-block';
      menos.style.display='none';
      btmais.style.display='none';
});

//chatPanda
const triangulo=document.getElementById('tri');
const Pmenssagem=document.getElementById('m1');
const Pmsg=document.getElementById('m2');
const panda =document.getElementById('emocao');
const bolinha=document.getElementById('wp');
const umStart = document.getElementById('start').value;
const Start = document.getElementById('start');
const OnOf =document.getElementById('on-of');
console.log(umStart);
if(umStart==1){
  
     OnOf.innerText='on-line';
     Pmenssagem.style.display='inline-block';
     triangulo.style.display='inline-block';  
     panda.style.display='inline-block';
     Start.placeholder = "digite sim +f5 ou nao +f5";
}
    
   else{
            console.log('insira corrretamente');
            bolinha.style.display='inline-block';
            Pmenssagem.style.display='none';
            triangulo.style.display='none';
            panda.style.display='none';
                  };


if(umStart === 'sim'){
      Pmenssagem.innerText='Você poderia compartilhar minha página ? ';
      OnOf.innerText='on-line';
      Pmenssagem.style.display='inline-block';
      triangulo.style.display='inline-block';
      panda.style.display='inline-block';
      Start.placeholder = "digite ok + f5  ou nao + f5";
}
   
   else if(umStart==='nao'){
       Pmenssagem.innerText='você matou o pandinha de tristeza :(';
       Pmsg.innerText='Você quer salvar o pandinha ?'
       OnOf.innerText='on-line';
       Pmenssagem.style.display='inline-block';
       Pmsg.style.display='inline-block';
       triangulo.style.display='inline-block';1
       panda.style.display='inline-block';
       bolinha.style.display='none'
       panda.src='img/rip.png';
       Start.placeholder = "digite sim +f5 ou nao quero +f5 ";
}  else if(umStart==='nao quero'){
      Pmenssagem.innerText='Você matou o pandinha de de novo tristeza :(';
      Pmsg.innerText='Você quer salvar o pandinha ?'
      OnOf.innerText='on-line';
      Pmenssagem.style.display='inline-block';
      Pmsg.style.display='inline-block';
      triangulo.style.display='inline-block';1
      panda.style.display='inline-block';
      bolinha.style.display='none'
      panda.src='img/rip.png';
      Start.placeholder = "digite sim +f5 ou nao quero +f5 ";
}
   else{
       console.log('insira corrretamente');
                        };
if(umStart=='ok'){
      Pmenssagem.innerText='Obrigado Você fez o dia do pandinha mais feliz ,Você é incrivel :)';
      Pmsg.innerText='@comit_dev ( página do pandinha )';
      OnOf.innerText='on-line';
      Pmenssagem.style.display='inline-block';
      Pmsg.style.display='inline-block'
      triangulo.style.display='inline-block';
      panda.style.display='inline-block';
      Start.placeholder = "f5 para voltar";
      panda.src='img/happy.gif';
      

}
console.log(umStart);
