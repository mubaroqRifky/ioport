export function formatRupiah(angka, prefix, accept = "comma") {
    const regex = accept == "comma" ? /[^,\d]/g : /[^.\d]/g;
    const comma = accept == "comma" ? "," : ".";

    let number_string = String(angka).replace(regex, "").toString(),
        split = number_string.split(comma),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (rupiah.match(/^0{2}/)) return 0;
    if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    const result = prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";

    return result;
}

export function formatRupiahToNumber(rupiahFormat) {
    return Number(
        String(rupiahFormat)
            .replace(/[^\d,]+/g, "")
            .replace(/[,]+/g, ".")
    );
}
