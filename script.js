
const res = document.getElementById('res')
const btn = document.getElementById('btn')
const dadosUsuario = [];

btn.addEventListener('click' , function(){

       function calcularIdade(){
        const anoDeNascimento =new Date(document.getElementById('dataNascimento').value);
        const anoAtual = new Date();
        const idade = anoAtual.getFullYear() - anoDeNascimento.getFullYear();
        const dados = document.querySelector('.dados');


      

        if(idade >= 18){
           const nome = document.getElementById('nome').value;
           const sobrenome = document.getElementById('sobrenome').value;
           const telephone = Number(document.getElementById('phone').value);
           const cpf = Number(document.getElementById('cpf').value);
           const usuario = {
            nome:nome,
            sobrenome:sobrenome,
            idade:idade,
            telefone:telephone,
            cpf:cpf,
       
          }
          dadosUsuario.push(usuario);
          console.log(dadosUsuario);
        }
        else if(idade <= 17){
          alert('O Usuário não Pode se Cadastrar ,a Idade não é Permitida!! !');
        }
       }

       calcularIdade();
      
       
    
       const input = document.querySelectorAll('.input-entradas input') 
       let camposVazios = false;

       input.forEach(inputs =>{
        
 
         if(inputs.value.trim() === ''){
          
 event.preventDefault()
          inputs.style.backgroundColor = '#f8d7da'
          camposVazios = true
          
         }
         else{
           inputs.style.backgroundColor = ''
         }
   
       }
);
    
if(camposVazios){
        alert('Preencha todos o campos!')
       }


       
      const generoSelecionado = document.querySelectorAll('input[name="Genero"]:checked');
        if(generoSelecionado.length == 0){
          event.preventDefault()
        alert('Preencha o campo Gênero')
      }
   



      
})