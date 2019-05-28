var check=false;
var prime = [];
for(i = 2; i <= 10; i++)
{   
    for( j = 2; j <= i; j++)
    {   
        if(i % j == 0 && i!=j)
        {
            check = false;
            break;
        }
        else
        {
            check = true;
        }
    }
    if(check)
    {
        prime.push(i);
    }
}
console.log(prime);
