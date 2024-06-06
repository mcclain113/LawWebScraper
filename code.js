const WiChapterPhar1 = [];
const WiChapterPhar2 = [];
const WiChapterPhar4 = [];
const WiChapterPhar5 = [];
const WiChapterPhar6 = [];
const WiChapterPhar7 = [];
const WiChapterPhar8 = [];
const WiChapterPhar9 = [];
const WiChapterPhar10 = [];
const WiChapterPhar11 = [];
const WiChapterPhar12 = [];
const WiChapterPhar13 = [];
const WiChapterPhar14 = [];
const WiChapterPhar15 = [];
const WiChapterPhar16 = [];
const WiChapterPhar17 = [];
const WiChapterSPS1 = [];
const WiChapterSPS2 = [];
const WiChapterSPS3 = [];
const WiChapterSPS4 = [];
const WiChapterSPS6 = [];
const WiChapterSPS7 = [];
const WiChapterSPS8 = [];
const WiChapterSPS9 = [];
const WiChapterStat15 = [];
const WiChapterStat440 = [];
const WiChapterStat450 = [];
const WiChapterStat961 = [];

$(document).ready(function () {
    $("#search1").submit(searchKeyword);
    $("#start-over").on("click", clearSite);
    $("#print").on("click", printDiv);

})
const arrItems = [];

function searchKeyword(event) {
    event.preventDefault();
//overload for case insensitve search
    jQuery.expr[":"].contains = jQuery.expr.createPseudo(function(arg) {
        return function( elem ) {
            return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
    /*
    $(function(){
        $("#showData").remove();
    });
*/
    // Fetch Keyword
    //let website = $("input#website").val();
    let keyword = $("input#keyword").val();
    let keywordFormatted = 'div:contains("'+keyword+'")';


    if ($('input#WI').prop('checked')) {
        if (WiChapterPhar1.length === 0){

            const WiChapterPhar1Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%201"];
            let VarWiChapterPhar1 = 'div:contains("'+1+'")';
            WiChapterPhar1Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find('.qs_toc_entry_').each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar1.push(divSiteFull);
                        }


                    });
                });
            })

        }
        else{}
        if (WiChapterPhar2.length === 0){
            const WiChapterPhar2Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%202"];
            let VarWiChapterPhar2 = 'div:contains("'+2+'")';
            WiChapterPhar2Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar2).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar2.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar4.length === 0){
            const WiChapterPhar4Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%204"];
            let VarWiChapterPhar4 = 'div:contains("'+4+'")';
            WiChapterPhar4Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar4).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar4.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar5.length === 0){
            const WiChapterPhar5Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%205"];
            let VarWiChapterPhar5 = 'div:contains("'+5+'")';
            WiChapterPhar5Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar5).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar5.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar6.length === 0) {
            const WiChapterPhar6Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%206"];
            let VarWiChapterPhar6 = 'div:contains("'+6+'")';
            WiChapterPhar6Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar6).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar6.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar7.length === 0) {
            const WiChapterPhar7Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%207"];
            let VarWiChapterPhar7 = 'div:contains("'+7+'")';
            WiChapterPhar7Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar7).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar7.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar8.length === 0) {
            const WiChapterPhar8Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%208"];
            let VarWiChapterPhar8 = 'div:contains("'+8+'")';
            WiChapterPhar8Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar8).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar8.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar9.length === 0) {
            const WiChapterPhar9Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%209"];
            let VarWiChapterPhar9 = 'div:contains("'+9+'")';
            WiChapterPhar9Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar9).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar9.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar10.length === 0) {
            const WiChapterPhar10Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%2010"];
            let VarWiChapterPhar10 = 'div:contains("'+10+'")';
            WiChapterPhar10Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar10).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar10.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar11.length === 0) {
            const WiChapterPhar11Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%2011"];
            let VarWiChapterPhar11 = 'div:contains("'+11+'")';
            WiChapterPhar11Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar11).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar11.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar12.length === 0) {
            const WiChapterPhar12Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%2012"];
            let VarWiChapterPhar12 = 'div:contains("'+12+'")';
            WiChapterPhar12Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar12).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar12.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar13.length === 0) {
            const WiChapterPhar13Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%2013"];
            let VarWiChapterPhar13 = 'div:contains("'+13+'")';
            WiChapterPhar13Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar13).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar13.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar14.length === 0) {
            const WiChapterPhar14Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%2014"];
            let VarWiChapterPhar14 = 'div:contains("'+14+'")';
            WiChapterPhar14Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar14).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar14.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar15.length === 0) {
            const WiChapterPhar15Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%2015"];
            let VarWiChapterPhar15 = 'div:contains("'+15+'")';
            WiChapterPhar15Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar15).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar15.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar16.length === 0) {
            const WiChapterPhar16Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%2016"];
            let VarWiChapterPhar16 = 'div:contains("'+16+'")';
            WiChapterPhar16Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar16).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar16.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterPhar17.length === 0) {
            const WiChapterPhar17Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20Phar%2017"];
            let VarWiChapterPhar17 = 'div:contains("'+17+'")';
            WiChapterPhar17Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterPhar17).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.qs_toc_entry_').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterPhar17.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterSPS1.length === 0) {
            const WiChapterSPS1Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20SPS%201"];
            let VarWiChapterSPS1 = 'div:contains("'+1+'")';
            WiChapterSPS1Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterSPS1).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.reference').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterSPS1.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterSPS2.length === 0) {
            const WiChapterSPS2Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20SPS%202"];
            let VarWiChapterSPS2 = 'div:contains("'+2+'")';
            WiChapterSPS2Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterSPS2).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.reference').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterSPS2.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterSPS3.length === 0) {
            const WiChapterSPS3Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20SPS%203"];
            let VarWiChapterSPS3 = 'div:contains("'+3+'")';
            WiChapterSPS3Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterSPS3).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.reference').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterSPS3.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterSPS4.length === 0) {
            const WiChapterSPS4Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20SPS%204"];
            let VarWiChapterSPS4 = 'div:contains("'+4+'")';
            WiChapterSPS4Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterSPS4).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.reference').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterSPS4.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterSPS6.length === 0) {
            const WiChapterSPS6Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20SPS%206"];
            let VarWiChapterSPS6 = 'div:contains("'+6+'")';
            WiChapterSPS6Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterSPS6).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.reference').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterSPS6.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterSPS7.length === 0) {
            const WiChapterSPS7Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20SPS%207"];
            let VarWiChapterSPS7 = 'div:contains("'+7+'")';
            WiChapterSPS7Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterSPS7).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.reference').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterSPS7.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterSPS8.length === 0) {
            const WiChapterSPS8Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20SPS%208"];
            let VarWiChapterSPS8 = 'div:contains("'+8+'")';
            WiChapterSPS8Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterSPS8).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.reference').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterSPS8.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterSPS9.length === 0) {
            const WiChapterSPS9Array = ["https://docs.legis.wisconsin.gov/document/administrativecode/ch.%20SPS%209"];
            let VarWiChapterSPS9 = 'div:contains("'+9+'")';
            WiChapterSPS9Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find(VarWiChapterSPS9).each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href").length;
                        var divSite = $(this).find('.reference').attr('href');

                        var divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            WiChapterSPS9.push(divSiteFull);
                        }


                    });
                });
            })
        }
        else{}
        if (WiChapterStat15.length === 0) {
            const WiChapterStat15Array = ["https://docs.legis.wisconsin.gov/statutes/statutes/15"];
            let VarWiChapterStat15 = 'div:contains("'+15+'")';
            WiChapterStat15Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find('a').each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href");
                        let divSite = $(this).attr('href');

                        let divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            let incStr = divSite.includes("document/statutes/15");
                            let incStr2 = divSite.includes("pdf");
                            if (incStr === true && incStr2 === false) {
                                WiChapterStat15.push(divSiteFull);
                            }
                        }

                    });
                });
            })
        }
        else{}
        if (WiChapterStat440.length === 0) {
            const WiChapterStat440Array = ["https://docs.legis.wisconsin.gov/statutes/statutes/440"];
            let VarWiChapterStat440 = 'div:contains("'+440+'")';
            WiChapterStat440Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find('a').each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href");
                        let divSite = $(this).attr('href');

                        let divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            let incStr = divSite.includes("document/statutes/440");
                            let incStr2 = divSite.includes("pdf");
                            if (incStr === true && incStr2 === false) {
                                WiChapterStat440.push(divSiteFull);
                            }
                        }

                    });
                });
            })
        }
        else{}
        if (WiChapterStat450.length === 0) {
            const WiChapterStat450Array = ["https://docs.legis.wisconsin.gov/statutes/statutes/450"];
            let VarWiChapterStat450 = 'div:contains("'+450+'")';
            WiChapterStat450Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find('a').each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href");
                        let divSite = $(this).attr('href');

                        let divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            let incStr = divSite.includes("document/statutes/450");
                            let incStr2 = divSite.includes("pdf");
                            if (incStr === true && incStr2 === false) {
                                WiChapterStat450.push(divSiteFull);
                            }
                        }

                    });
                });
            })
        }
        else{}
        if (WiChapterStat961.length === 0){
            const WiChapterStat961Array = ["https://docs.legis.wisconsin.gov/statutes/statutes/961"];
            let VarWiChapterStat961 = 'div:contains("'+961+'")';
            WiChapterStat961Array.forEach(function (item, index) {
                $.get(item, function (html) {

                    // Loop through elements you want to scrape content from
                    $(html).find('a').each(function () {
                        //create exception if site fails
                        var data = {};
                        var divDetail = $(this).text();
                        //const divSite = document.getElementsByTagName("href");
                        let divSite = $(this).attr('href');

                        let divSiteFull = `https://docs.legis.wisconsin.gov${divSite}`

                        if (divSite !== undefined) {
                            let incStr = divSite.includes("document/statutes/961");
                            let incStr2 = divSite.includes("pdf");
                            if (incStr === true && incStr2 === false) {
                                WiChapterStat961.push(divSiteFull);
                            }
                        }

                    });
                });
            })
        }
        else{}
        WiAdd();
    }
    else{}

    if ($('input#MN').prop('checked')) {
        MNAdd();
    }
    else{}
    //$("#showData").append(arrItems);
    //alert(arrItems);

    //JSONToHTMLTable(arrItems, "showData");

}
function MNAdd() {

    //keyword and state variable
    let keyword = $("input#keyword").val();
    let keywordFormatted = 'div:contains("' + keyword + '")';
    let keywordFormattedA = 'div:contains('+keyword+')';
    let keywordFormattedB = ':contains('+keyword+')';
    let keywordFormattedC = ':contains("'+keyword+'")';
    var state = "MN";

//array of websites
    //Pharmacy Rules
    // const stateArray = ["https://www.revisor.mn.gov/statutes/cite/151.102"];
    const stateArray = ["https://www.ilga.gov/ftp/ILCS/Ch%200225/Act%200085/022500850F.html"];

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
    const stateArray = [];
    if ($('input#Phar1').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar1);
    }
    if ($('input#Phar2').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar2);
    }
    if ($('input#Phar4').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar4);
    }
    if ($('input#Phar5').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar5);
    }
    if ($('input#Phar6').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar6);
    }
    if ($('input#Phar7').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar7);
    }
    if ($('input#Phar8').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar8);
    }
    if ($('input#Phar9').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar9);
    }
    if ($('input#Phar10').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar10);
    }
    if ($('input#Phar11').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar11);
    }
    if ($('input#Phar12').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar12);
    }
    if ($('input#Phar13').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar13);
    }
    if ($('input#Phar14').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar14);
    }
    if ($('input#Phar15').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar15);
    }
    if ($('input#Phar16').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar16);
    }
    if ($('input#Phar17').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterPhar17);
    }
    if ($('input#SPS1').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterSPS1);
    }
    if ($('input#SPS2').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterSPS2);
    }
    if ($('input#SPS3').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterSPS3);
    }
    if ($('input#SPS4').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterSPS4);
    }
    if ($('input#SPS6').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterSPS6);
    }
    if ($('input#SPS7').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterSPS7);
    }
    if ($('input#SPS8').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterSPS8);
    }
    if ($('input#SPS9').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterSPS9);
    }
    if ($('input#Stat15').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterStat15);
    }
    if ($('input#Stat440').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterStat440);
    }
    if ($('input#Stat450').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterStat450);
    }
    if ($('input#Stat961').prop('checked')) {
        Array.prototype.push.apply(stateArray, WiChapterStat961);
    }

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
                        return `<a target="_blank" rel="noopener noreferrer" href="https://docs.legis.wisconsin.gov${href}">https://docs.legis.wisconsin.gov${text}</a>`;
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