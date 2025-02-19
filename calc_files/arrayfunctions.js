function addArrs(ar1, ar2){
	// piecewise adds two arrays together
    var ar3 = [];
    for(var i in ar1)
        ar3.push(ar1[i] + ar2[i]);
    return ar3;
}

function IntArr(ar1){
    var ar3 = [];
    for(var i in ar1){
        ar3.push(parseInt(ar1[i]));
    }
    return ar3;
}

function negArr(ar1){
    var ar3 = [];
    for(var i in ar1){
        ar3.push(-ar1[i]);
    }
    return ar3;
}

function FloatArr(ar1){
    var ar3 = [];
    for(var i in ar1){
        ar3.push(parseFloat(ar1[i]));
    }
    return ar3;
}

function sumArray(ar){
    // piecewise adds two arrays together
    var ar3 = 0;
    for(var i in ar){
        ar3+=ar[i];
    }
    return ar3;
}

function maxArray(ar){
    // piecewise adds two arrays together
    var max = 0;
    for(var i in ar)
        if(ar[i]>max){
            max=ar[i];
        }
    return max;
}

function minArray(ar){
    // piecewise adds two arrays together
    var min = ar[0];
    for(var i in ar)
        if(ar[i]<min){
            min=ar[i];
        }
    return min;
}

function avgArray(ar){
    // arithmetic average
    var sum = 0;
    for(var i in ar){
        sum+=ar[i];
    }
    return sum/ar.length;
}

function percentileArray(ar,percentile){
    // returns value of percentile for an array
    var arraylength=ar.length;
    ar2=ar.slice();
    ar2.sort( function(a,b) {return a - b;} );

    return ar2[Math.round(percentile/100*(arraylength-1))];

}

function sortArray(ar){
    ar.sort( function(a,b) {return a - b;} );
    return ar;
}

function medianArray(ar){
    ar.sort( function(a,b) {return a - b;} );

    var half = Math.floor(ar.length/2);

    if(ar.length % 2)
        return ar[half];
    else
        return (ar[half-1] + ar[half]) / 2.0;
}

function drawRandomArrayElement(arr){
    return arr[getRandomInt(0,arr.length-1)];
}

function multArrs(ar1, ar2){
	// piecewise multiplies two arrays together
    var ar3 = [];
    for(var i in ar1)
        ar3.push(ar1[i] * ar2[i]);
    return ar3;
}

function multArrByScal(ar, scal){
	// piecewise multiplies an array by a scalar
    var ar3 = [];
    for(var i in ar)
        ar3.push(ar[i] * scal);
    return ar3;
}

function addArrWScal(ar, scal){
	// piecewise adds a scalar to each element in array 
    var ar3 = [];
    for(var i in ar)
        ar3.push(ar[i] + scal);
    return ar3;
}

function arrayColumn(arr, n) {
    // returns a slice on index (column n) across an array of arrays (rows)
      return arr.map(x=> x[n]);
    }

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

function roundArray(arr,precision) {
    var ar3 = [];
    for(var i in arr)
        ar3.push(precisionRound(arr[i],precision));
    return ar3;
}

function formatArrayMagnitude(arr,precision) {
    var temparr = [];
    for(var i in arr)
        if (arr[i]>1e9 || arr[i]<-1e9){
            temparr.push(precisionRound(arr[i]/1000000000,precision)+'B');
        } else if (arr[i]>1e6 || arr[i]<-1e6){
            temparr.push(precisionRound(arr[i]/1000000,precision)+'M');
        } else if (arr[i]>1e3 || arr[i]<-1e3){
            temparr.push(precisionRound(arr[i]/1000,precision)+'k');
        } else {
            temparr.push(arr[i]);
        }

    return temparr;
}



function fillArray(num,element){
    ar2=[];
    for (var i=0;i<num;i++){
        ar2[i]=element;
    }
    return ar2;
}

function stepArray(start,end){
    ar2=[];
    for (var i=start;i<=end;i++){
        ar2.push(i);
    }
    return ar2;
}

function splitPosNegArray(array){
    var posArray=[];
    var negArray=[];

    for (var i=0;i<array.length;i++){
        if (array[i]>0){
            posArray.push(array[i]);
        }
        if (array[i]<0){
            negArray.push(array[i]);
        }
    }
    return [posArray,negArray];
}

function formatElements(array,precision,string){
    var ar2=[];

    for (var i=0;i<array.length;i++){
        ar2[i]=array[i].toFixed(precision)+string;
    }
    return ar2;
}

function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

function reshape2DArray(array){
    //turn a table from wide to tall or vice versa

    var width=array[0].length;
    var height=array.length;

    newarray = Create2DArray(width);
    for (var i=0;i<width;i++){
        for (var j=0;j<height;j++){
            newarray[i][j]=array[j][i];
        }       
    }
    return newarray;
}