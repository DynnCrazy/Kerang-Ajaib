const daftarJawabanKerang = ["Iya", "Tidak", "Tidak tau", "Mungkin Iya", "Mungkin Tidak", "Hmmm", "YNTKTS", "Mustahil", "Mungkin"];
var thenumber = 1;
var logquestion = '';

function getRandomAnswer() {
    const jwbAcak = Math.floor(Math.random() * daftarJawabanKerang.length);
    return daftarJawabanKerang[jwbAcak];
}
   

function exampleAlert() {
    thenumber += 1;
    if (thenumber % 2 === 0) {
        var isGenap = true;
    } else {
        var isGenap = false;
    }

    if ( thenumber === 10 || thenumber === 20) {
        alert('Subscribe YouTube Dyn Crazy');
    } else if ( thenumber === 32 ) {
        alert('Cepetan Subscribe YouTube Dyn Crazy Woy!');
    } else if ( thenumber === 50 ) {
        alert('SUBSCRIBE YOUTUBE DYN CRAZY SEKARANG AJG!!');
    }

    var div1 = document.getElementById('containercontent');
    div1.classList.toggle('hidden');

    var div2 = document.getElementById('containeranswer');
    div2.classList.toggle('display');

    if (isGenap == true) {
        var pertanyaan = document.getElementById('inputkerangajaib').value.toLowerCase();
        document.getElementById('inputkerangajaib').value = '';

        if (pertanyaan == 'display:none' || pertanyaan == 'display:none;'  || pertanyaan == 'display:hidden' || pertanyaan == 'display:hidden;') {
            document.getElementById('titlewebka').style.display = 'none';
            document.getElementById('divcontcenter').style.display = 'none';
            document.getElementById('authorwebka').style.display = 'none';
        }

        if (logquestion == pertanyaan) {
            document.getElementById('answerKA').innerHTML = 'Tadi Udh Aku Jawab';
        } else {

            if ( pertanyaan == 'kontol' || pertanyaan == 'asu' || pertanyaan == 'goblok' || pertanyaan == 'tolol' || pertanyaan == 'ngentod' || pertanyaan == 'ngtd' || pertanyaan == 'memek' || pertanyaan == 'ngentot' || pertanyaan == 'sprema' || pertanyaan == 'goblk' || pertanyaan == 'bangsat' || pertanyaan == 'tai' || pertanyaan == 'jancok' || pertanyaan == 'jnck' ) {
                document.getElementById('answerKA').innerHTML = pertanyaan;
                alert('Kamu terkena spam alert karena menggunakan kata terlarang!');
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                alert(pertanyaan);
                document.getElementById('buttonkerangajaib').innerHTML = pertanyaan;
                document.getElementById('buttonkerangajaib2').innerHTML = pertanyaan;
                document.getElementById('titlewebka').innerHTML = pertanyaan;
                document.getElementById('descinca').innerHTML = pertanyaan;
                document.getElementById('descincc').innerHTML = pertanyaan;
                document.getElementById('linkauthor').innerHTML = pertanyaan;
                document.getElementById('inputkerangajaib').placeholder = pertanyaan;
            } else {
                var jawabanKerangAjaib = getRandomAnswer();
                document.getElementById('answerKA').innerHTML = jawabanKerangAjaib;
                logquestion = pertanyaan.toLowerCase();
                console.log('Question log: ' + logquestion)
            }

        }
    }
}

function tryAgain() {
    exampleAlert();
}

console.log('------------------------------------------------------------------');
console.log('------------------------------------------------------------------');
console.log('-- PERATURAN --');
console.log('1. Jangan menyebarkan informasi pribadi yang sangat penting');
console.log('2. Jangan percaya (serius) dalam menanggapi jawaban Kerang Ajaib');
console.log('3. Jangan berkata kasar');
console.log('4. Jangan spam ya adik - adik');
console.log('5. Jangan meninggal dunia saat memainkannya');
console.log('------------------------------------------------------------------');
console.log('------------------------------------------------------------------');