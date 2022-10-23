    const screen = document.getElementById('screen');
    const del = document.getElementById('del');
    const res = document.getElementById('res');
    const equal = document.getElementById('equal');
    const toggle = document.getElementById('toggle');
    let i=1;
    document.querySelectorAll('.strokes').forEach(element => {
        
        element.addEventListener('click', event =>{
        if(screen.textContent.length < 15){
        screen.textContent = screen.textContent + element.textContent;}
        })
    })
    del.addEventListener('click', event =>{
        if(screen.textContent.slice(-1) == 0 && screen.textContent.length == 1){
            return null;
        }
    else{
        screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);

    }})
    res.addEventListener('click', event=>{
        screen.textContent = 0;
    })
    equal.addEventListener('click', event=>{
        try{
        screen.textContent = eval(screen.textContent);}
        catch(err){
            screen.textContent = "Invalid Syntax";
        }
    })
    toggle.addEventListener('click', computer);
    function computer(){
        if(i > 2){
            i = 0;
        }
        i++;
        for (let index = 1; index <= 3; index++) {
            toggle.childNodes[1].classList.remove(`poschange${index}`);

            document.querySelectorAll('.num').forEach(element => {
            element.classList.remove(`numtheme${index}`)
            })
            document.querySelectorAll('.keys').forEach(element=>{
                element.classList.remove(`keystheme${index}`)
            })
            document.querySelectorAll('.n4').forEach(element=>{
                element.classList.remove(`n4theme${index}`)
            })
            document.querySelectorAll('.n17').forEach(element=>{
                element.classList.remove(`n17theme${index}`)
            })
            document.querySelectorAll('.n18').forEach(element=>{
                element.classList.remove(`n18theme${index}`)
            })
            document.querySelectorAll('.screen').forEach(element=>{
                element.classList.remove(`screentheme${index}`)
            })
            document.querySelectorAll('.calc').forEach(element=>{
                element.classList.remove(`calctheme${index}`)
            })
            document.querySelectorAll('.theme').forEach(element=>{
                element.classList.remove(`themetheme${index}`)
            })
            document.querySelectorAll('.change').forEach(element=>{
                element.classList.remove(`changetheme${index}`)
            })
            document.querySelectorAll('.body').forEach(element=>{
                element.classList.remove(`bodytheme${index}`)
            })
            document.querySelectorAll('.ball').forEach(element=>{
                element.classList.remove(`balltheme${index}`)
            })
        
    }
        toggle.childNodes[1].classList.add(`poschange${i}`);
        document.querySelectorAll('.num').forEach(element => {
            element.classList.add(`numtheme${i}`)
        })
        document.querySelectorAll('.keys').forEach(element => {
            element.classList.add(`keystheme${i}`)
        })
        document.querySelectorAll('.n4').forEach(element=>{
            element.classList.add(`n4theme${i}`)
        })
        document.querySelectorAll('.n17').forEach(element=>{
            element.classList.add(`n17theme${i}`)
        })
        document.querySelectorAll('.n18').forEach(element=>{
            element.classList.add(`n18theme${i}`)
        })
        document.querySelectorAll('.screen').forEach(element=>{
            element.classList.add(`screentheme${i}`)
        })
        document.querySelectorAll('.calc').forEach(element=>{
            element.classList.add(`calctheme${i}`)
        })
        document.querySelectorAll('.theme').forEach(element=>{
            element.classList.add(`themetheme${i}`)
        })
        document.querySelectorAll('.change').forEach(element=>{
            element.classList.add(`changetheme${i}`)
        })
        document.querySelectorAll('.body').forEach(element=>{
            element.classList.add(`bodytheme${i}`)
        })
        document.querySelectorAll('.ball').forEach(element=>{
            element.classList.add(`balltheme${i}`)
        })
    }
