import React from "react";
import "./section-header.css"

const SectionHeader = ({title}) => {
	return (
		<div className="section-header">
			<h2>{title}</h2>
		</div>
	);
};

export default SectionHeader;