const clientID = 'PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR'
const clientSECRET = 'CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0'
const URL = `https://api.foursquare.com/v2/venues/explore?query=food&near=Kolkata&client_id=${clientID}&client_secret=${clientSECRET}&v=20182507`;


export const getLocationDetails = _ => 
    fetch(URL)
        .then(response => response.json())
        .then(result => result.response.groups[0].items);