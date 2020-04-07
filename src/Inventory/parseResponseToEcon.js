module.exports = function ({ assets, descriptions }) {
	const inventory = [];
	for (let i = 0; i < Object.keys(assets).length; i++) {
		const assetID = Object.keys(assets)[i];
		const item = assets[assetID];

		const classID = item.classid;
		const instanceID = item.instanceid;

		const descriptionID = `${classID}_${instanceID}`;
		const description = descriptions[descriptionID];

		inventory.push(
			{
				...description,
				amount: item.amount,
				// `pos` is not present in newer method.
				...(item.pos ? { pos: item.pos } : {}),
			},
		);
	}

	return inventory;
};
