export function getItemTopPosition(currentIndex, selectedIndex, isExpanded) {
	const itemHeight = 223;
	const gap = 70;
	const expandedGapRatio = 0.5;
	const topOffset = 100;

	if (selectedIndex < 0) {
		return isExpanded
			? currentIndex * gap + topOffset
			: currentIndex * gap * expandedGapRatio + topOffset;
	}

	let topPosition = currentIndex * gap * expandedGapRatio;
	if (currentIndex >= selectedIndex) {
		topPosition += (selectedIndex === 0
			? 0
			: itemHeight);
	}

	if (currentIndex > selectedIndex) {
		topPosition += 4 * gap;
	}
	return topPosition + topOffset;
}

export function getButtonsConfig(currentIndex, selectedIndex, count) {
	const buttons = {
		openPickerInAddMode: false,
		moveItemUp: false,
		moveItemDown: false,
		openPickerInChangeMode: false,
		deleteItem: false,
	};
	if (currentIndex !== selectedIndex || currentIndex === count - 1) return { ...buttons };
	if (currentIndex === 0) return { ...buttons, openPickerInAddMode: true };
	if (count === 3 && currentIndex === 1) {
		return {
			...buttons,
			openPickerInAddMode: true,
			openPickerInChangeMode: true,
			deleteItem: true,
		};
	}
	if (currentIndex === 1) {
		return {
			...buttons,
			openPickerInAddMode: true,
			moveItemDown: true,
			openPickerInChangeMode: true,
			deleteItem: true,
		};
	}
	if (currentIndex === count - 2) {
		return {
			...buttons,
			openPickerInAddMode: true,
			moveItemUp: true,
			openPickerInChangeMode: true,
			deleteItem: true,
		};
	}
	return {
		openPickerInAddMode: true,
		moveItemUp: true,
		moveItemDown: true,
		openPickerInChangeMode: true,
		deleteItem: true,
	};
}

export function getIndexByItem(item, items) {
	const index = items.indexOf(item);
	return index > 0 ? index : 0;
}
