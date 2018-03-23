/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */

var slideName = ["Find Your Housing Counseling Agency", "Zipcodes", "Prevention", "Serves Seniors", "Will Aide Pre-Purchase", "Examining Action AIDS"];
var mydescription0 = "";
mydescription0 += "<p>This is a group of story maps about the 28 Housing Counseling Agencies in Philadelphia.</p>";
mydescription0 += "<p>The following slides map out these agencies by Zipcode, if they help those seeking to prevent foreclosure, serves seniors, and will counsel without homeownershp.</p>";
mydescription0 += "<p>Legends in the upper left will indicate classifications type of services provided.</p>";
mydescription0 += "<p>You can also click the points on the maps to check out their name and address!</p>";

var description = [$('#mydescription0'), $('#mydescription1'), $('#mydescription2'), $('#mydescription3'),$('#mydescription4'),$('#mydescription5')];
var legend = [$('#legend1'),$('#legend2'),$('#legend3'),$('#legend4'), $('#legend5')];
var downloadData = $.ajax("https://raw.githubusercontent.com/CPLN-692-401/datasets/master/geojson/HousingCounselingAgencies.geojson");
var parseData = function(downloadedData){
  return JSON.parse(downloadedData).features;
};

var myPopups = function(myObject) {
  var myHtml = "";
  myHtml += "<table><tr><th>Name:</th><td>"+ myObject.properties.NAME + "</td></tr></table>";
  myHtml += "<table><tr><th>Address:</th><td>"+ myObject.properties.ADDRESS + "</td></tr></table>";
  return myHtml;
};

var plotMarkers = function(parsedData) {
  _.each(parsedData, function(myObject){
    myMarker1 = L.circleMarker([myObject.geometry.coordinates[1], myObject.geometry.coordinates[0]],
    {radius: 10, color:'#6d6d6d', weight: 1, opacity: 0, fillColor: '#6d6d6d', fillOpacity: 0.2});
    myMarker1.addTo(map);
    markers.push(myMarker1);
  });
};

var plotDefault = function(parsedData,slideNumber) {
  _.each(parsedData, function(myObject){
    defaultMarkers = L.circleMarker([myObject.geometry.coordinates[1], myObject.geometry.coordinates[0]],
    defaultSytles(myObject, slideNumber));
    defaultMarkers.bindPopup(myPopups(myObject)).addTo(map);
    markers.push(defaultMarkers);
  });
};

var removeMarkers = function(markers){
  _.each(markers, function(marker){
    map.removeLayer(marker);
  });
};

var removefeatureLayer = function(featureLayer){
  map.removeLayer(featureLayer);
};
