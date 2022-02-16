function load_Page(){
    $('#part_E').hide();
    $('#table_numbers').hide();
    $('#calculate1').click(click_l);
    $('#calculate2').click(click_l);
}
function click_l(){
    let x=document.getElementById('txt').value;
    if (x < 0 || x % 1 > 0 || isNaN(x) || x.length === 0) {
        $('#A_B_C_D').hide();
        $('#part_E').show();
    } else {
        let ta=document.getElementById('table_numbers');
        let table_id, row,rowCount = ta.rows.length;
        if (x > 0) {
            for (let i = 0; i < rowCount; rowCount--)
                 ta.deleteRow(i);
            $('#table_numbers').show();
            let numbers_rows = x / 10;
            table_id=document.getElementById('table_numbers');
            for (let i = 0; i < numbers_rows; i++) {
                row = document.createElement('tr');
                for (let j = (i * 10) + 1, g = 0; g < 10; j++, g++) {
                    x = document.createElement('td');
                    x.innerHTML = "" + j;
                    if(isSemiPrime(j)){
                        if(isBrilliantNumber(j))
                            x.style.backgroundColor="yellow";
                        else
                            x.style.backgroundColor="blue";
                    }
                    x.style.border = "2px solid black";
                    row.appendChild(x);
                }
                table_id.appendChild(row);
            }
            table_id.style.border = "2px solid black";
        }
    }
}
function click_on_OK(){
    $('#part_E').hide();
    $('#A_B_C_D').show();
}
function isPrime(x){
    for(let i=2;i<x;i++)//לולאה (ביצוע מס' שורות קוד מס' פעמים ברצף) מ2 ועד X-1
        if(x%i===0)//תנאי , שאלה שבודקת משהו ואם מתקיים מבצעת את השורה מתחת
            return false;//שקר
    return true;//אמת, המספר הוא מספר ראשוני
}
function isSemiPrime(x){
    let j;
    for(let i=2;i<(x**0.5)+1;i++)//מספר בחזקת חצי זה בעצם שורש המספר
        if(x%i===0){
            j=x/i;
            if(isPrime(j)&&isPrime(i)&&!isPrime(x))
                return true;
        }
    return false;
}
function isBrilliantNumber(x){
    let j;
    for(let i=2;i<(x**0.5)+1;i++)
        if(x%i===0){
            j=x/i;
            if(isPrime(j)&&isPrime(i)&&i.toString().length===j.toString().length&&!isPrime(x))
                return true;
        }
    return false;
}