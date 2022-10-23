import { useEffect, useState } from "react";
import Items from "./Items";
import { Paper } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckBox from "../Components/CheckBox";
import AppButton from '../Components/AppButton';
import './style.scss'


function AddItems() {
	const initialdataInput = {
		Item: "",
		Cost: "",
		SalesTax: "",
		SalesTaxApplicable: true,
		TotalItemCostPrice: "",
	};
	
	const [itemsData, setitemsData] = useState([{...initialdataInput}]);
	const [extraMargin, setExtraMargin] = useState(false);
	const marginpercent=0.11;
	const extramarginpercent=0.16;
	const salesTaxPercent=0.07;

	/*Function to add row for more item addition*/
	const addItems = () => {
		setitemsData([...itemsData, initialdataInput]);
	};

	/*Function to delete row for more item addition*/
	const deleteItem = (index) => {
		const data = [...itemsData];
		data.splice(index, 1);
		setitemsData(data);
	};

	/*Function to calculate total Item Cost,Sales Tax,Cost including Sales Tax*/
	const totalPrice = (value) => {
		return Number(itemsData.reduce((total, obj) => Number(obj[`${value}`]) + total, 0).toFixed(2));
	};

	/*Function to calculate total Cost of the Job*/
	const TotalJobCost = () => {
		const value = (totalPrice('TotalItemCostPrice') + calculateMargin()).toFixed(2);
		return 2 * (value / 2).toFixed(2);
	};

	/*Function to calculate margin for the Job*/
	const calculateMargin = () => {
		const TotalCostPrice = totalPrice('Cost');
		return Number((extraMargin ? TotalCostPrice * extramarginpercent : TotalCostPrice * marginpercent).toFixed(2));
	};

    /*Function to handle change in each textfield*/
	const handleChange = (index, event) => {
		const { name, value, checked } = event.target;
		const itemsInput = [...itemsData];
		if (name === "SalesTaxApplicable") {
			itemsInput[index][name] = checked;
			itemsInput[index]["SalesTax"] = checked ? Number(itemsInput[index]["Cost"]) * salesTaxPercent : 0;
		} else if (name === "Cost") {
			itemsInput[index]["SalesTax"] = itemsInput[index]["SalesTaxApplicable"] ? Number(value) * salesTaxPercent : 0;
			itemsInput[index][name] = value;
		} else {
			itemsInput[index][name] = value;
		}
		itemsInput[index]["TotalItemCostPrice"] = Number(itemsInput[index]["SalesTax"]) + Number(itemsInput[index]["Cost"]);
		setitemsData(itemsInput);
	};

	return (
		<div className="container">
			<h1 className="JobHeading">Job Cost Calculation</h1>
				<Paper elevation={3}>
					<div className="content">
						<div className="heading">
							<div className="jobNumber">Job 1:</div>
							<AppButton size="large" value="Clear" onClick={() => {setitemsData([initialdataInput]);setExtraMargin(false);}}></AppButton>
						</div>
						<table className="table">
							<thead>
								<tr>
									<th>Item</th>
									<th>Cost ($)</th>
									<th>Sales Tax ($)</th>
									<th>Total Item Cost ($)</th>
									<th>Sales Tax Applicable</th>
									<th><AddCircleIcon onClick={addItems} style={{ color: "rgb(174, 255, 36)" }}/></th>
								</tr>
							</thead>
							<tbody>
								<Items itemData={itemsData} deleteItem={deleteItem} handleChange={handleChange} />
								<tr>
									<td><h3>Subtotal:</h3></td>
									<td>{`$${totalPrice('Cost')}`}</td>
									<td>{`$${totalPrice('SalesTax')}`}</td>
									<td>{`$${totalPrice('TotalItemCostPrice')}`}</td>
								</tr>
								<tr>
									<td>
										<h3>Extra Margin
										<CheckBox value={extraMargin} onChange={(evnt) => setExtraMargin(evnt.target.checked)} name="ExtraMargin" />
										</h3>
									</td>
									<td></td>
									<td><h3>Total Margin ({extraMargin?'16%':'11%'}):</h3></td>
									<td><h3>${calculateMargin()}</h3></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="jobCost">Total Job Cost: ${TotalJobCost()}</div>
				</Paper>
		</div>
	);
}
export default AddItems;
