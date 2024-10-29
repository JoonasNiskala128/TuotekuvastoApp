document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.product-card h2').forEach(function (element) {

        element.textContent = element.textContent.replace(/\b\w/g, function (char) {

            return char.toUpperCase();

        });

    });

    document.querySelectorAll('.product-card p:nth-child(4)').forEach(function (element) {
        // Poista 'Price: ' ja ' €' ja muuta teksti numeroarvoksi
        let priceText = element.textContent.replace('Price: ', '').replace(' €', '');
        let price = parseFloat(priceText);

        // Tarkista, että hinta on numero, ja muotoile se ilman $-symbolia
        if (!isNaN(price)) {
            element.textContent = `Price: ${price.toFixed(2).replace('.', ',')} €`;
        }
    });
});
