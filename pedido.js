const key = 2; // Substitua pelo ID da bebida que você deseja recuperar

const nomeBebida = localStorage.getItem(`nome_bebidas_${key}`);
const valorBebida = localStorage.getItem(`valor_bebidas_${key}`);
const imgBebida = localStorage.getItem(`img_bebidas_${key}`);
const quantidadeBebida = localStorage.getItem(`quantidade_bebidas_${key}`);

console.log(`O nome da bebida ${key} é ${nomeBebida}`);
console.log(`O valor da bebida ${key} é ${valorBebida}`);
console.log(`A imagem da bebida ${key} é ${imgBebida}`);
console.log(`A quantidade da ${nomeBebida} é ${quantidadeBebida}`);
