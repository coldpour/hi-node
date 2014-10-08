var sum = 0;
for(var i=2, i_end=process.argv.length; i<i_end; i++) {
    sum += +process.argv[i]
}
console.log(sum);
