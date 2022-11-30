const scanner = new Html5QrcodeScanner('reader',{
    qrbox:{
        width:250,
        height:250,
    },
    fps:20,
});

scanner.render(success,error);

function success(){
    window.location.href='./last.html';

    scanner.clear();
    document.getElementById('reader').remove();
}

function error(err){
    console.log(err);
}