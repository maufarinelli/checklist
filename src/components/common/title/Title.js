import React from 'react';
import PropTypes from 'prop-types';
import './title.css'

const Title = ({checklistTitle}) => (
	<h1 className={"checklist-title " + (checklistTitle === '' ? 'no-title' : '')}>{checklistTitle === '' ? 'Add a new checklist' : checklistTitle}</h1>
);

Title.propTypes = {
	checklistTitle: PropTypes.string
}

export default Title;