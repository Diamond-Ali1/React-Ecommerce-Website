import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { products, clothing, tech } from '../Data/products';
import { useContext } from 'react';
import { navContext } from './Navbar';

const filter = createFilterOptions();

export default function Search({ width }) {
  const { setSelectedProduct, setOpen } = useContext(navContext);
  const [value, setValue] = React.useState(null);
  const allProducts = [...clothing, ...products, ...tech];

  const handleClick = obj => {
    if (obj.image) {
      setSelectedProduct(obj);
      setOpen(true);
    }
  };
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(option => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id='free-solo-with-text-demo'
      options={allProducts}
      getOptionLabel={option => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) => (
        <div onClick={() => handleClick(option)}>
          <li {...props}>{option.title}</li>
        </div>
      )}
      sx={{ marginRight: '130px', minWidth: width }}
      freeSolo
      renderInput={params => (
        <TextField {...params} label='Search products brands and categories' />
      )}
    />
  );
}
