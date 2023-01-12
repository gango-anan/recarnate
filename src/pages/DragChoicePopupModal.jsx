import React from 'react';
import { ChoicePopup } from '../components/ChoicePopup';

const DragChoicePopupModal = ({
	popupStatus,
	closeChoiceModal,
	dropChoice,
	selectedItem,
	selectedDispoBin,
}) => {
	const showChoiceModal = popupStatus;
	if (!showChoiceModal) {
		return null;
	}
	return (
		<div className='w-screen h-screen bg-modal-background z-20 fixed left-0 top-0 flex flex-col justify-center items-center'>
			<ChoicePopup
				dropChoice={dropChoice}
				selectedItem={selectedItem}
				closeChoiceModal={closeChoiceModal}
				selectedDispoBin={selectedDispoBin}
			/>
		</div>
	);
};

export default DragChoicePopupModal;
