20170808 - Sichuan had earthquate 7.1

Use <http://geojson.io/#map=3/48.75/86.22> to draw a rectangle of interest.

Use the API from <earthquake.usgs.gov> to get data:

https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02&minlatitude=17.895114303749143&maxlatitude=53.330872983017066&minlongitude=69.78515625&maxlongitude=134.208984375

https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=1900-01-01&endtime=2017-08-09&minlatitude=17.895114303749143&maxlatitude=53.330872983017066&minlongitude=69.78515625&maxlongitude=134.208984375&minmagnitude=5

Final command to get the data:

```
wget -O earthquake.json https://earthquake.usgs.gov/fdsnws/event/1/query\?format\=geojson\&starttime\=1900-01-01\&endtime\=2017-08-09\&minlatitude\=25.16517336866393\&maxlatitude\=33.8339199536547\&minlongitude\=95.77880859375\&maxlongitude\=110.56640625\&minmagnitude\=5
```

Map Geo JSON from: 

* http://ecomfe.github.io/echarts-map-tool/
* https://github.com/antvis/china-geojson
