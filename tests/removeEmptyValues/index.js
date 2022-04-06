const input = {
  customAudienceType: "FIRMOGRAPHIC_EXCLUDE",
  contacts: {
    location: { countries: [], states: [], cities: [] },
    titles: { include: null, exclude: null },
    seniorities: { include: null, exclude: [4] }
  },
  flowId: null,
  emptyString: "",
  boolTrue: true,
  boolFalse: false,
  providers: ["foo", "bar"],
  attachedCompaniesFileId: null,
  attachedContactListFileId: null,
  companies: {
    location: null,
    industries: null,
    revenue: null,
    employees: null,
    naics: null,
    saic: null,
    exclude: []
  }
};

const output = {
	customAudienceType: "FIRMOGRAPHIC_EXCLUDE",
  contacts: { seniorities: { exclude: [4] } },
	boolTrue: true,
	boolFalse: false,
  providers: ["foo", "bar"]
};


/**
 * 
 * @param {input} input 
 */
const removeEmptyValuesDeep = (input) => {
  // Implementation
	const isArray = (value) => Array.isArray(value)
	const isAnObject = (value) => typeof value === 'object' && value !== null && !isArray(value)
	const isBoolean = (value) => typeof value === 'boolean'

	const isValid = (value) => {
		//Array
		if (
			(isArray(value) && !!value.length) ||
			(isBoolean(value)) ||
			(!isBoolean(value) && !isArray(value) && !isAnObject(value) && !!value)
		) return true

		return false
	}

	const result = {}

	const checkAndAdd = (data, insertingBase, key) => {
		if (isValid(data)) insertingBase[key] = data

		if (isAnObject(data)) {
			Object.entries(data).forEach(([level1key, level1data]) => {
				if (!isAnObject(level1data) && isValid(level1data)) {
					insertingBase[key] = {}
					insertingBase[key][level1key] = level1data
				}
				if (isAnObject(level1data)) {
					Object.entries(level1data).forEach(([level2key, level2data]) => {
						if (!isAnObject(level2data) && isValid(level2data)) {
							insertingBase[key] = {}
							insertingBase[key][level1key] = {}
							insertingBase[key][level1key][level2key] = level2data
						}
					})
				}
			})
		}
	}

	Object.entries(input).forEach(([key, data]) => {
		checkAndAdd(data, result, key)
	})

	return result
}

const result = removeEmptyValuesDeep(input)

console.log("Is right?", JSON.stringify(output) === JSON.stringify(result))

exports.removing = {
	result,
}