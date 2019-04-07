$(document).ready(()=>{

    

    var yboard;
    var xboard;
    var numBombs;
    // var bombsLeft;
    var firstClick = true;
    var s1;
    var s2;
    var highscore = 1000000;
    var startNext = true;

    //Start/Reset Button
    let startButt = document.createElement('button');
    $('.GameOptionsStart').after(startButt);
    startButt.innerHTML = 'Start!';
    startButt.classList.add('startButton');
    
    //Game Set-Up on START
    $('.startButton').click((e)=>{
    numBombs = 0;
    if (startNext == true) {
    yboard = parseInt(document.getElementById('why').value);
    xboard = parseInt(document.getElementById('ex').value);
    numBombs = document.getElementById('bombs').value;
    if (xboard < 8) {
        xboard = 8;
    }
    if (xboard > 40) {
        xboard = 40;
    }
    if (yboard < 8) {
        yboard = 8;
    }
    if (yboard > 30) {
        yboard = 30;
    }
    if (numBombs < 1) {
        numBombs = 1;
    }
    if (numBombs > (xboard*yboard - 1)) {
        numBombs = (xboard*yboard - 1);
    }
    // bombsLeft =  document.getElementById('bombs').value;

    //Create Board
    for (i=0; i<yboard; i++) {
        let rowDiv = document.createElement('div');
        $(rowDiv).addClass('row');
        $('.Board').append(rowDiv);
    }
    for (i=0; i<xboard; i++) {
        let button = document.createElement('button');
        $(button).addClass('gameButton');
        $('.row').append(button);
    }
    let buttons = $('.gameButton');
    bombsAdded = 0;
    let ratio = (numBombs/(xboard*yboard));
    for (i=0; i<buttons.length; i++) {
        let boolin = Math.random();
        if (boolin<(ratio)) {
            if (bombsAdded < numBombs) {
                $(buttons[i]).addClass('bomb');
                bombsAdded = bombsAdded + 1;
            }
        }
    }
    nope = 0;
    while (bombsAdded < numBombs) {
        let poo = (xboard*yboard - 1);
        if (!buttons[poo].classList.contains('bomb')) {
            $(buttons[poo]).addClass('bomb');
                bombsAdded = bombsAdded + 1;
        }
        poo = poo - 1;
        nope++;
        if (nope>1000) {
            break;
        }
    }
    //assign values to buttons.
    let exx = parseInt(xboard);
    let whyy = parseInt(yboard);
    for (i=0; i<buttons.length; i++) {
        let val = 0;
        if (buttons[i].classList.contains('bomb')) {
            buttons[i].value = 'X';
        } else {
        
            if (i==0) {
                if (buttons[1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[exx].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[exx+1].classList.contains('bomb')) {
                    val = val + 1;
                }
            } else if (i>0 && i<(exx-1)) {
                if (buttons[i-1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+exx+1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+exx].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+exx-1].classList.contains('bomb')) {
                    val = val + 1;
                }
            } else if (i==exx-1) {
                if (buttons[i-1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+exx-1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+exx].classList.contains('bomb')) {
                    val = val + 1;
                }
            } else if (i==(exx*(whyy - 1))) {
                if (buttons[i-exx].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i-exx+1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+1].classList.contains('bomb')) {
                    val = val + 1;
                }
            } else if (i>(exx*(whyy - 1)) && i<((exx*whyy)-1)) {
                if (buttons[i-1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i-exx-1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i-exx].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i-exx+1].classList.contains('bomb')) {
                    val = val + 1;
                }
            } else if (i==((exx*whyy)-1)) {
                if (buttons[i-exx].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i-exx-1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i-1].classList.contains('bomb')) {
                    val = val + 1;
                }
            } else if (i%exx==0) {
                if (buttons[i-exx].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i-exx+1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+exx+1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+exx].classList.contains('bomb')) {
                    val = val + 1;
                }
            } else if (i%exx==(exx-1)) {
                if (buttons[i-exx].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i-exx-1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i-1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+exx-1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+exx].classList.contains('bomb')) {
                    val = val + 1;
                }
            } else {
                if (buttons[i-exx-1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i-exx].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i-exx+1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i-1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+exx-1].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+exx].classList.contains('bomb')) {
                    val = val + 1;
                }
                if (buttons[i+exx+1].classList.contains('bomb')) {
                    val = val + 1;
                }
            }
            if (val==0) {
                buttons[i].value = '';
            } else {
                buttons[i].value = val;      
            }
            
        }
    }    
        startButt.innerHTML = 'Reset';
        startNext = false;
    } else {
        var myNode = document.getElementById('Board');
        let nope = 0;
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
            nope++;
            if (nope>1000) {
                break;
            }
        }
        startNext = true;
        startButt.innerHTML = 'Start';
    }
    $("#bombsLeft").empty();
    $("#bombsLeft").append("Bombs Remaining: " + numBombs);
    })

    //Helper Function
    function getType(a) {
        let type = 0;
        if (a==0) {
            type = 1;
        } else if (a>0 && a<(xboard-1)) {
            type = 2;
        } else if (a==xboard-1) {
            type = 3;
        } else if (a==(xboard*(yboard - 1))) {
            type = 7;
        } else if (a>(xboard*(yboard - 1)) && a<((xboard*yboard)-1)) {
            type = 8;
        } else if (a==((xboard*yboard)-1)) {
            type = 9;
        } else if (a%xboard==0) {
            type = 4;
        } else if (a%xboard==(xboard-1)) {
            type = 6;
        } else {
            type = 5;
        }
        if (a > ((xboard*yboard)-1)) {
            type = 0;
        } 
        if (a < 0) {
            type = 0;
        }
        if (type == 0) {
            return new Array(9);
        } else if (type == 1) {
            return new Array(5,7,8);
        } else if (type == 2) {
            return new Array(4,5,6,7,8);
        } else if (type == 3) {
            return new Array(4,6,7);
        } else if (type == 7) {
            return new Array(2,3,5);
        } else if (type == 8) {
            return new Array(1,2,3,4,5);
        } else if (type == 9) {
            return new Array(1,2,4);
        } else if (type == 4) {
            return new Array(2,3,5,7,8);
        } else if (type == 6) {
            return new Array(1,2,4,6,7);
        } else 
            return new Array(1,2,3,4,5,6,7,8);
    }


    $(document).on('click', '.gameButton', function(e) {

        let buttons = $('.gameButton');
        if (firstClick == true) {
            firstClick = false;
            date = new Date();
            s1 = date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();
        }

        if (e.shiftKey) {
            if (e.target.classList.contains('flag')) {
                e.target.classList.remove('flag');
                numBombs = numBombs+1;
                $("#bombsLeft").empty();
                $("#bombsLeft").append("Bombs Remaining: " + numBombs);
            } else {
                e.target.classList.add('flag');
                numBombs = numBombs-1;
                $("#bombsLeft").empty();
                $("#bombsLeft").append("Bombs Remaining: " + numBombs);
            }
        } else {
            if (e.target.classList.contains('bomb')) {
                if (!e.target.classList.contains('flag')) {
                    alert('ya dead... press reset');
                }
                
            } else {
                if (e.target.classList.contains('show')) {
                    let eye = 0;
                    for (i=0; i<buttons.length; i++) {
                        if (buttons[i] == e.target) {
                            eye = i;
                        }
                    }
                    let itype = getType(eye);
                    flagNum = 0;
                    bombNum = 0;
                    lost = false;
                    for (i=0; i<itype.length; i++) {
                        switch(itype[i]) {
                            case 1: 
                            if (buttons[eye-xboard-1].classList.contains('bomb')) {
                                bombNum++;
                            } 
                            if (buttons[eye-xboard-1].classList.contains('flag')) {
                                flagNum++;
                            } 
                                break;
                            case 2: 
                            if (buttons[eye-xboard].classList.contains('bomb')) {
                                bombNum++;
                            } 
                            if (buttons[eye-xboard].classList.contains('flag')) {
                                flagNum++;
                            } 
                                break;
                            case 3: 
                            if (buttons[eye-xboard+1].classList.contains('bomb')) {
                                bombNum++;
                            } 
                            if (buttons[eye-xboard+1].classList.contains('flag')) {
                                flagNum++;
                            } 
                                break;
                            case 4: 
                            if (buttons[eye-1].classList.contains('bomb')) {
                                bombNum++;
                            } 
                            if (buttons[eye-1].classList.contains('flag')) {
                                flagNum++;
                            }
                                break;
                            case 5: 
                            if (buttons[eye+1].classList.contains('bomb')) {
                                bombNum++;
                            } 
                            if (buttons[eye+1].classList.contains('flag')) {
                                flagNum++;
                            }
                                break;   
                            case 6: 
                            if (buttons[eye+xboard-1].classList.contains('bomb')) {
                                bombNum++;
                            } 
                            if (buttons[eye+xboard-1].classList.contains('flag')) {
                                flagNum++;
                            }
                                break;
                            case 7: 
                            if (buttons[eye+xboard].classList.contains('bomb')) {
                                bombNum++;
                            } 
                            if (buttons[eye+xboard].classList.contains('flag')) {
                                flagNum++;
                            } 
                                break;
                            case 8: 
                            if (buttons[eye+xboard+1].classList.contains('bomb')) {
                                bombNum++;
                            } 
                            if (buttons[eye+xboard+1].classList.contains('flag')) {
                                flagNum++;
                            }
                                break;    
                            default:
                                break;
                        }
                        if (bombNum != flagNum) {
                            lost = true;
                        }
                    }
                    if (bombNum == flagNum) {
                            for (i=0; i<itype.length; i++) {
                                switch(itype[i]) {
                                    case 1: 
                                    if (buttons[eye-xboard-1].classList.contains('flag')) {

                                    } else {
                                        if (buttons[eye-xboard-1].classList.contains('show')) {

                                        } else {
                                            buttons[eye-xboard-1].classList.add('show');
                                            buttons[eye-xboard-1].innerHTML = buttons[eye-xboard-1].value;
                                        }
                                    }
                                        break;
                                    case 2: 
                                    if (buttons[eye-xboard].classList.contains('flag')) {
                                        
                                    } else {
                                        if (buttons[eye-xboard].classList.contains('show')) {
                                        
                                        } else {
                                            buttons[eye-xboard].classList.add('show');
                                            buttons[eye-xboard].innerHTML = buttons[eye-xboard].value;
                                        }
                                    }
                                        break;
                                    case 3: 
                                    if (buttons[eye-xboard+1].classList.contains('flag')) {

                                    } else {
                                        if (buttons[eye-xboard+1].classList.contains('show')) {

                                        } else {
                                            buttons[eye-xboard+1].classList.add('show');
                                            buttons[eye-xboard+1].innerHTML = buttons[eye-xboard+1].value;
                                        }
                                    }
                                        break;
                                    case 4: 
                                    if (buttons[eye-1].classList.contains('flag')) {

                                    } else {
                                        if (buttons[eye-1].classList.contains('show')) {

                                        } else {
                                            buttons[eye-1].classList.add('show');
                                            buttons[eye-1].innerHTML = buttons[eye-1].value;
                                        }
                                    }
                                        break;
                                    case 5: 
                                    if (buttons[eye+1].classList.contains('flag')) {

                                    } else {
                                        if (buttons[eye+1].classList.contains('show')) {

                                        } else {
                                            buttons[eye+1].classList.add('show');
                                            buttons[eye+1].innerHTML = buttons[eye+1].value;
                                        }
                                    }
                                        break;   
                                    case 6: 
                                    if (buttons[eye+xboard-1].classList.contains('flag')) {

                                    } else {
                                        if (buttons[eye+xboard-1].classList.contains('show')) {

                                        } else {
                                            buttons[eye+xboard-1].classList.add('show');
                                            buttons[eye+xboard-1].innerHTML = buttons[eye+xboard-1].value;
                                        }
                                    }
                                        break;
                                    case 7: 
                                    if (buttons[eye+xboard].classList.contains('flag')) {

                                    } else {
                                        if (buttons[eye+xboard].classList.contains('show')) {

                                        } else {
                                            buttons[eye+xboard].classList.add('show');
                                            buttons[eye+xboard].innerHTML = buttons[eye+xboard].value;
                                        }
                                    }
                                        break;
                                    case 8: 
                                    if (buttons[eye+xboard+1].classList.contains('flag')) {

                                    } else {
                                        if (buttons[eye+xboard+1].classList.contains('show')) {

                                        } else {
                                            buttons[eye+xboard+1].classList.add('show');
                                            buttons[eye+xboard+1].innerHTML = buttons[eye+xboard+1].value;
                                        }
                                    }
                                        break;    
                                    default:
                                        break;
                                }
                            }
                            if (lost == true) {
                                alert('ya dead homie, press reset');
                            }
                    }

                } else {
                    if (e.target.classList.contains('flag')) {

                    } else {
                    e.target.classList.add('show');
                    e.target.innerHTML = e.target.value;
                    let eye = 0;
                    let buttons = $('.gameButton');
                    for (i=0; i<buttons.length; i++) {
                        if (buttons[i] == e.target) {
                            eye = i;
                        }
                    }
                    if (e.target.value == '') {
                        let myZeroSet = new Set();
                        let usedSet = new Set();
                        myZeroSet.add(eye);
                        
                        while (myZeroSet.size>usedSet.size) {
                            let eyetype = getType(eye);
                            for (i=0; i<eyetype.length; i++) {
                                switch(eyetype[i]) {
                                    case 1: 
                                    if (buttons[eye-xboard-1].classList.contains('show')) {

                                    } else {
                                        if (buttons[eye-xboard-1].value == '') {
                                                myZeroSet.add(eye-xboard-1);
                                        }
                                        buttons[eye-xboard-1].classList.add('show');
                                        buttons[eye-xboard-1].innerHTML = buttons[eye-xboard-1].value;
                                    }
                                        break;
                                    case 2: 
                                    if (buttons[eye-xboard].classList.contains('show')) {
                                        
                                    } else {
                                        if (buttons[eye-xboard].value == '') {
                                            myZeroSet.add(eye-xboard);
                                        }
                                        buttons[eye-xboard].classList.add('show');
                                        buttons[eye-xboard].innerHTML = buttons[eye-xboard].value;
                                    }
                                        break;
                                    case 3: 
                                    if (buttons[eye-xboard+1].classList.contains('show')) {

                                    } else {
                                        if (buttons[eye-xboard+1].value == '') {
                                            myZeroSet.add(eye-xboard+1);
                                        }
                                        buttons[eye-xboard+1].classList.add('show');
                                        buttons[eye-xboard+1].innerHTML = buttons[eye-xboard+1].value;
                                    }
                                        break;
                                    case 4: 
                                    if (buttons[eye-1].classList.contains('show')) {

                                    } else {
                                        if (buttons[eye-1].value == '') {
                                            myZeroSet.add(eye-1);
                                        }
                                        buttons[eye-1].classList.add('show');
                                        buttons[eye-1].innerHTML = buttons[eye-1].value;
                                    }
                                        break;
                                    case 5: 
                                    if (buttons[eye+1].classList.contains('show')) {

                                    } else {
                                        if (buttons[eye+1].value == '') {
                                            myZeroSet.add(eye+1);
                                        }
                                        buttons[eye+1].classList.add('show');
                                        buttons[eye+1].innerHTML = buttons[eye+1].value;
                                    }
                                        break;   
                                    case 6: 
                                    if (buttons[eye+xboard-1].classList.contains('show')) {

                                    } else {
                                        if (buttons[eye+xboard-1].value == '') {
                                            myZeroSet.add(eye+xboard-1);
                                        }
                                        buttons[eye+xboard-1].classList.add('show');
                                        buttons[eye+xboard-1].innerHTML = buttons[eye+xboard-1].value;
                                    }
                                        break;
                                    case 7: 
                                    if (buttons[eye+xboard].classList.contains('show')) {

                                    } else {
                                        if (buttons[eye+xboard].value == '') {
                                            myZeroSet.add(eye+xboard);
                                        }
                                        buttons[eye+xboard].classList.add('show');
                                        buttons[eye+xboard].innerHTML = buttons[eye+xboard].value;
                                    }
                                        break;
                                    case 8: 
                                    if (buttons[eye+xboard+1].classList.contains('show')) {

                                    } else {
                                        if (buttons[eye+xboard+1].value == '') {
                                            myZeroSet.add(eye+xboard+1);
                                        }
                                        buttons[eye+xboard+1].classList.add('show');
                                        buttons[eye+xboard+1].innerHTML = buttons[eye+xboard+1].value;
                                    }
                                        break;    
                                    default:
                                        break;
                                }
                            }
                            usedSet.add(eye);
                        
                            if (myZeroSet.size>usedSet.size) {
                                let it = myZeroSet.values();
                                let x = it.next();
                                for (i=0; i<myZeroSet.size; i++) {
                                    if (!usedSet.has(x.value)) {
                                        eye = x.value;
                                    }
                                    x = it.next();
                                }
                            }
                        }



                        
                    }
                    }
                }
                
            }

        }
        if (numBombs == 0) {
            let a = xboard*yboard;
            let b = 0;
            for (i=0; i<buttons.length; i++) {
                if (buttons[i].classList.contains('bomb') || buttons[i].classList.contains('show')) {
                    b++;
                }
            }
            if (a == b) {
                date = new Date();
                s2 = date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();
                time = s2-s1;
                if (highscore > time) {
                    highscore = time;
                    alert('You are a winner! Go you!');
                }
                else {
                    alert('you did not beat the highscore... loser.');
                }
                $('.time')[0].innerHTML = 'best time: ' + highscore + 'seconds';
                firstClick = true;
            } 
        }

     });
    
    
          
    

    
    
    
    




})