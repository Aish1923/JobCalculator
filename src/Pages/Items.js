import CancelIcon from '@mui/icons-material/Cancel';
import InputBox from '../Components/InputBox';
import CheckBox from "../Components/CheckBox";

function Items({ itemData, deleteItem, handleChange }) {
  return itemData.map((data, index) => {
    
    const { Item, Cost, SalesTax, SalesTaxApplicable } = data;
    return (
      <tr key={index}>
        <td><InputBox value={Item} onChange={(event) => handleChange(index, event)} textName="Item" /></td>
        <td><InputBox value={Cost} onChange={(event) => handleChange(index, event)} textName="Cost" number /></td>
        <td><InputBox value={(SalesTaxApplicable ? Number(Cost) * 0.07 : 0).toFixed(2)} onChange={(event) => handleChange(index, event)} textName="SalesTax" number readOnly /></td>
        <td><InputBox value={(Number(Cost) + Number(SalesTax)).toFixed(2)} onChange={(event) => handleChange(index, event)} textName="TotalItemCostPrice" number readOnly /></td>
        <td><CheckBox value={SalesTaxApplicable} onChange={(event) => handleChange(index, event)} name="SalesTaxApplicable"/></td>
        <td>{itemData.length >1 && <CancelIcon style={{ color: 'rgb(174, 255, 36)' }} onClick={() => deleteItem(index)} />}</td>
      </tr>
    );
  });
}
export default Items;
