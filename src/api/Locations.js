const CLIENT_ID = "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR";
const CLIENT_SECRET = "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0";

export const getLocations = () => {
  return fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=Kolkata&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20182507
`)
    .then(resp => resp.json())
    .then(result => result.response.groups[0].items);
};
