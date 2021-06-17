const dots1 = document.body.querySelector('#dots1')
const dots2 = document.body.querySelector('#dots2')
const dots3 = document.body.querySelector('#dots3')

function closest_prime(number) {
  let offset = 0
  let sqrt = Math.sqrt(number) + 1

  while (number + offset != 1) {
    let i = 2
    for (; i < sqrt; ++i) {
      if ((number + offset) % i == 0) {
        break
      }
    }
    if (i >= sqrt) {
      break
    }

    if (offset > 0) {
      offset = -offset
    } else {
      offset = -offset
      offset += 1
    }
  }

  return number + offset
}

{
  let boxShadow = '127px 131px #000'
  for (let i = 0; i < 5000; i += 75) {
    for (let j = 0; j < 5000; j += 75) {
      let y = closest_prime(i + Math.floor(Math.random() * 75))
      let x = closest_prime(j + Math.floor(Math.random() * 75))
      boxShadow += `, ${y}px ${x}px #000`
    }
  }
  dots1.style.boxShadow = boxShadow
}

{
  let boxShadow = '401px 401px #000'
  for (let i = 0; i < 5000; i += 125) {
    for (let j = 0; j < 5000; j += 125) {
      let y = closest_prime(i + Math.floor(Math.random() * 125))
      let x = closest_prime(j + Math.floor(Math.random() * 125))
      boxShadow += `, ${y}px ${x}px #000`
    }
  }
  dots2.style.boxShadow = boxShadow
}

{
  let boxShadow = '661px 997px 0.1px #000'
  for (let i = 0; i < 5000; i += 200) {
    for (let j = 0; j < 5000; j += 200) {
      let y = closest_prime(i + Math.floor(Math.random() * 200))
      let x = closest_prime(j + Math.floor(Math.random() * 200))
      boxShadow += `, ${y}px ${x}px 0.1px #000`
    }
  }
  dots3.style.boxShadow = boxShadow
}

console.log('script end')
