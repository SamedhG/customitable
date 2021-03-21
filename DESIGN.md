## Table Component
 - `columns`
 - `row_data`

### Column Configuration:
A `columns` is a list of `column_config`   

A `column_config` is a :

```
{
    "id": string,
    "header": string?,
    "component" : <undecided>,
    "filterType": string: one of predefined: [ date | str | number ... ]
    "sort": boolean [default: True]
}
```

##### Note on components:
Components can either be a: 
- Function that returns a component that has all its args
- 2 seperate keys for opts and component

### Data Configuration

The data is a list of row objects:
A row is an object that must have all they keys that are the "id"s in the
columns

### Ideas to discuss:
- Filter has to support initialization by parsing url
- Table options (table component customizations)
- Component's Interface
