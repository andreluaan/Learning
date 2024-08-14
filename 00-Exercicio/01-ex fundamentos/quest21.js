/*
 Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */
// 1) crianças com menos de 10 anos pagam R$80;
// 2) conveniados com idade entre 10 e 30 anos pagam R$50
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95
// 4) conveniados acima de 60 anos pagam R$130
// 

const valuePlan = function(age) {
    const fixedValue = 100;

    switch(true){
        case(age <= 10) :
            console.log(`Como sua idade é ${age} anos o seu pagamento é R$${fixedValue+80}`);
            break;
        case(age >= 10 && age <= 30):
            console.log(`Como sua idade é ${age} anos o seu pagamento é R$${fixedValue+50}`);
            break;
        case(age >= 30 && age <= 60):
            console.log(`Como sua idade é ${age} anos o seu pagamento é R$${fixedValue+95}`);
            break;
        case(age >= 60):
            console.log(`Como sua idade é ${age} anos o seu pagamento é R$${fixedValue+130}`);
                break;
     }

}

valuePlan(14);
valuePlan(9);
valuePlan(43);
valuePlan(66);
valuePlan(32);
