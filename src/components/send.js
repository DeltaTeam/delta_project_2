const url = 'https://deltateam-host.herokuapp.com/task'; 

const sendData = (data) => {
    var data = {
            date: data.date,
            comment: data.comment,
            place: data.place,
            files: data.files,
        }
        var oReq = new XMLHttpRequest();
        oReq.open("POST", url);
        oReq.send(JSON.stringify(data));
    
        oReq.onload = function(oEvent) {
            if (oReq.status == 200) {
                console.log(oReq.response);
            } else {
                console.log({'status':'error'});
                }
        };
    }

export default sendData;