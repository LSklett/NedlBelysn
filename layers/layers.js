var wms_layers = [];


        var lyr_EsriLightGray_0 = new ol.layer.Tile({
            'title': 'Esri Light Gray',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_nedlegging_gatelys_1 = new ol.format.GeoJSON();
var features_nedlegging_gatelys_1 = format_nedlegging_gatelys_1.readFeatures(json_nedlegging_gatelys_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nedlegging_gatelys_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nedlegging_gatelys_1.addFeatures(features_nedlegging_gatelys_1);
var lyr_nedlegging_gatelys_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nedlegging_gatelys_1, 
                style: style_nedlegging_gatelys_1,
                popuplayertitle: 'nedlegging_gatelys',
                interactive: true,
                title: '<img src="styles/legend/nedlegging_gatelys_1.png" /> nedlegging_gatelys'
            });
var group_Forslagnedleggingavgatelys = new ol.layer.Group({
                                layers: [lyr_nedlegging_gatelys_1,],
                                fold: "open",
                                title: 'Forslag nedlegging av gatelys'});

lyr_EsriLightGray_0.setVisible(true);lyr_nedlegging_gatelys_1.setVisible(true);
var layersList = [lyr_EsriLightGray_0,group_Forslagnedleggingavgatelys];
lyr_nedlegging_gatelys_1.set('fieldAliases', {'fid': 'fid', 'Strekning': 'Strekning', 'Lyspunkt': 'Lyspunkt', 'Vegnummer': 'Vegnummer', 'Vegnavn': 'Vegnavn', 'Delstrekning': 'Delstrekning', });
lyr_nedlegging_gatelys_1.set('fieldImages', {'fid': 'TextEdit', 'Strekning': 'TextEdit', 'Lyspunkt': 'Range', 'Vegnummer': 'TextEdit', 'Vegnavn': 'TextEdit', 'Delstrekning': 'TextEdit', });
lyr_nedlegging_gatelys_1.set('fieldLabels', {'fid': 'hidden field', 'Strekning': 'header label - always visible', 'Lyspunkt': 'inline label - visible with data', 'Vegnummer': 'inline label - visible with data', 'Vegnavn': 'inline label - visible with data', 'Delstrekning': 'inline label - visible with data', });
lyr_nedlegging_gatelys_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});