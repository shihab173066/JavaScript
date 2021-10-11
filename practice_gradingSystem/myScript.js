var mark = prompt("Enter student marks for grade: ");

var marks = parseInt(mark);

if(marks >= 90 && marks <= 100)
{
    document.write("A");
}
else if(marks >= 70 && marks <= 89)
{
    document.write("-A");
}
else if(marks >= 60 && marks <= 69)
{
    document.write("B");
}
else if(marks >= 20 && marks <= 59)
{
    document.write("C");
}
else if(marks >= 1 && marks <= 19)
{
    document.write("C");
}
else
{
    document.write("F");
}
document.write("</br>");