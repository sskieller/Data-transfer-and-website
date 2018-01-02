var theTable = document.getElementById("thetable");
var buttonRefreshPage = document.getElementById("buttonRefreshTable");

buttonRefreshTable.addEventListener("click", function () {
    $(document).ajax({
        url: 'final.csv',
        dataType: 'text',
    }).done(parseToTable);

    function parseToTable(data) {
        var allRows = data.split(/\r?\n|\r/);
        var table = '<table>';

        for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
            if (singleRow === 0) {
                table += '<thead>';
                table += '<tr>';
            } else {
                table += '<tr>';
            }
            var rowCells = allRows[singleRow].split(',');
            for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
                if (singleRow === 0) {
                    table += '<th>';
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
                table += '<tbody>';
            } else {
                table += '</tr>';
            }
        }
        table += '</tbody>';
        table += '</table>';
        theTable.innerHTML = table;
        //$('body').append(table);
    }
})

//function ShowHelloMessage()
//{
//    var name = document.getElementById("myname");
//    document.getElementById("hellomessage").innerHTML = "Hello, " + name.value;
//}
//document.getElementById("mybutton").onclick = ShowHelloMessage;


//function ShowDate()
//{
//    document.getElementById("theDate").innerHTML = Date();
//}
//document.getElementById("secondButton").onclick = ShowDate;





//function getCSVFile(file) {
//    var rawFile = new XMLHttpRequest();
//    rawFile.open("GET", file, false);
//    rawFile.onreadystatechange = function () {
//        if (rawFile.readyState === 4) {
//            if (rawFile.status === 200 || rawFile.status == 0) {
//                var allText = rawFile.responseText;
//                alert(allText);
//            }
//        }
//    }
//    rawFile.send(null);
//}

//buttonRefreshTable.addEventListener("click", function () {
//    var result = [];
//    $(document).ready(function () {
//        $.ajax({
//            type: "GET",
//            url: "final.csv",
//            dataType: "text",
//            success: function (data) { convertCSVtoJSON(data); }
//        });
//    });


//    function convertCSVtoJSON(csv) {
//        var lines = csv.split("\r\n"); // All lines split by newline

//        //result = [];

//        var headers = lines[0].split(","); // Individual headers split by comma

//        for (var i = 1; i < lines.length; i++) // Starting from 2nd line
//        {
//            var obj = {};
//            var currentLine = lines[i].split(",");  // Individual line split by comma

//            for (var j = 0; j < headers.length; j++) {
//                obj[headers[j]] = currentLine[j];
//            }
//            result.push(obj);

//        }
        
//        //return JSON.stringify(result);
        
//    }
//    //getCSVFile();
//    //theCurrentResult = convertCSVtoJSON("final.csv");
//    //console.log(theCurrentResult);
//    //console.log(result);
//    //alert(result);
//    theCurrentResult = result;
//    console.log(theCurrentResult);
//    //alert(theCurrentResult);
//    return result;
//})

//theTable.insertAdjacentHTML('beforeend', htmlString);

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