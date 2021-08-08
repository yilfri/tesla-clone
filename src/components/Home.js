import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
	return (
		<Component>
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery"
				bgImg="model-s.jpg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				bgImg="model-y.jpg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery"
				bgImg="model-3.jpg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery"
				bgImg="model-x.jpg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Lowest Cost Solar Panels in America"
				description="Money-back guarantee"
				bgImg="solar-panel.jpg"
				leftBtnText="Order now"
				rightBtnText="Learn more"
			/>
			<Section
				title="Solar for New Roofs"
				description="Solar Roof Costs Less Than a New Roofs"
				bgImg="solar-roof.jpg"
				leftBtnText="Order now"
				rightBtnText="Learn more"
			/>
			<Section title="Accessories" description="" bgImg="accessories.jpg" leftBtnText="Shop now" />
		</Component>
	);
};

export default Home;

const Component = styled.div`
	height: 100vh;
`;
