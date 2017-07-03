var arra=[15,  29, 78, 29, 40, 20, 18, 100, 78, 68];
var par=[];
var impar=[];

for(var i=0;i<arra.length;i++)
{
  for(var j=0;j<arra.length;j++)
  if(i%2==0){
    par += arra.length[i];
  }
  else if(i%2==1)
  {
    impar += arra.length[j];
  }
}
document.write(par);
