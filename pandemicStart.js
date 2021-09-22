//condition
const pandemicStartMap = "01000000X000X011X0X";

var pandemicSectors = pandemicStartMap.replace(/\D+/g,'');

//---------------ForpandemicStart----------------//
for (var districts in pandemicStartMap) {
    if(pandemicStartMap.hasOwnProperty(districts)){
            var newElement = document.createElement('div');
            newElement.className = "mapElement";
            newElement.id = "div"+pandemicStartMap[districts];
            document.getElementById('startPandemic').appendChild(newElement);
    }

}

//counting the value

document.getElementById('totalStart').innerHTML = 'Total: ' + pandemicSectors.length + ' sectors';
document.getElementById('infectedStart').innerHTML = 'Infected: ' + pandemicStartMap.match(/[1]/g).length + ' sectors' + ' ('+ Number(pandemicStartMap.match(/[1]/g).length)/Number((pandemicStartMap.length))*100 + '%)';


//---------------ForpandemicEnd----------------//

//make sectors
    var sector1 = pandemicStartMap.slice(0, 9);
    var sector2 = pandemicStartMap.slice(9, 13);
    var sector3 = pandemicStartMap.slice(13, 17);
    var sector4 = pandemicStartMap.slice(17, 20);

//give the sectors conditions
    
    //for first sector

    if(sector1.includes('1')){
        var sector1infected = sector1.replaceAll("0", "1");
    }
    else {
        var sector1infected = sector1;
    }

    //for second sector

    if(sector2.includes('1')){
        var sector2infected = sector2.replaceAll("0", "1");
    }
    else {
        var sector2infected = sector2;
    }

    //for third sector

    if(sector3.includes('1')){
        var sector3infected = sector3.replaceAll("0", "1");
    }
    else {
        var sector3infected = sector3;
    }

    //for fourth sector

    if(sector4.includes('1')){
        var sector4infected = sector4.replaceAll("0", "1");
    }
    else {
        var sector4infected = sector4;
    }



const pandemicEndMap = sector1infected + sector2infected + sector3infected + sector4infected;

for (var districts in pandemicEndMap) {
     if(pandemicEndMap.hasOwnProperty(districts)){
            var newElement = document.createElement('div');
            newElement.className = "mapElement";
            newElement.id = "div"+pandemicEndMap[districts];
            document.getElementById('endPandemic').appendChild(newElement);
    }
}

//counting the value
document.getElementById('totalEnd').innerHTML = 'Total: ' + pandemicSectors.length + ' sectors';
document.getElementById('infectedEnd').innerHTML = 'Infected: ' + pandemicEndMap.match(/[1]/g).length + ' sectors' + ' ('+ Number(pandemicEndMap.match(/[1]/g).length)/Number(pandemicSectors.length)*100 + '%)';