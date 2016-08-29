 function getType(param) {
    if(param === null) {
        return "null";
    }
    else if(param === window) {
        return "window";
    }
    else if(param instanceof Date) {
        return "Date";
    }
    else if(param instanceof Array) {
        return "Array";
    }
    else if(param instanceof Function) {
        return "Function";
    }
    else {
        return typeof(param);
    }
}

function arraysSimilar(arr1, arr2){
            //判断arr1与arr2是否都是数组
            if( !(arr1 instanceof Array) || !(arr2 instanceof Array) ) {
                return false;
            }
            //判断数组长度是否相等
            if(arr1.length != arr2.length) {
                return false;
            }

            var array1 = [];
            var array2 = [];
            len = arr1.length;

            for(var i=0; i<len; i++) {
                array1.push(getType(arr1[i]));
                array2.push(getType(arr2[i]));
            }

            array1.sort();
            array2.sort();

            for(var i=0; i<len; i++) {
                if(array1[i] != array2[i]) {
                    return false;
                }
            }
            return true;
        }