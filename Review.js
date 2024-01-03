var Qus =["Q1:Are you satisfied with our service?","Q2:Do you find our website user-friendly","Q3:Would you recommend us to others"];
var choices=[["yes","no"],["yes","no"],["yes","no"] ];
var correct=["yes","yes","yes"];
function onload()
{
   
    for(var i=0; i<Qus.length;i++)
    {
        var index =i+1;
        document.getElementById("q"+index).textContent=Qus[i];
        for(var j=0; j<choices[i].length;j++)
        {
            var subindex= j+1;
            document.getElementById("q"+index+"r"+subindex).textContent=choices[i][j];
        }
    }
}
function getresult()
{
   var Checked_rideo=[];
   var array_rideo=document.getElementsByClassName('radio');
   for(var i =0; i<array_rideo.length ;i++)
   {
     if(array_rideo[i].checked)
     {
        Checked_rideo.push(array_rideo[i].textContent);

     }
   }
   console.log(Checked_rideo);
   if(Qus.length !== Checked_rideo.length)
   {
     alert("Fill all Data");
     return false;
   }
   checkvalue(Checked_rideo);
}
function checkvalue(Checked_rideo)
{
    let score =0;
   for(var i=0; i<correct.length; i++)
   {
     if(correct.includes(Checked_rideo[i]))
     {
        score++;
     }
   }
   alert("Your score"+score);
}