$(document).ready(function () {
    var whichTab = getUrlVars();
    function getUrlVars() {
        var hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
        }
        return hash[1];
    }
    switch (whichTab) {
        case '1':
            $('[href="#nav-home"]').tab('show');
            break;
        case '2':
            $('[href="#nav-profile"]').tab('show');
            break;
        case '3':
            $('[href="#nav-contact"]').tab('show');
            break;
    }
});