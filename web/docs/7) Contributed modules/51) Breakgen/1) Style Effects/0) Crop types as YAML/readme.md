Each crop type can be configured using variables provided by the crop type plugin. Breakgen directly configures these style effects in a way that it matches the configuration of that style effect type. Meaning you can copy and paste style effects from existing config into breakgen. However because it is a hassle to go know all image style configurations by hearth we'll go over each of them.

### Convert

| Data      | Options              |
| --------- | -------------------- |
| extension | png jpeg jpg jpe gif |

**Yaml** 

```yaml
- id: image_convert
  weight: 1
  data:
    extension: png
```

---

### Crop

| Data   | Options                                                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------------------- |
| width  | integer representing amount of pixels                                                                                |
| height | integer representing amount of pixels                                                                                |
| anchor | left\-top center\-top right\-top left\-center center\-center right\-center left\-bottom center\-bottom right\-bottom |

**Yaml**

```yaml
- id: image_crop
  weight: 1
  data:
    width: 300
    height: 200
    anchor: center-center
```

---

### Desaturate

| Data    | Options                                              |
| ------- | ---------------------------------------------------- |
| No data | This style effect does not accept any configuration. |

**Yaml**

```yaml
- id: image_desaturate
  weight: 1
  data: {  }
```

---

### Resize

| Data   | Options                               |
| ------ | ------------------------------------- |
| width  | integer representing amount of pixels |
| height | integer representing amount of pixels |

**Yaml**

```yaml
- id: image_resize
  weight: 1
  data:
    width: 300
    height: 200

```

---

### Rotate

| Data    | Options                                                                                              |
| ------- | ---------------------------------------------------------------------------------------------------- |
| degrees | amount of degrees between 0 and 360                                                                  |
| bgcolor | The background color as hexadecimal (E.G: '#FFFFFF').                                                |
| random  | Randomize the rotation angle for each image. The angle specified is used as a maximum. true or false |

**Yaml**

```yaml
- id: image_rotate
  weight: 1
  data:
    degrees: 90
    bgcolor: '#FFFFFF'
    random: true

```

---

### Scale

| Data    | Options                                                              |
| ------- | -------------------------------------------------------------------- |
| width   | integer representing amount of pixels                                |
| height  | integer representing amount of pixels                                |
| upscale | Let scale make images larger than their original size. true or false |

**Yaml**

```yaml
- id: image_scale
  weight: 1
  data:
    width: 300
    height: 200
    upscale: true
```

---

### Scale and Crop

| Data   | Options                                                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------------------- |
| width  | integer representing amount of pixels                                                                                |
| height | integer representing amount of pixels                                                                                |
| anchor | left\-top center\-top right\-top left\-center center\-center right\-center left\-bottom center\-bottom right\-bottom |

**Yaml**

```yaml
- id: image_scale_and_crop
  weight: 1
  data:
    width: 300
    height: 200
    anchor: center-center

```