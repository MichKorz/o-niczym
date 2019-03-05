let array=[1,2,3,4];

function sumaTablicy(tablica)
{
    let przejściowa = 0;
    let wynik = 0;

    let ilość = tablica.length;

    for(let i = 0; i < ilość; i++){
        przejściowa = array[i];
        wynik += przejściowa;
      
    }
    console.log(" ")
    console.log("zadanie 1")
    console.log(" ")
    console.log(wynik);
    return wynik;
}

sumaTablicy(array);

// zadanie 2

function dziel(lista, liczba)
{
    
    let przejściowa = 0;
    let mniejsza=[];
    let większa=[];

    for(let i = 0; i < lista.length; i++)
    {
        przejściowa = lista[i];
        if(przejściowa < liczba)
        {
            mniejsza.push(lista[i]);
        }
        else if(przejściowa > liczba)
        {
            większa.push(lista[i]);
        }
    }
    console.log(" ")
    console.log("zadanie 2")
    console.log(" ")
    console.log(mniejsza);
    console.log(większa);
}
dziel([1,2,3,4,5,6,7,8,9,10], 7);
