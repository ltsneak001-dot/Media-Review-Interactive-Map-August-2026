var wms_layers = [];

var format_tcd_admin2_0 = new ol.format.GeoJSON();
var features_tcd_admin2_0 = format_tcd_admin2_0.readFeatures(json_tcd_admin2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tcd_admin2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tcd_admin2_0.addFeatures(features_tcd_admin2_0);
var lyr_tcd_admin2_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tcd_admin2_0, 
                style: style_tcd_admin2_0,
                popuplayertitle: 'tcd_admin2',
                interactive: false,
                title: '<img src="styles/legend/tcd_admin2_0.png" /> tcd_admin2'
            });
var format_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1 = new ol.format.GeoJSON();
var features_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1 = format_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1.readFeatures(json_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1.addFeatures(features_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1);
var lyr_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1, 
                style: style_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1,
                popuplayertitle: 'caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha',
                interactive: false,
                title: '<img src="styles/legend/caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1.png" /> caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha'
            });
var format_cmr_admin3_2 = new ol.format.GeoJSON();
var features_cmr_admin3_2 = format_cmr_admin3_2.readFeatures(json_cmr_admin3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cmr_admin3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cmr_admin3_2.addFeatures(features_cmr_admin3_2);
var lyr_cmr_admin3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cmr_admin3_2, 
                style: style_cmr_admin3_2,
                popuplayertitle: 'cmr_admin3',
                interactive: false,
                title: '<img src="styles/legend/cmr_admin3_2.png" /> cmr_admin3'
            });
var format_ssd_admin3_3 = new ol.format.GeoJSON();
var features_ssd_admin3_3 = format_ssd_admin3_3.readFeatures(json_ssd_admin3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ssd_admin3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ssd_admin3_3.addFeatures(features_ssd_admin3_3);
var lyr_ssd_admin3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ssd_admin3_3, 
                style: style_ssd_admin3_3,
                popuplayertitle: 'ssd_admin3',
                interactive: false,
                title: '<img src="styles/legend/ssd_admin3_3.png" /> ssd_admin3'
            });
var format_sdn_admin2_4 = new ol.format.GeoJSON();
var features_sdn_admin2_4 = format_sdn_admin2_4.readFeatures(json_sdn_admin2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sdn_admin2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sdn_admin2_4.addFeatures(features_sdn_admin2_4);
var lyr_sdn_admin2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sdn_admin2_4, 
                style: style_sdn_admin2_4,
                popuplayertitle: 'sdn_admin2',
                interactive: false,
                title: '<img src="styles/legend/sdn_admin2_4.png" /> sdn_admin2'
            });
var format_MediaReviewtableAugust_5 = new ol.format.GeoJSON();
var features_MediaReviewtableAugust_5 = format_MediaReviewtableAugust_5.readFeatures(json_MediaReviewtableAugust_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MediaReviewtableAugust_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MediaReviewtableAugust_5.addFeatures(features_MediaReviewtableAugust_5);
var lyr_MediaReviewtableAugust_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MediaReviewtableAugust_5, 
                style: style_MediaReviewtableAugust_5,
                popuplayertitle: 'Media Review table(August)',
                interactive: true,
    title: 'Media Review table(August)<br />\
    <img src="styles/legend/MediaReviewtableAugust_5_0.png" /> Economy <br />\
    <img src="styles/legend/MediaReviewtableAugust_5_1.png" /> Humanitarian<br />\
    <img src="styles/legend/MediaReviewtableAugust_5_2.png" /> Photo<br />\
    <img src="styles/legend/MediaReviewtableAugust_5_3.png" /> Politics & Governance<br />\
    <img src="styles/legend/MediaReviewtableAugust_5_4.png" /> Resilience & Extras<br />\
    <img src="styles/legend/MediaReviewtableAugust_5_5.png" /> Security<br />' });

lyr_tcd_admin2_0.setVisible(true);lyr_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1.setVisible(true);lyr_cmr_admin3_2.setVisible(true);lyr_ssd_admin3_3.setVisible(true);lyr_sdn_admin2_4.setVisible(true);lyr_MediaReviewtableAugust_5.setVisible(true);
var layersList = [lyr_tcd_admin2_0,lyr_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1,lyr_cmr_admin3_2,lyr_ssd_admin3_3,lyr_sdn_admin2_4,lyr_MediaReviewtableAugust_5];
lyr_tcd_admin2_0.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'admin2Name': 'admin2Name', 'admin2Pcod': 'admin2Pcod', 'admin3Name': 'admin3Name', 'admin3Pcod': 'admin3Pcod', 'admin3RefN': 'admin3RefN', 'admin3AltN': 'admin3AltN', 'admin3Al_1': 'admin3Al_1', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Rowcacode1': 'Rowcacode1', 'Rowcacode2': 'Rowcacode2', 'Rowcacode3': 'Rowcacode3', 'Density': 'Density', });
lyr_cmr_admin3_2.set('fieldAliases', {'adm3_name': 'adm3_name', 'adm3_name1': 'adm3_name1', 'adm3_name2': 'adm3_name2', 'adm3_name3': 'adm3_name3', 'adm3_pcode': 'adm3_pcode', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm3_ref_n': 'adm3_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_ssd_admin3_3.set('fieldAliases', {'adm3_name': 'adm3_name', 'adm3_name1': 'adm3_name1', 'adm3_name2': 'adm3_name2', 'adm3_name3': 'adm3_name3', 'adm3_pcode': 'adm3_pcode', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm3_ref_n': 'adm3_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_sdn_admin2_4.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_MediaReviewtableAugust_5.set('fieldAliases', {'Title': 'Title', 'Date': 'Date', 'Type': 'Type', 'Link': 'Link', 'Source Name': 'Source Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tcd_admin2_0.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1.set('fieldImages', {'OBJECTID_1': 'Range', 'admin0Name': 'TextEdit', 'admin0Pcod': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'admin2Name': 'TextEdit', 'admin2Pcod': 'TextEdit', 'admin3Name': 'TextEdit', 'admin3Pcod': 'TextEdit', 'admin3RefN': 'TextEdit', 'admin3AltN': 'TextEdit', 'admin3Al_1': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Rowcacode1': 'TextEdit', 'Rowcacode2': 'TextEdit', 'Rowcacode3': 'TextEdit', 'Density': 'TextEdit', });
lyr_cmr_admin3_2.set('fieldImages', {'adm3_name': 'TextEdit', 'adm3_name1': 'TextEdit', 'adm3_name2': 'TextEdit', 'adm3_name3': 'TextEdit', 'adm3_pcode': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm3_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_ssd_admin3_3.set('fieldImages', {'adm3_name': 'TextEdit', 'adm3_name1': 'TextEdit', 'adm3_name2': 'TextEdit', 'adm3_name3': 'TextEdit', 'adm3_pcode': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm3_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_sdn_admin2_4.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_MediaReviewtableAugust_5.set('fieldImages', {'Title': 'TextEdit', 'Date': 'TextEdit', 'Type': 'TextEdit', 'Link': 'TextEdit', 'Source Name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tcd_admin2_0.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_caf_admbnda_adm3_200k_sigcaf_reach_itos_ocha_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'admin1Name': 'no label', 'admin1Pcod': 'no label', 'admin2Name': 'no label', 'admin2Pcod': 'no label', 'admin3Name': 'no label', 'admin3Pcod': 'no label', 'admin3RefN': 'no label', 'admin3AltN': 'no label', 'admin3Al_1': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Rowcacode1': 'no label', 'Rowcacode2': 'no label', 'Rowcacode3': 'no label', 'Density': 'no label', });
lyr_cmr_admin3_2.set('fieldLabels', {'adm3_name': 'no label', 'adm3_name1': 'no label', 'adm3_name2': 'no label', 'adm3_name3': 'no label', 'adm3_pcode': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm3_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_ssd_admin3_3.set('fieldLabels', {'adm3_name': 'no label', 'adm3_name1': 'no label', 'adm3_name2': 'no label', 'adm3_name3': 'no label', 'adm3_pcode': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm3_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_sdn_admin2_4.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_MediaReviewtableAugust_5.set('fieldLabels', {'Title': 'no label', 'Date': 'no label', 'Type': 'no label', 'Link': 'no label', 'Source Name': 'no label', 'Location': 'no label', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_MediaReviewtableAugust_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});