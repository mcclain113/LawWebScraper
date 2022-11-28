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


    //stateArray.forEach(function (item, index) {
        $.get("https://www.ilga.gov/commission/jcar/admincode/068/068013300A00100R.html", function (html) {

            // Loop through elements you want to scrape content from
            $(html).find('div:contains("' + keyword + '")').each(function () {
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

}

function WiAdd(){}