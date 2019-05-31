import React from 'react';
import reactImg from '../assets/react-img.png'
import reactImgDesk from '../assets/react-img1.png'
import './home.scss';

class Home extends React.Component {    
    render() {
        return (
            <div id="maincontent" className="container">
			<div className="txtImg-sec row">
				<div className="nopadding col-xs-12 col-md-6">
					<picture>
						<source srcset={reactImg} media="(max-width: 1023px)" />
						<source srcset={reactImgDesk} media="(min-width: 1024px)" />
						<img alt="React Logo" src={reactImg} className="react-img nopadding"/>
					</picture>
				</div>
				<div className="col-xs-12 col-md-6">
					<p className="img-content">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
				</div>
			</div>
			
			<div className="details-sec">
				<div className="tile col-xs-12 col-sm-6 col-md-4">
					<p className="heading">Learn Once, Write Anywhere</p>
					<p className="content">We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</p>
				</div>
				
				<div className="tile col-xs-12 col-sm-6 col-md-4">
					<p className="heading">Declarative</p>
					<p className="content">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.</p>
				</div>
				
			
				<div className="tile col-xs-12 col-sm-6 col-md-4">
					<p className="heading">A Simple Component</p>
					<p className="content">React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.</p>
				</div>
				
				<div className="tile col-xs-12 col-sm-6 col-md-4">
					<p className="heading">A Stateful Component</p>
					<p className="content">In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().</p>
				</div>
				
				<div className="tile col-xs-12 col-sm-6 col-md-4">
					<p className="heading">An Application</p>
					<p className="content">Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline.</p>
				</div>
				
				<div className="tile col-xs-12 col-sm-6 col-md-4">
					<p className="heading">Using External Plugins</p>
					<p className="content">React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the textarea’s value in real time.</p>
				</div>
				
			</div>
				
		</div>
        )}
}

export default Home;