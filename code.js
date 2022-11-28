

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
        IlAdd();
    }
    else{}
    //$("#showData").append(arrItems);
    //alert(arrItems);

    //JSONToHTMLTable(arrItems, "showData");

}
function IlAdd() {

    //keyword and state variable
    let keyword = $("input#keyword").val();
    let keywordFormatted = 'div:contains("' + keyword + '")';
    let keywordFormattedA = 'div:contains('+keyword+')';
    let keywordFormattedB = ':contains('+keyword+')';
    let keywordFormattedC = ':contains("'+keyword+'")';
    var state = "IL";

//array of websites
    //Pharmacy Rules
    const stateArray = [

        "https://www.ilga.gov/commission/jcar/admincode/068/068013300A00100R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300A00200R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300A00300R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300A00400R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300A00500R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300A00600R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300A00700R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300A00800R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300A00900R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300A01000R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300A01100R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300B02000R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300B02100R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300B02200R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300C03000R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300C03100R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300C03200R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300C03300R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300C03400R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300C03500R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300D04000R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300D04100R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300D04200R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300E05000R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300E05100R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300E05200R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300E05300R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300E05400R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300E05500R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300E05600R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300F06000R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300F06100R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300F06200R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300F06300R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300F06400R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300F06500R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300F06600R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300F06700R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300F06800R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300G07000R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300G07100R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300G07200R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300G07300R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300G07400R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300G07500R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300G07600R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300G07700R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300G07800R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300G07900R.html",
        "https://www.ilga.gov/commission/jcar/admincode/068/068013300G08000R.html"

    ];


    stateArray.forEach(function (item, index) {
        $.get(item, function (html) {

            // Loop through elements you want to scrape content from
            $(html).find(keywordFormatted||keywordFormattedA||keywordFormattedB||keywordFormattedC).each(function () {
                //create exception if site fails
                var data = {};
                var divDetail = $(this).text();
                //const divSite = document.getElementsByTagName("href").length;
                var divSite = $(this).find('.reference').attr('href');


                function link(text, href, hrefBase) {
                    if (href === undefined) {
                        return `<a href=${hrefBase}>${hrefBase}</a>`;
                    } else {
                        return `<a href="insertRightStuff${href}">insertRightStuff${text}</a>`;
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


function WiAdd() {

    //keyword and state variable
    let keyword = $("input#keyword").val();
    let keywordFormatted = 'div:contains("' + keyword + '")';
    let keywordFormattedA = 'div:contains('+keyword+')';
    let keywordFormattedB = ':contains('+keyword+')';
    let keywordFormattedC = ':contains("'+keyword+'")';
    var state = "WI";

//array of websites
    const stateArray = [
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


    stateArray.forEach(function (item, index) {
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
                    th.id = 'tableId';
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




//why does excel export quotes with symbols: https://community.jaspersoft.com/wiki/csv-report-right-single-quotation-mark-displays-garbage-characters-when-opening-excel#:~:text=When%20opening%20the%20CSV%20file,per%20the%20Windows%2D1252%20characterset.
function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        for (var j = 0; j < cols.length; j++)
            row.push('"' + cols[j].innerText + '"');
        csv.push(row.join(","));
    }
    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;
    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});
    // Download link
    downloadLink = document.createElement("a");
    // File name
    downloadLink.download = filename;
    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);
    // Hide download link
    downloadLink.style.display = "none";
    // Add the link to DOM
    document.body.appendChild(downloadLink);
    // Click download link
    downloadLink.click();
}