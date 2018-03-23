/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
var myStyle1 = function(feature) {
  switch(feature.properties.ZIP){
    case 19108:
    case 19112:
    case 19133:
    case 19121:
    case 19122:
    case 19132:
    case 19140:
    case 19134:
    case 19123:
    case 19139:
    return {
      radius: 25,
      color: '#2D123B',
      Opacity:0,
      weight: 1,
      fillColor: '#2D123B',
      fillOpacity: 0.2
    };
    case 19107:
    case 19146:
    case 19143:
    case 19142:
    case 19145:
    case 19148:
    case 19144:
    case 19124:
    case 19125:
     return {
      radius: 20,
      color: '#2D123B',
      Opacity:0,
      weight: 1,
      fillColor: '#2D123B',
      fillOpacity: 0.2
    };
    case 19141:
    case 19131:
    case 19120:
    case 19137:
    case 19138:
    case 19151:
    case 19147:
    case 19135:
    case 19126:
    case 19102:
     return {
      radius: 15,
      color: '#2D123B',
      Opacity:0,
      weight: 1,
      fillColor: '#2D123B',
      fillOpacity: 0.2
    };
    case 19136:
    case 19129:
    case 19153:
    case 19149:
    case 19152:
    case 19103:
    case 19111:
    case 19130:
    case 19115:
     return {
      radius: 10,
      color: '#2D123B',
      Opacity:0,
      weight: 1,
      fillColor: '#2D123B',
      fillOpacity: 0.2
    };
    default: return {
      radius: 5,
      color: '#2D123B',
      Opacity:0,
      weight: 1,
      fillColor: '#2D123B',
      fillOpacity: 0.2
    };
  }
};
var default1 = {radius: 2.5, color: '#2D123B',  weight: 0, opacity: 0, fillOpacity: 0};

var default2 = function(housing) {
  switch(housing.properties.PREVENTION){
    case "Y":
    return {
      radius: 5,
      color: '#B24CE6',
      weight: 5,
      opacity: 0.9
    };
    case "N":
    return {
      radius: 5,
      color: '#AEBF2A',
      weight: 5,
      opacity: 0.9
    };
  }
};

var default3 = function(housing) {
  switch(housing.properties.SENIORS){
    case "Y":
    return {
      radius: 5,
      color: '#46B0B8',
      weight: 5,
      opacity: 0.9
    };
    case "N":
    return {
      radius: 5,
      color: '#6C808C',
      weight: 5,
      opacity: 0.9
    };
  }
};

var default4 = function(housing) {
  switch(housing.properties.PRE_PURCHA){
    case "Y":
    return {
      radius: 5,
      color: '#634545',
      weight: 5,
      opacity: 0.9
    };
    case "N":
    return {
      radius: 5,
      color: '#B0FFF2',
      weight: 5,
      opacity: 0.9
    };
  }
};

var defaultSytles = function(housing, slideNumber) {
  switch (slideNumber) {
    case 0: return {
      radius: 2.5, color: '#6d6d6d',  weight: 5
    };
    case 1: return {
      radius: 2.5, color: '#f4cb42',  weight: 0
    };
    case 2: return default2(housing);
    case 3: return default3(housing);
    case 4: return default4(housing);
    case 5: return {
      radius: 2.5,
      color: '#f99a43',
      weight: 5,
    };
  }
};


var myStyle2 = function(feature) {
  switch(feature.properties.PREVENTION){
    case "Y":
    return {
      radius: 7.5,
      color: '#B24CE6',
      Opacity:0,
      weight: 0,
      fillColor: '#B24CE6',
      fillOpacity: 0.1
    };
    case "N":
    return {
      radius: 7.5,
      color: '#AEBF2A',
      Opacity:0,
      weight: 0,
      fillColor: '#AEBF2A',
      fillOpacity: 0.1
    };
  }
};

var myStyle3 = function(feature) {
  switch(feature.properties.SENIORS){
    case "Y":
    return {
      radius: 7.5,
      color: '#46B0B8',
      Opacity: 0,
      weight: 0,
      fillColor: '#46B0B8',
      fillOpacity: 0.1
    };
  case "N":
    return {
      radius: 7.5,
      color: '#6C808C',
      Opacity:0,
      weight: 0,
      fillColor: '#6C808C',
      fillOpacity: 0.1
    };
  }
};

var myStyle4 = function(feature) {
  switch(feature.properties.PRE_PURCHA){
    case "Y":
    return {
      radius: 7.5,
      color: '#634545',
      Opacity:0,
      weight: 0,
      fillColor: '#634545',
      fillOpacity: 0.1
    };
    case "N":
    return {
      radius: 7.5,
      color: '#B0FFF2',
      Opacity:0,
      weight: 0,
      fillColor: '#B0FFF2',
      fillOpacity: 0.1
    };
  }
};
