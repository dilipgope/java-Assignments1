let marks = [23,67,53,76,21]
let maxmarks = marks[0]
for (i=0;i<marks.length;i++)
    {
        marks[i] > maxmarks ? (maxmarks=marks[i]) :marks[i] ;
    }
    console.log(maxmarks);