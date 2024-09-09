function hitung(operator) {
    var bil1 = parseFloat(document.getElementById("bil1").value);
    var bil2 = parseFloat(document.getElementById("bil2").value);
    var hasil;

    if (isNaN(bil1) || isNaN(bil2)) {
        alert("Silakan masukkan kedua bilangan!");
        return;
    }

    switch(operator) {
        case '+':
            hasil = bil1 + bil2;
            break;
        case '-':
            hasil = bil1 - bil2;
            break;
        case '*':
            hasil = bil1 * bil2;
            break;
        case '/':
            if (bil2 === 0) {
                alert("Pembagian dengan nol tidak diperbolehkan!");
                return;
            }
            hasil = bil1 / bil2;
            break;
        default:
            hasil = "Operasi tidak valid";
    }

    document.getElementById("hasil").value = hasil;
}
