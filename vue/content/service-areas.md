---
title: Service Area
---

## Create Service Area

### View

| Label                   |                          |                   |
| ----------------------- | ------------------------ | ----------------- |
| Select Region           | `Model.ServiceRegions`   | Kendo UI ComboBox |
| Service Director(s)     | `Model.ServiceDirectors` | Read Only         |
| Region Manager(s)       |                          |                   |
| Service Lead            |                          | Read Only         |
| Service Areas in Region | `Model.ServiceAreas`     |                   |
| TimeZones               | `Model.Timezones`        | Kendo UI ComboBox |
| Select State            | `Model.States`           | Kendo UI ComboBox |

```js
function FindAddress() {
  const address = // Addresss fields
  GoAddressOnMap(address)
}
```

```js
function FindAddressByPosition() {
  map.setCenter(new google.maps.LatLng(lat, long))
  map.setZoom(7)
}
```

**Notes:**

- Kendo ComboBox for ServiceRegions
-
