const daftarJawabanKerang = ["Iya", "Tidak", "Tidak tau", "Mungkin Iya", "Mungkin Tidak", "Hmmm", "Gak Tau", "Kayaknya Iya", "Kayaknya Tidak", "Mungkin"];
var thenumber = 1;
var logquestion = '';
var isAnswer = 'n';

function getRandomAnswer() {
    const jwbAcak = Math.floor(Math.random() * daftarJawabanKerang.length);
    return daftarJawabanKerang[jwbAcak];
}

function getAnswer() {
    thenumber += 1;
    var isGenap = (thenumber % 2 === 0);

    if (thenumber === 20 || thenumber === 40) {
        alert('Subscribe YouTube Dyn Crazy');
    } else if (thenumber === 60) {
        alert('Cepetan Subscribe YouTube Dyn Crazy Woy!');
    } else if (thenumber === 100) {
        alert('SUBSCRIBE YOUTUBE DYN CRAZY SEKARANG AJG!!');
    }

    var pertanyaan = document.getElementById('inputkerangajaib').value.trim().toLowerCase();

    if (isAnswer === 'n' && pertanyaan === '') {
        alert('Pertanyaan tidak boleh kosong!');
        return;
    }

    document.getElementById('inputkerangajaib').value = '';
    isAnswer = 'y';

    var div1 = document.getElementById('containercontent');
    div1.classList.toggle('hidden');

    var div2 = document.getElementById('containeranswer');
    div2.classList.toggle('display');

    if (pertanyaan === 'display:none' || pertanyaan === 'display:none;' || pertanyaan === 'display:hidden' || pertanyaan === 'display:hidden;') {
        document.getElementById('titlewebka').style.display = 'none';
        document.getElementById('divcontcenter').style.display = 'none';
        document.getElementById('authorwebka').style.display = 'none';
    }

    if (logquestion === pertanyaan) {
        document.getElementById('answerKA').innerHTML = 'Tadi Udh Aku Jawab';
    } else {
        if (['kontol', 'asu', 'goblok', 'tolol', 'ngentod', 'ngtd', 'memek', 'ngentot', 'sprema', 'goblk', 'bangsat', 'tai', 'jancok', 'jnck'].includes(pertanyaan)) {
            document.getElementById('answerKA').innerHTML = pertanyaan;
            alert('Kamu terkena spam alert karena menggunakan kata terlarang!');
            for (let i = 0; i < 15; i++) {
                alert(pertanyaan);
            }
            document.getElementById('buttonkerangajaib').innerHTML = pertanyaan;
            document.getElementById('buttonkerangajaib2').innerHTML = pertanyaan;
            document.getElementById('titlewebka').innerHTML = pertanyaan;
            document.getElementById('descinca').innerHTML = pertanyaan;
            document.getElementById('descincc').innerHTML = pertanyaan;
            document.getElementById('linkauthor').innerHTML = pertanyaan;
            document.getElementById('inputkerangajaib').placeholder = pertanyaan;
            document.getElementById('errordiv').style.display = 'block';
            document.getElementById('k1img').style.display = 'none';
            document.getElementById('k2img').style.display = 'none';
        } else {
            var jawabanKerangAjaib = getRandomAnswer();
            document.getElementById('answerKA').innerHTML = jawabanKerangAjaib;
            logquestion = pertanyaan;
            console.log('Question log: ' + logquestion);
        }
    }
}

function tryAgain() {
    isAnswer = 'n';
    var div1 = document.getElementById('containercontent');
    div1.classList.toggle('hidden');

    var div2 = document.getElementById('containeranswer');
    div2.classList.toggle('display');
}

/* document.getElementById('inputkerangajaib').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        getAnswer();
    }
}); */

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
console.log('Last update: 2024/06/205 - Dyn Crazy');