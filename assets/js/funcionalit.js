function funcionalit() {
    const productCart = document.querySelectorAll('.product_cart')
    let numberQtn = 1

    productCart.forEach((item) => { // Feito um forEach para pegar cada section
        const buttons = item.querySelectorAll('.button-add') // selecionei cada button com a section
        const buttonActive = item.querySelectorAll('.button-active')

        // console.log(item)

        buttons.forEach((button) => { // peguei cada button
            button.addEventListener('click', () => { // e adicionei um event listener
                button.classList.add('active_button') // adicionei a class
                
                buttonActive.forEach(btnActive => { // e em cada button active dei um display flex
                    btnActive.style.display = 'flex'
                })
            })
        })

        console.log(item)

        buttonActive.forEach(btnActive => {
            const increment = btnActive.querySelectorAll('.increment')
            const decrement = btnActive.querySelectorAll('.decrement')
            const quantity = btnActive.querySelectorAll('.quantity')
            


            increment.forEach(inc => {
                inc.addEventListener('click', () => {
                    numberQtn += 1
                    quantity.forEach(qtn => {
                            qtn.innerHTML = numberQtn
                            product_select[2] = numberQtn
                            console.log(product_select)
                        })
                })
            })

            decrement.forEach(dec => {
                dec.addEventListener('click', () => {
                    numberQtn -= 1

                    if (numberQtn < 1) {
                        buttons.forEach((btn) => btn.classList.remove('active_button'))
                        btnActive.style.display = 'none'
                    } else {
                        quantity.forEach(qtn => qtn.innerHTML = numberQtn)
                        product_select.quantity = numberQtn
                    }
                })
            })

            quantity.forEach(qtn => qtn.innerHTML = numberQtn)
        })
    })
}