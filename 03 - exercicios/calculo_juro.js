const preco = 100;
const forma_pagamento = 1;

if (forma_pagamento === 1) {
    console.log(preco - (preco * 0.10));
} else if (forma_pagamento === 2) {
    console.log(preco - (preco * 0.15));
} else if (forma_pagamento === 3) {
    console.log(preco);
} else {
    console.log(preco + (preco * 0.10));
}