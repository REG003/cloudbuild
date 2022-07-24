
function transformCSVtoJSON(line) {
  var values = line.split(',');
  var properties = [
    'Name',
    'Categories',
    'Address',
    'City',
    'State',
    'PostCode',
    'Phone',
    'Website',
    'Email',
    'Fax',
    'Latitude',
    'Longitude',
    'Employees',
    'Established',
    'ABNStatus',
    'ABN',
    'ABNName',
    'Accuracy',
    'ABN2',
    'ACN',
  ];
  var shoppingcentre = {};

  for (var count = 0; count < values.length; count++) {
    if (values[count] !== 'null') {
      shoppingcentre[properties[count]] = values[count];
    }
  }

  return JSON.stringify(shoppingcentre);
}
