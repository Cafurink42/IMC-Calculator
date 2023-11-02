let $btn = document.querySelector("btn");
$btn.addEventListener('click', function(){
    let age  = document.getElementById('age').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let Calc_Imc = weight/(height*height)*10000;
    let Total = Calc_Imc.toFixed(2);//
    let status_muito_abaixo_peso = '<span style = "color:red;">Muito abaixo do peso</span>';
    let status_abaixo_peso = '<span style = "color:yellow">Abaixo do peso</span>';
    let status_normal = '<span style = "color:green;">Normal</span>';
    let status_acima = '<span style = "color:blue;">Acima</span>';
    let status_obesidade_1 = '<span style = "color:blue;">Obesidade I</span>';
    let status_obdesidade_2 = '<span style = "color:blue;">Obesidade II</span>';
    let status_not_defined = '<span style = "color:gray;">Não definido</span>';

   // let output = document.getElementById('output').innerHTML = 'Seu IMC é: ' + Calc_Imc + ' kg/m2'; //
   if (Total <= 16.9){
       document.getElementById('output').innerHTML = status_muito_abaixo_peso;
       document.getElementById('imc-output').innerHTML = Total + ' kg/m2'
   }else if (Total <= 18.4){
       document.getElementById('output').innerHTML = status_abaixo_peso;
       document.getElementById('imc-output').innerHTML = Total + ' kg/m2'

   }else if (Total <= 24.9){
       document.getElementById('output').innerHTML = status_normal;
       document.getElementById('imc-output').innerHTML = Total+ ' kg/m2'

   }else if (Total <=29.9){
       document.getElementById('output').innerHTML = status_acima;
       document.getElementById('imc-output').innerHTML = Total + ' kg/m2'

   }else if (Total <= 34.9){
    document.getElementById('output').innerHTML = status_obesidade_1;
    document.getElementById('imc-output').innerHTML = Total + ' kg/m2'

   }else if (Total <=40){
    document.getElementById('output').innerHTML = status_obdesidade_2;
    document.getElementById('imc-output').innerHTML = Total + ' kg/m2'

   }else if (weight || height == ''){
    document.getElementById('output').innerHTML = status_not_defined;
    document.getElementById('imc-output').innerHTML = status_not_defined;
}
    
});
    


