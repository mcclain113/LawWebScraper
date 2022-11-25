

$(document).ready(function () {
    $("#search1").submit(searchKeyword);
    $("#start-over").on("click", clearSite);
    $("#print").on("click", printDiv);

})
const arrItems = [];

function searchKeyword(event) {
    event.preventDefault();

    jQuery.expr[":"].contains = jQuery.expr.createPseudo(function(arg) {
        return function( elem ) {
            return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
    // Fetch Keyword
    //let website = $("input#website").val();
    let keyword = $("input#keyword").val();
    let keywordFormatted = 'div:contains("'+keyword+'")';


    if ($('input#WI').prop('checked')) {
        WiAdd();
    }
    else{}

    if ($('input#IL').prop('checked')) {
        WiAdd();
    }
    else{}
    //$("#showData").append(arrItems);
    //alert(arrItems);

    //JSONToHTMLTable(arrItems, "showData");

}


function WiAdd() {
//WI Logic

    //var arrItems = [];
    let keyword = $("input#keyword").val();
    let keywordFormatted = 'div:contains("' + keyword + '")';
    let keywordFormattedA = 'div:contains('+keyword+')';
    let keywordFormattedB = ':contains('+keyword+')';
    let keywordFormattedC = ':contains("'+keyword+'")';
    var state = "WI";


    const wiArray = [
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%201.01",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%201.02",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%202.02",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%202.05",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%202.06",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%204.02",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%204.03",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%204.035",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%205.01",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%205.02",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%205.04",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%205.05",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%205.06",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%206.01",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%206.02",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%206.03",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%206.04",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%206.05",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%206.06",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%206.07",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%206.075",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%206.08",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.01",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.02",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.03",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.04",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.05",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.06",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.07",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.08",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.085",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.09",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.10",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.11",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.12",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.13",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.14",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.30",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.31",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.40",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.41",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.42",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.43",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.50",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.51",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.52",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.53",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.54",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.55",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.60",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.61",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%207.62",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%208.01",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%208.02",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%208.03",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%208.04",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%208.05",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%208.06",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%208.07",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%208.08",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%209.01",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%2010.01",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%2010.02",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%2010.03",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%2011.01",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%2012.01",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%2012.02",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%2012.03",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%2012.04",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%2012.05",
        "https://docs.legis.wisconsin.gov/document/administrativecode/Phar%2012.06"

    ];


    wiArray.forEach(function (item, index) {
        $.get(item, function (html) {

            // Loop through elements you want to scrape content from
            $(html).find(keywordFormatted||keywordFormattedA||keywordFormattedB||keywordFormattedC).not(".container").not("#document").each(function () {
               //create exception if site fails
                var data = {};
                var divDetail = $(this).text();
                //const divSite = document.getElementsByTagName("href").length;
                var divSite = $(this).find('.reference').attr('href');


                function link(text, href, hrefBase) {
                    if (href === undefined) {
                        return `<a href=${hrefBase}>${hrefBase}</a>`;
                    } else {
                        return `<a href="https://docs.legis.wisconsin.gov${href}">https://docs.legis.wisconsin.gov${text}</a>`;
                    }
                }

                //alert($(this).text());
                // Write output onto webpage
                //$("#showData").append(`<p>${divDetail}</p>`);

                var obj = {
                    Matching_Text: divDetail,
                    State: state,
                    Weblink: link(divSite, divSite, item)
                };

                var tempObj = {}
                tempObj['MatchingText'] = $(this).text();

                arrItems.push(obj);

                JSONToHTMLTable(arrItems, "showData");

            });
        });
    })


}

            function JSONToHTMLTable(jsonData, elementToBind) {

                //This Code gets all columns for header   and stored in array col
                var col = [];
                for (var i = 0; i < jsonData.length; i++) {
                    for (var key in jsonData[i]) {
                        if (col.indexOf(key) === -1) {
                            col.push(key);
                        }
                    }
                }

                //This Code creates HTML table
                var table = document.createElement("table");

                //This Code getsrows for header creader above.
                var tr = table.insertRow(-1);

                for (var i = 0; i < col.length; i++) {
                    var th = document.createElement("th");
                    th.innerHTML = col[i];
                    tr.appendChild(th);
                }

                //This Code adds data to table as rows
                for (var i = 0; i < jsonData.length; i++) {

                    tr = table.insertRow(-1);

                    for (var j = 0; j < col.length; j++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = jsonData[i][col[j]];
                    }
                }

                //This Code gets the all columns for header
                var divContainer = document.getElementById(elementToBind);
                divContainer.innerHTML = "";
                divContainer.appendChild(table);

                var seen = {};
                $('table tr').each(function() {
                    var txt = $(this).text();
                    if (seen[txt])
                        $(this).remove();
                    else
                        seen[txt] = true;
                });
            }


function clearSite(){
    location.reload();
}

function printDiv() {
    var divContents = document.getElementById("printSpace").innerHTML;
    var a = window.open('', '', 'height=1200, width=1200', );
    a.document.write('<html>');
    a.document.write('<body >');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}