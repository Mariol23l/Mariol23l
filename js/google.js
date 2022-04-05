function iniciarMap() {
  var coord = { lat: -9.1052648, lng: -78.445126 };
  var coord1 = { lat: -9.1052648, lng: -78.445126 };
  var coord2 = { lat: -9.0875161, lng: -78.5744993 };
  var coord3 = { lat: -13.1601967, lng: -74.2105598 };
  var coord4 = { lat: -7.1802364, lng: -78.4987903 };
  var coord5 = { lat: -12.1356856, lng: -76.9823077 };
  var coord6 = { lat: -12.1312784, lng: -76.9780385 };
  var coord7 = { lat: -12.1351023, lng: -76.983625 };
  var coord8 = { lat: -9.1052648, lng: -78.445126 };
  var coord9 = { lat: -13.5288868, lng: -71.9685427 };
  var coord10 = { lat: -9.9207648, lng: -76.2410843 };
  var coord11 = { lat: -12.0911024, lng: -77.0430452 };
  var coord12 = { lat: -12.0887381, lng: -75.1939345 };
  var coord13 = { lat: -8.1015433, lng: -79.0353092 };
  var coord14 = { lat: -8.0954928, lng: -79.0325268 };
  var coord15 = { lat: -7.7911198, lng: -79.2197376 };
  var coord16 = { lat: -8.1013406, lng: -79.0206591 };
  var coord18 = { lat: -6.7721715, lng: -79.8308298 };
  var coord19 = { lat: -6.7694061, lng: -79.8513816 };
  var coord20 = { lat: -12.1002616, lng: -77.0374549 };
  var coord21 = { lat: -6.7644009, lng: -79.84334 };
  var coord22 = { lat: -6.7689875, lng: -79.8480616 };
  var coord23 = { lat: -6.7756589, lng: -79.8455396 };
  var coord24 = { lat: -12.1445748, lng: -77.0148871 };
  var coord25 = { lat: -12.0713851, lng: -77.0443172 };
  var coord26 = { lat: -12.0853368, lng: -77.0832649 };
  var coord27 = { lat: -12.124196, lng: -76.9994851 };
  var coord28 = { lat: -12.0502511, lng: -76.950623 };
  var coord29 = { lat: -12.0242697, lng: -76.9830153 };
  var coord30 = { lat: -12.028855, lng: -77.0108201 };
  var coord31 = { lat: -11.986973, lng: -77.0086877 };
  var coord32 = { lat: -12.0784625, lng: -76.999114 };
  var coord33 = { lat: -12.0478509, lng: -77.0537237 };
  var coord34 = { lat: -12.0515624, lng: -77.0779484 };
  var coord35 = { lat: -12.0607303, lng: -77.0417518 };
  var coord36 = { lat: -12.0748087, lng: -77.074513 };
  var coord37 = { lat: -11.9354591, lng: -77.0553578 };
  var coord38 = { lat: -12.0391388, lng: -77.0507263 };
  var coord39 = { lat: -11.9864145, lng: -77.0592347 };
  var coord40 = { lat: -11.9587057, lng: -77.0620208 };
  var coord41 = { lat: -12.0748399, lng: -77.0923491 };
  var coord42 = { lat: -12.0122021, lng: -77.0586144 };
  var coord43 = { lat: -11.9664241, lng: -77.0745353 };
  var coord44 = { lat: -12.0591298, lng: -77.1250785 };
  var coord45 = { lat: -12.1673488, lng: -76.9519284 };
  var coord46 = { lat: -12.0841288, lng: -77.0425851 };
  var coord47 = { lat: -12.1954861, lng: -77.0024974 };
  var coord48 = { lat: -12.0270184, lng: -77.0158492 };
  var coord49 = { lat: -12.1551123, lng: -76.9698168 };
  var coord50 = { lat: -12.1551319, lng: -76.9722636 };
  var coord51 = { lat: -11.863433, lng: -77.0772222 };
  var coord52 = { lat: -11.9786616, lng: -77.0722465 };
  var coord53 = { lat: -5.1992225, lng: -80.628302 };
  var coord54 = { lat: -5.193969, lng: -80.6328867 };
  var coord55 = { lat: -5.1994565, lng: -80.6235385 };
  var coord57 = { lat: -15.4996879, lng: -70.129653 };
  var coord59 = { lat: -3.5557888, lng: -80.4270016 };
  var coord60 = { lat: -8.3749662, lng: -74.5283571 };
  var coord61 = { lat: -16.3900145, lng: -71.545463 };
  var coord62 = { lat: -6.7700798, lng: -79.8549907 };
  var coord63 = { lat: -16.3877072, lng: -71.5314102 };
  var coord64 = { lat: -6.7705825, lng: -79.8335235 };
  var coord65 = { lat: -12.0064474, lng: -77.0634941 };
  var coord66 = { lat: -12.0790363, lng: -77.0554556 };
  var coord67 = { lat: -12.1288391, lng: -77.0011065 };
  var coord68 = { lat: -11.9932472, lng: -77.0987004 };
  var coord69 = { lat: -13.426389, lng: -76.1354154 };
  var coord70 = { lat: -12.0265004, lng: -77.0550072 };
  var coord71 = { lat: -8.0913523, lng: -79.0047134 };
  var coord72 = { lat: -12.1148334, lng: -77.0110653 };
  var coord73 = { lat: -12.044844, lng: -77.040286 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: coord1,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
  var marker1 = new google.maps.Marker({
    position: coord1,
    map: map,
  });
  var marker2 = new google.maps.Marker({
    position: coord2,
    map: map,
    text: "CENTRO DE HEMODIÁLISIS CHIMBOTE S.A.C.",
  });
  var marker3 = new google.maps.Marker({
    position: coord3,
    map: map,
    text: "CENTRO DE DIALISIS SANTA ANA S.A.C.",
  });
  var marker4 = new google.maps.Marker({
    position: coord4,
    map: map,
    text: "LAURENT CENTRO DE HEMODIÁLISIS E.I.R.L.",
  });
  var marker5 = new google.maps.Marker({
    position: coord5,
    map: map,
    text: "CENTRO DE DIALSIS SAN FERNANDO S.A.C.",
  });
  var marker6 = new google.maps.Marker({
    position: coord6,
    map: map,
    text: "IGSA MEDICAL SERVICES PERÚ S.A.",
  });
  var marker7 = new google.maps.Marker({
    position: coord7,
    map: map,
    text: "CENTRO MEDICO CAMINOS DEL INCA SAC",
  });
  var marker8 = new google.maps.Marker({
    position: coord8,
    map: map,
    text: "CLÍNICA DEL RIÑÓN SAN RENATO S.A.C.",
  });
  var marker9 = new google.maps.Marker({
    position: coord9,
    map: map,
    text: "CENTRO DE DIÁLISIS KUSAQ SOCIEDAD ANÓNIMA CERRADA - CENKUS S.A.C.",
  });
  var marker10 = new google.maps.Marker({
    position: coord10,
    map: map,
    text: "CENTRO NEFROLÓGICO INTEGRAL RENAL CARE S.A.C.",
  });
  var marker11 = new google.maps.Marker({
    position: coord11,
    map: map,
    text: "CENTRO DE TRATAMIENTO VILLA RICA S.A.C.",
  });
  var marker12 = new google.maps.Marker({
    position: coord12,
    map: map,
    text: "CLÍNICA SAN ANDRÉS E.I.R.L.",
  });
  var marker13 = new google.maps.Marker({
    position: coord13,
    map: map,
    text: "CENTRO NEFROLÓGICO SANTA LUCIA S.A.C.",
  });
  var marker14 = new google.maps.Marker({
    position: coord14,
    map: map,
    text: "CENTRO DE SALUD RENAL PRIMAVERA S.A.C.",
  });
  var marker15 = new google.maps.Marker({
    position: coord15,
    map: map,
    text: "NEFRO CENTRO CHOCOPE S.A.C.",
  });
  var marker16 = new google.maps.Marker({
    position: coord16,
    map: map,
    text: "BIOTEC DIAL E.I.R.L.",
  });
  var marker18 = new google.maps.Marker({
    position: coord18,
    map: map,
    text: "CENTRO DEL RIÑÓN DEL NORTE S.A.C.",
  });
  var marker19 = new google.maps.Marker({
    position: coord19,
    map: map,
    text: "DIALI MEDIC PERU S.A.C.",
  });
  var marker20 = new google.maps.Marker({
    position: coord20,
    map: map,
    text: "NEFRO CARE PERU S.A.C.",
  });
  var marker21 = new google.maps.Marker({
    position: coord21,
    map: map,
    text: "NEFRO CIX S.A.C.",
  });
  var marker22 = new google.maps.Marker({
    position: coord22,
    map: map,
    text: "NEFROLIFE PERÚ S.A.C.",
  });
  var marker23 = new google.maps.Marker({
    position: coord23,
    map: map,
    text: "CENTRO DE DIÁLISIS MARÍA AUXILIADORA E.I.R.L.",
  });
  var marker24 = new google.maps.Marker({
    position: coord24,
    map: map,
    text: "SERVICIO MÉDICO RENAL CORAZON DE JESUS S.A.C.",
  });
  var marker25 = new google.maps.Marker({
    position: coord25,
    map: map,
    text: "CENTRO MÉDICO JESÚS MARÍA S.A.C.",
  });
  var marker26 = new google.maps.Marker({
    position: coord26,
    map: map,
    text: "GRUPO SERVICIOS MÉDICOS INTEGRALES S.A.C.",
  });
  var marker27 = new google.maps.Marker({
    position: coord27,
    map: map,
    text: "CENTRO ESPECIALIZADO DE ENFERMEDADES RENALES S.A.C.",
  });
  var marker28 = new google.maps.Marker({
    position: coord28,
    map: map,
    text: "RENALPLUS S.A.C.2",
  });
  var marker29 = new google.maps.Marker({
    position: coord29,
    map: map,
    text: "CENTRO DE DIÁLISIS VIRGEN DEL LOURDES S.A.C.",
  });
  var marker30 = new google.maps.Marker({
    position: coord30,
    map: map,
    text: "CENTRO DE DIÁLISIS GRAN CHIMU S.A.C.",
  });
  var marker31 = new google.maps.Marker({
    position: coord31,
    map: map,
    text: "HEMODIAL CENTER S.A.C.",
  });
  var marker32 = new google.maps.Marker({
    position: coord32,
    map: map,
    text: "CENTRO DE DIÁLISIS SAN LUIS S.A.C.",
  });
  var marker33 = new google.maps.Marker({
    position: coord33,
    map: map,
    text: "PLUSVIDA SERVICIOS MÉDICOS S.A.C.",
  });
  var marker34 = new google.maps.Marker({
    position: coord34,
    map: map,
    text: "NEPHRO CARE S.A.C.",
  });
  var marker35 = new google.maps.Marker({
    position: coord35,
    map: map,
    text: "CENTRO DE DIÁLISIS JESÚS MARÍA S.A.C.",
  });
  var marker36 = new google.maps.Marker({
    position: coord36,
    map: map,
    text: "CENTRO MÉDICO ESPECIALIZADO SANTA ENA S.A.",
  });
  var marker37 = new google.maps.Marker({
    position: coord37,
    map: map,
    text: "CENTRO DE DIÁLISIS LAS ORQUIDEAS S.A.C.",
  });
  var marker38 = new google.maps.Marker({
    position: coord38,
    map: map,
    text: "CENTRO DE DIÁLSIS NEFRO CONTINENTE S.A.C.",
  });
  var marker39 = new google.maps.Marker({
    position: coord39,
    map: map,
    text: "CENTRO MÉDICO MULTISERVICIOS S.A.C.",
  });
  var marker40 = new google.maps.Marker({
    position: coord40,
    map: map,
    text: "CENTRO DE DIÁLISIS NEFROVIDA S.A.C.",
  });
  var marker41 = new google.maps.Marker({
    position: coord41,
    map: map,
    text: "SERVICIO DE APOYO DIAGNÓSTICO Y TERAPÓUTICO SAN MIGUEL S.A.C.",
  });
  var marker42 = new google.maps.Marker({
    position: coord42,
    map: map,
    text: "NEFRONET S.A.C.",
  });
  var marker43 = new google.maps.Marker({
    position: coord43,
    map: map,
    text: "NEFROVIDAD LA FLORIDA S.A.C.",
  });
  var marker44 = new google.maps.Marker({
    position: coord44,
    map: map,
    text: "CENTRO DE DIÁLISIS CALLAO S.A.C.",
  });
  var marker45 = new google.maps.Marker({
    position: coord45,
    map: map,
    text: "CENTRO NEFROLÓGICO VILLA SUR S.A.C.",
  });
  var marker46 = new google.maps.Marker({
    position: coord46,
    map: map,
    text: "UNIDAD DE PREVENCIÓN Y TRATAMIENTO RENAL DIVINO NIÑO S.A.C.",
  });
  var marker47 = new google.maps.Marker({
    position: coord47,
    map: map,
    text: "CENTRO MÉDICO SANTA PATRICIA S.A.C.",
  });
  var marker48 = new google.maps.Marker({
    position: coord48,
    map: map,
    text: "NEFRODIAL S.A.C.",
  });
  var marker49 = new google.maps.Marker({
    position: coord49,
    map: map,
    text: "CLINICA INTEGRAL SANTA ELENA E.I.R.L.",
  });
  var marker50 = new google.maps.Marker({
    position: coord50,
    map: map,
    text: "CENTROMED DE LA HUMANIDAD S.A.C.",
  });
  var marker51 = new google.maps.Marker({
    position: coord51,
    map: map,
    text: "CENTRO DE DIÁLISIS SAN FRANCISCO S.A.C.",
  });
  var marker52 = new google.maps.Marker({
    position: coord52,
    map: map,
    text: "CENTRO DEL RIÑÓN S.A.C.",
  });
  var marker53 = new google.maps.Marker({
    position: coord53,
    map: map,
    text: "CENTRO DE SALUD RENAL SAN MATIAS S.A.C.",
  });
  var marker54 = new google.maps.Marker({
    position: coord54,
    map: map,
    text: "SAN FRANCISCO INVERSIONES MÉDICAS S.A.C.",
  });
  var marker55 = new google.maps.Marker({
    position: coord55,
    map: map,
    text: "INSTITUTO MÉDICO CASTILLA S.A.C.",
  });
  var marker57 = new google.maps.Marker({
    position: coord57,
    map: map,
    text: "ALKSA INVERSIONES BIOMÉDICAS S.A.C.",
  });
  var marker59 = new google.maps.Marker({
    position: coord59,
    map: map,
    text: "CENTRO RENAL HABICH S.A.C.",
  });
  var marker60 = new google.maps.Marker({
    position: coord60,
    map: map,
    text: "CENTRO NEFROUROLOGICO DEL ORIENTE SAC",
  });
  var marker61 = new google.maps.Marker({
    position: coord61,
    map: map,
    text: "CENTRO DE DIÁLISIS NEFROMEDICA DEL SUR EIRL",
  });
  var marker62 = new google.maps.Marker({
    position: coord62,
    map: map,
    text: "NEFRO SALUD TUMBES",
  });
  var marker63 = new google.maps.Marker({
    position: coord63,
    map: map,
    text: "CLINICA DE ENFERMEDADES RENALES Y DIALISIS DEL SUR SAC",
  });
  var marker64 = new google.maps.Marker({
    position: coord64,
    map: map,
    text: "INSTITUTO DEL RIÑON E.I.R.L.",
  });
  var marker65 = new google.maps.Marker({
    position: coord65,
    map: map,
    text: "CENTRO DE DIALISIS LOS OLIVOS E.I.R.L.",
  });
  var marker66 = new google.maps.Marker({
    position: coord66,
    map: map,
    text: "CENTRO DE DIALISIS SAN IGNACIO DE LOYOLA S.A.C.",
  });
  var marker67 = new google.maps.Marker({
    position: coord67,
    map: map,
    text: "CENTRO DE DIALISIS SANTA ANA S.A.C.",
  });
  var marker68 = new google.maps.Marker({
    position: coord68,
    map: map,
    text: "ORGANIZACION MEDICA Y DE SERVICIOS NORDIAL S.A.C.",
  });
  var marker69 = new google.maps.Marker({
    position: coord69,
    map: map,
    text: "CENTRO MEDICO ESPECIALIZADO CHINCHA S.A.C",
  });
  var marker70 = new google.maps.Marker({
    position: coord70,
    map: map,
    text: "DIRAMED S.A.C.",
  });
  var marker71 = new google.maps.Marker({
    position: coord71,
    map: map,
    text: "SAMYMED S.A.C.",
  });
  var marker72 = new google.maps.Marker({
    position: coord72,
    map: map,
    text: "PRONEFROS SAC",
  });
  var marker73 = new google.maps.Marker({
    position: coord73,
    map: map,
    text: "PIRPALAP SOCIEDAD ANONIMA CERRADA",
  });
}
