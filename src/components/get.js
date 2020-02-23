const url = 'https://deltateam-host.herokuapp.com/task'; 
const getData = (setData) => {  
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url);
    oReq.send();

    oReq.onload = function(oEvent) {
        if (oReq.status == 200) {
            // console.log(oReq.response);
            var res = JSON.parse(oReq.response);
            var resData = new Array();
            for (let i in res){
                resData.push(
                    {
                        date: res[i].map.date,
                        place: res[i].map.place,
                        comment: res[i].map.comment,
                        files: res[i].map.files.myArrayList
                    }
                )
            }
            setData(JSON.stringify(resData));
        } else {
            console.log({'status':'error'});
            }
    };
    }



    // console.log(res.data)

export default getData;