import React from 'react';
import PropTypes from 'prop-types';

const Title = ({checklistTitle}) => (
	<h1>{checklistTitle ? checklistTitle : 'Add a new checklist'}</h1>
);

Title.propTypes = {
	checklistTitle: PropTypes.string
}

export default Title;