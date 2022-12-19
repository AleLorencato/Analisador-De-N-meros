function Adicionar() {
  let num = document.getElementById('txtn')
  let n = Number(num.value)

  let select = document.getElementById('sel')
  let item = document.createElement('option')
  select.appendChild(item)
  item.text = `${n}`
}
function Carregar() {
  console.log('Estou no carregar')
  const opts = document.getElementById('sel').children

  let vetor = []
  console.log('vetor vazio', vetor)
  for (let i = 1; i < opts.length; i++) {
    vetor.push(Number(opts[i].value))
  }

  vetor.sort()
  console.log('vetor depois', vetor)
  let soma = 0
  for (let s in vetor) {
    soma += vetor[s]
  }
  let m = soma / vetor.length
  let maior = Math.max.apply(null, vetor)
  let menor = Math.min.apply(null, vetor)
  // let num = document.getElementById('txtn')
  // var n = Number(num.value)
  // let numero = []
  // numero.push(n)
  let res1 = document.querySelector('div#res1')
  let res2 = document.querySelector('div#res2')
  let res3 = document.querySelector('div#res3')
  let res4 = document.querySelector('div#res4')
  let res5 = document.querySelector('div#res5')

  if (vetor.length == 0) {
    alert('ERRO ---> digite um número válido')
  } else {
    res1.innerHTML = `<p> O total de números é <b>${vetor.length}</b></p>`
    res2.innerHTML = `<p> O Maior número é <b>${maior}</b></p>`
    res3.innerHTML = `<p> O Menor número é <b>${menor}</b></p>`
    res4.innerHTML = `<p> A soma dos números é <b>${soma}</b></p>`
    res5.innerHTML = `<p> A média dos números é <b>${m}</b></p>`
  }
}
