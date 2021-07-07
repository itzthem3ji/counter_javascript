(function(){
  const buttons = document.querySelectorAll('.counterBtn')
  let count= 0


  //Add event listeners and functionailty to each button  
  buttons.forEach(function(button){
    button.addEventListener('click', function(){
      if (count >=1){
        if(button.classList.contains('prevBtn')){
          count--
        }
      }
      if(count <=49){
          if (button.classList.contains('nextBtn')){
            count++
        }
      }

      //Select the counter text
      const counter = document.querySelector('#counter')
      counter.textContent = count

      if (count > 25){
        counter.style.color = 'green'
      } else {
        counter.style.color = 'red'
      }
    })
  })
})()