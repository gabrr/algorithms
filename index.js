const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
const test = require("./tests/refactorHelper");

console.log(
  test.divWithClassToComponent(`<div className="formGroup">
	<FormLabel required>Amount:</FormLabel>

	<div className="inputGroup">
		<FormControl fullWidth>
			<MdSelect
				id="amount"
				value={formData.amountField}
				onChange={(e) =>
					setState({
						formData: {
							...formData,
							amountField: e.target.value,
						},
					})
				}
			>
				{fields.map((field) => (
					<MdMenuItem
						key={field}
						value={field}
					>
						{field}
					</MdMenuItem>
				))}
			</MdSelect>
		</FormControl>
	</div>
</div>`)
);

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);
app.listen(3000, () => {});
