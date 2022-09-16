function refreshData() {
    x = 3; // 3 Seconds

    try {

        if (document.querySelector('.cards-replacements_labels-itemRemove') !== null) {
            var newclass = document.querySelector('.cards-replacements_labels-itemRemove');
            newclass.click();
        } else if (document.querySelector('.cards-replacements_labels-itemInsert') !== null) {
            var newclass = document.querySelector('.cards-replacements_labels-itemInsert');
            newclass.click();
        } else {
            var newclass = document.querySelector('.fqlvlsm');
            newclass.click();
        } 
    } catch (error) {
        if (document.getElementsByClassName("wrapper_fipkee2") !== null) {
            var cli = document.getElementsByClassName("wrapper_fipkee2");
            var vli = cli[0];
            vli.click();
        }
    }
    setTimeout(refreshData, x * 1000);
}

refreshData();
