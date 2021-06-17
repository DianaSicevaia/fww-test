//Question #2
let obj = parceUrl('http://ffwagency.com/do/any.php?a=1#foo')

function parceUrl( url ) {
    var parcer = document.createElement('a');
    parcer.href = url;
    return parcer;
}


console.log( obj.hash )
console.log( obj.hostname )
console.log( obj.pathname )