import React from 'react'

function App (){

	this.state = {
		data = [
			{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
			{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
			{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
			{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
			{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
			{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
		],
		name = 'Name'
	}

	return (
		<div className='Home'>

			<h1 align='center' >Item List</h1>
			
			<form> 
				{/* SearchBar */}
				<input type="text" value={this.state.name} />
				{/* Fiter  */}
				<input type='checkbox' value={this.state.stockfilter} />
				<label>Show Products that are aivialble in Stock</label>
			</form>
			
			{/* Data */}

			<table>
				<tr>
					<td>Name</td>
					<td>Price</td>
				</tr>
				{this.state.data.map((i)=> 
				<tr>
					<td>{i.name}</td>
					<td>{i.price}</td>
				</tr>)}
			</table>
			
		</div>
	)
}

export default App;