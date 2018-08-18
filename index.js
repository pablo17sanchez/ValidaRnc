var qs = require("querystring");
var http = require("http");



var validrnc = (rnc)=>{
  
  return new Promise((resolve, reject) => {
    
if(!rnc) {

reject('Debe colocar algun numero')

}

    var options = {
      "method": "POST",
      "hostname": "www.dgii.gov.do",
      "port": null,
      "path": "/app/WebApps/ConsultasWeb/consultas/rnc.aspx",
      "headers": {
        "content-length": "1462",
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
        "postman-token": "9671f20a-5ad1-93d5-1f5a-e20d9031bc39"
      }
    };
    
   try {
     
 
  
    var req = http.request(options, function (res) {
      var chunks = [];


 
    
      res.on("data", function (chunk) {


        chunks.push(chunk);
      });
    
      res.on("end", function () {
        var body = Buffer.concat(chunks);
  
 
resolve(body.toString())



 
      });
    });
  } catch (error) {
     
  }

    req.write(qs.stringify({ 'ctl00$smMain': 'ctl00$cphMain$upBusqueda|ctl00$cphMain$btnBuscarPorRNC',
      'ctl00$cphMain$txtRNCCedula': rnc,
      'ctl00$cphMain$txtRazonSocial': '',
      __EVENTTARGET: '',
      __EVENTARGUMENT: '',
      __VIEWSTATE: '/wEPDwUKMTkxNDA2Nzc4Nw9kFgJmD2QWAgIBD2QWAgIDD2QWAmYPZBYCAgEPZBYEAgEPDxYIHgRUZXh0ZR4IQ3NzQ2xhc3MFBWxhYmVsHgRfIVNCAgIeB1Zpc2libGVoZGQCBQ8WAh4Fc3R5bGUFDmRpc3BsYXk6QmxvY2s7FggCAQ8WAh8EBQ1kaXNwbGF5Ok5vbmU7ZAIDDxYCHwQFDWRpc3BsYXk6Tm9uZTtkAgUPPCsADwIADxYEHgtfIURhdGFCb3VuZGceC18hSXRlbUNvdW50AgFkChAWBGYCAQIDAgQWBDwrAAUBABYCHgpIZWFkZXJUZXh0BQtDw6lkdWxhL1JOQzwrAAUBABYCHwcFFE5vbWJyZS9SYXrDs24gU29jaWFsPCsABQEAFgIfBwUKQ2F0ZWdvcsOtYTwrAAUBABYCHwcFEVLDqWdpbWVuIGRlIHBhZ29zFgRmZmZmFgJmD2QWFGYPDxYCHwNoZGQCAQ9kFgICAQ8PFgIfAAULMTMwLTQ4NjIxLTJkZAICD2QWAgIBDw8WAh8ABRNQT1NTT0xVVElPTiBDIFBPUiBBZGQCAw9kFgICAQ8PFgIfAAULUE9TU09MVVRJT05kZAIED2QWAgIBDw8WAh8ABQIgIGRkAgUPZBYCAgEPDxYCHwAFBk5PUk1BTGRkAgYPZBYCAgEPDxYCHwAFBkFDVElWT2RkAgcPZBYCAgEPDxYCHwAFWU1BTlRFTklNSUVOVE8gWSBSRVBBUkFDSSYjMjExO04gREUgTUFRVUlOQVJJQSBERSBPRklDSU5BLCBDT05UQUJJTElEQUQgRSBJTkZPUk0mIzE5MztUSUNBZGQCCA9kFgICAQ8PFgIfAAUbQURNIExPQ0FMIExPUyBQUiYjMjExO0NFUkVTZGQCCQ8PFgIfA2hkZAIHDzwrAA0BAA8WAh8DaGRkGAIFH2N0bDAwJGNwaE1haW4kZ3ZCdXNjUmF6b25Tb2NpYWwPZ2QFI2N0bDAwJGNwaE1haW4kZHZEYXRvc0NvbnRyaWJ1eWVudGVzDxQrAAdkZGRkZBYAAgFkspC3k1hg1U/9yYcMHmrShZT8gEY=',
      __EVENTVALIDATION: '/wEWBQKez7amBQLqq//bBAKC/r/9AwKhwMi7BAKKnIvVCa2MV9OhvxZYo7+JCdsQM4VWhHvc',
      __ASYNCPOST: 'false',
      'ctl00$cphMain$btnBuscarPorRNC': 'Buscar' }));

      request.on('error', function(err) {
        console.log('error');
    });

     
    req.end();
  }  );
}



validrnc('101001577').then(data=>{

console.log(data);

}).catch(err=>{

//console.log(err);

})

