function myFunction() {


    var allRows = document.getElementsByTagName("tr");

    for (var i = 0; i < allRows.length; i++) {
        if (i % 2 !== 0) {
            allRows[i].classList.add("paint-row");
        }
    }

}