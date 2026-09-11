var wms_layers = [];

var format_Chad_0 = new ol.format.GeoJSON();
var features_Chad_0 = format_Chad_0.readFeatures(json_Chad_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chad_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chad_0.addFeatures(features_Chad_0);
var lyr_Chad_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chad_0, 
                style: style_Chad_0,
                popuplayertitle: 'Chad',
                interactive: false,
                title: '<img src="styles/legend/Chad_0.png" /> Chad'
            });
var format_CentralAfricanRepublic_1 = new ol.format.GeoJSON();
var features_CentralAfricanRepublic_1 = format_CentralAfricanRepublic_1.readFeatures(json_CentralAfricanRepublic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentralAfricanRepublic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralAfricanRepublic_1.addFeatures(features_CentralAfricanRepublic_1);
var lyr_CentralAfricanRepublic_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentralAfricanRepublic_1, 
                style: style_CentralAfricanRepublic_1,
                popuplayertitle: 'Central African Republic',
                interactive: false,
                title: '<img src="styles/legend/CentralAfricanRepublic_1.png" /> Central African Republic'
            });
var format_Cameroon_2 = new ol.format.GeoJSON();
var features_Cameroon_2 = format_Cameroon_2.readFeatures(json_Cameroon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cameroon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cameroon_2.addFeatures(features_Cameroon_2);
var lyr_Cameroon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cameroon_2, 
                style: style_Cameroon_2,
                popuplayertitle: 'Cameroon',
                interactive: false,
                title: '<img src="styles/legend/Cameroon_2.png" /> Cameroon'
            });
var format_SouthSudan_3 = new ol.format.GeoJSON();
var features_SouthSudan_3 = format_SouthSudan_3.readFeatures(json_SouthSudan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthSudan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthSudan_3.addFeatures(features_SouthSudan_3);
var lyr_SouthSudan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthSudan_3, 
                style: style_SouthSudan_3,
                popuplayertitle: 'South Sudan',
                interactive: false,
                title: '<img src="styles/legend/SouthSudan_3.png" /> South Sudan'
            });
var format_Sudan_4 = new ol.format.GeoJSON();
var features_Sudan_4 = format_Sudan_4.readFeatures(json_Sudan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sudan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sudan_4.addFeatures(features_Sudan_4);
var lyr_Sudan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sudan_4, 
                style: style_Sudan_4,
                popuplayertitle: 'Sudan',
                interactive: false,
                title: '<img src="styles/legend/Sudan_4.png" /> Sudan'
            });
var format_MediaReview_5 = new ol.format.GeoJSON();
var features_MediaReview_5 = format_MediaReview_5.readFeatures(json_MediaReview_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MediaReview_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MediaReview_5.addFeatures(features_MediaReview_5);
var lyr_MediaReview_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MediaReview_5, 
                style: style_MediaReview_5,
                popuplayertitle: 'Media Review ',
                interactive: true,
    title: 'Media Review <br />\
    <img src="styles/legend/MediaReview_5_0.png" /> Economy <br />\
    <img src="styles/legend/MediaReview_5_1.png" /> Humanitarian<br />\
    <img src="styles/legend/MediaReview_5_2.png" /> Photo<br />\
    <img src="styles/legend/MediaReview_5_3.png" /> Politics & Governance<br />\
    <img src="styles/legend/MediaReview_5_4.png" /> Resilience & Extras<br />\
    <img src="styles/legend/MediaReview_5_5.png" /> Security<br />' });

lyr_Chad_0.setVisible(true);lyr_CentralAfricanRepublic_1.setVisible(true);lyr_Cameroon_2.setVisible(true);lyr_SouthSudan_3.setVisible(true);lyr_Sudan_4.setVisible(true);lyr_MediaReview_5.setVisible(true);
var layersList = [lyr_Chad_0,lyr_CentralAfricanRepublic_1,lyr_Cameroon_2,lyr_SouthSudan_3,lyr_Sudan_4,lyr_MediaReview_5];
lyr_Chad_0.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_CentralAfricanRepublic_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'admin2Name': 'admin2Name', 'admin2Pcod': 'admin2Pcod', 'admin3Name': 'admin3Name', 'admin3Pcod': 'admin3Pcod', 'admin3RefN': 'admin3RefN', 'admin3AltN': 'admin3AltN', 'admin3Al_1': 'admin3Al_1', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Rowcacode1': 'Rowcacode1', 'Rowcacode2': 'Rowcacode2', 'Rowcacode3': 'Rowcacode3', 'Density': 'Density', });
lyr_Cameroon_2.set('fieldAliases', {'adm3_name': 'adm3_name', 'adm3_name1': 'adm3_name1', 'adm3_name2': 'adm3_name2', 'adm3_name3': 'adm3_name3', 'adm3_pcode': 'adm3_pcode', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm3_ref_n': 'adm3_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_SouthSudan_3.set('fieldAliases', {'adm3_name': 'adm3_name', 'adm3_name1': 'adm3_name1', 'adm3_name2': 'adm3_name2', 'adm3_name3': 'adm3_name3', 'adm3_pcode': 'adm3_pcode', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm3_ref_n': 'adm3_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Sudan_4.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_MediaReview_5.set('fieldAliases', {'Title': 'Title', 'Date': 'Date', 'Type': 'Type', 'Link': 'Link', 'Source Name': 'Source Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Chad_0.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_CentralAfricanRepublic_1.set('fieldImages', {'OBJECTID_1': 'Range', 'admin0Name': 'TextEdit', 'admin0Pcod': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'admin2Name': 'TextEdit', 'admin2Pcod': 'TextEdit', 'admin3Name': 'TextEdit', 'admin3Pcod': 'TextEdit', 'admin3RefN': 'TextEdit', 'admin3AltN': 'TextEdit', 'admin3Al_1': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Rowcacode1': 'TextEdit', 'Rowcacode2': 'TextEdit', 'Rowcacode3': 'TextEdit', 'Density': 'TextEdit', });
lyr_Cameroon_2.set('fieldImages', {'adm3_name': 'TextEdit', 'adm3_name1': 'TextEdit', 'adm3_name2': 'TextEdit', 'adm3_name3': 'TextEdit', 'adm3_pcode': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm3_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_SouthSudan_3.set('fieldImages', {'adm3_name': 'TextEdit', 'adm3_name1': 'TextEdit', 'adm3_name2': 'TextEdit', 'adm3_name3': 'TextEdit', 'adm3_pcode': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm3_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Sudan_4.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_MediaReview_5.set('fieldImages', {'Title': 'TextEdit', 'Date': 'TextEdit', 'Type': 'TextEdit', 'Link': 'TextEdit', 'Source Name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Chad_0.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_CentralAfricanRepublic_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'admin1Name': 'no label', 'admin1Pcod': 'no label', 'admin2Name': 'no label', 'admin2Pcod': 'no label', 'admin3Name': 'no label', 'admin3Pcod': 'no label', 'admin3RefN': 'no label', 'admin3AltN': 'no label', 'admin3Al_1': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Rowcacode1': 'no label', 'Rowcacode2': 'no label', 'Rowcacode3': 'no label', 'Density': 'no label', });
lyr_Cameroon_2.set('fieldLabels', {'adm3_name': 'no label', 'adm3_name1': 'no label', 'adm3_name2': 'no label', 'adm3_name3': 'no label', 'adm3_pcode': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm3_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_SouthSudan_3.set('fieldLabels', {'adm3_name': 'no label', 'adm3_name1': 'no label', 'adm3_name2': 'no label', 'adm3_name3': 'no label', 'adm3_pcode': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm3_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Sudan_4.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_MediaReview_5.set('fieldLabels', {'Title': 'no label', 'Date': 'no label', 'Type': 'no label', 'Link': 'no label', 'Source Name': 'no label', 'Location': 'no label', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_MediaReview_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});