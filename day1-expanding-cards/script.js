document.addEventListener('DOMContentLoaded', () => {
    let panels = document.querySelectorAll('.panel');
    let activePosition = 0;
    panels.forEach((panel, index) => {
        panel.addEventListener('click', (event) => {
            if(index === activePosition) {
                return;
            }

            // revmove
            panels[activePosition].className = panels[activePosition].className.replace(/\ +?(active)\ ?/gi, '');
            // add class
            event.target.className = `${event.target.className} active`;
            activePosition = index;

            /**
             * Cach 2:
             */
            // panels[activePosition].classList.remove('active')
            // panels[index].classList.add('active') 
            // activePosition = index;
            
        })
    })
})