var theTable = document.getElementById("thetable");
var theCurrentResult = [];
var buttonRefreshPage = document.getElementById("buttonRefreshTable");
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

buttonRefreshTable.addEventListener("click", function () {

    $("#theTable").load("index.html #thetable");

    $.ajax({
        url: "final.csv",
        dataType: 'text',
    }).done(newRequestFunction(data+Math.random()));

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
//        //console.log(lines);
//        var headers = lines[0].split(","); // Individual headers split by comma

//        for (var i = 1; i < lines.length; i++) // Starting from 2nd line
//        {
//            var obj = {};
//            var currentLine = lines[i].split(",");  // Individual line split by comma

//            for (var j = 0; j < headers.length; j++) {
//                obj[headers[j]] = currentLine[j];
//            }
//            result.push(obj);
//            console.log(obj);
//            //result.push(',');
//        }

//        //return JSON.stringify(result);

//    }
//    //getCSVFile();
//    //theCurrentResult = convertCSVtoJSON("final.csv");
//    //console.log(theCurrentResult);
//    //console.log(result);
//    //alert(result);
//    //console.log(result);
//    //theCurrentResult = result;
//    //console.log(theCurrentResult);
//    //alert(theCurrentResult);
//    //return result;
    
//    function renderNewTable(theData) {
//        for (var i = 0; i < theData.length; i++) {
//            // Create new row
//            var newRow = table.insertRow(table.length);
//            for (var j = 0; j < theData.length; j++) {
//                // Create new cell
//                var cell = newRow.insertCell(j);
//                // Add value to cell
//                cell.innerHTML = theData[i][0].Game_ID;
//                console.log(theData[i][j].Game_ID);
                
//            }
//        }
//    }
    

//    var waththefuck = [
//        { "Game_ID": "000016", "Team1":"lel" },
//        { "Game_ID": "000017", "Team1":"wat" }
//    ];

//    document.write("WHAT");
//    document.write(result);
//    document.write(waththefuck[0].Game_ID);

//    console.log(waththefuck.keys);
//    console.log(waththefuck[0]);
//    console.log(waththefuck[0].Team1);
//    console.log(result);
//    console.log(result[1]);
//    console.log(result["0"].Game_ID);
    
//    console.log(result.keys);
    
//    renderNewTable(result);
//    //function renderTable(theCurrentResult) {
//    //    document.getElementById("GAMEID1").innerHTML = theCurrentResult[1].Game_ID;
//    //    document.getElementById("TEAMNAME1").innerHTML = theCurrentResult[1].Team_1;
//    //    document.getElementById("TEAMNAME2").innerHTML = theCurrentResult[1].Team_2;
//    //}
//});


    //< table id= "thetable" >
    //    <tr>
    //        <th>Game ID</th>
    //        <th>Holdnavn 1</th>
    //        <th>Holdnavn 2</th>
    //    </tr>
    //    <tr>
    //        <th id="GAMEID1"></th>
    //        <th id="TEAMNAME1"></th>
    //        <th id="TEAMNAME2"></th>
    //    </tr>
    //</table >

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