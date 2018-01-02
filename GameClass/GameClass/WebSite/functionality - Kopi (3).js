var theTable = document.getElementById("thetable");
var buttonRefreshPage = document.getElementById("buttonRefreshTable");

$(document).ready(function () {

    buttonRefreshTable.addEventListener("click", function () {
        $.ajax({
            url: "final.csv",
            dataType: 'text',
        }).done(newRequestFunction);

        function newRequestFunction(data) {
            var allRows = data.split(/\r?\n|\r/);
            var table = '<table>';

            for (var singleRow = 0; singleRow < (allRows.length - 2); singleRow++) {
                if (singleRow === 0) {
                    table += '<thead>';
                    table += '<tr>';
                } else {
                    table += '<tr>';
                }

                var rowCells = allRows[singleRow].split(',');
                for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
                    if (singleRow === 0) {
                        table += '<th onclick="sortTable(' + rowCell + ')">';
                        table += rowCells[rowCell];
                        table += '</th>';
                    } else {
                        table += '<td>';
                        table += rowCells[rowCell];
                        table += '</td>';
                    }
                }
                if (singleRow === 0) {
                    table += '</tr>';
                    table += '</thead>';
                    table += '</tbody>';
                } else {
                    table += '</tr>';
                }
            }
            table += '</tbody>';
            table += '</table>';
            theTable.innerHTML = table;
            //theTable.append(table);
            //$('body').append(table);
            console.log(table);
        }

    });



    //Opsætning af hjemmeside
    //- Søgbar tabel
    //- Sorter ved tryk på header
    //- Opsæt js til at modtage CSV fil (Done)

    //- Ved søgning markeres hvilken tabel der skal søges i. 50/ alle

    //- Vis tabel for de sidste 50 spil
    //- Sortér denne efter valgte header
    //- Søgning i denne

    //- Vis tabel for alle spil
    //- Sortér denne efter valgte header
    //- Søgning i denne
});

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("thetable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (n == 3 || n == 4) {
                    if (x.innerHTML > y.innerHTML) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (dir == "desc") {
                if (n == 3 || n == 4) {
                    if (x.innerHTML < y.innerHTML) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
