# React Templates

https://marketplace.visualstudio.com/items?itemName=TimonVS.ReactSnippetsStandard

https://github.com/gildata/vscode-react/

> Snippets

Below is a list of all available snippets and the triggers of each one. 
The <kbd> ⇥ </kbd> means the <kbd> TAB </kbd> key.

## Trigger	Content

```jsx
    
rcc→	class component skeleton
rccp→	class component skeleton with prop types after the class
rcjc→	class component skeleton without import and default export lines
rcfc→	class component skeleton that contains all the lifecycle methods
rsc→	stateless component skeleton
rscp→	stateless component with prop types skeleton
rpt→	empty propTypes declaration
con→	class default constructor with props
conc→	class default constructor with props and context
est→	empty state object
cwm→	componentWillMount method
cdm→	componentDidMount method
cwr→	componentWillReceiveProps method
scu→	shouldComponentUpdate method
cwup→	componentWillUpdate method
cdup→	componentDidUpdate method
cwun→	componentWillUnmount method
ren→	render method
sst→	this.setState with object as parameter
ssf→	this.setState with function as parameter
props→	this.props
state→	this.state
bnd→	binds the this of method inside the constructor

```

The following table lists all the snippets that can be used for prop types. Every snippet regarding prop types begins with pt so it's easy to group it all together and explore all the available options. On top of that each prop type snippets has one equivalent when we need to declare that this property is also required. For example pta creates the PropTypes.array and ptar creates the PropTypes.array.isRequired

## Trigger	Content

```jsx

pta→	PropTypes.array,
ptar→	PropTypes.array.isRequired,
ptb→	PropTypes.bool,
ptbr→	PropTypes.bool.isRequired,
ptf→	PropTypes.func,
ptfr→	PropTypes.func.isRequired,
ptn→	PropTypes.number,
ptnr→	PropTypes.number.isRequired,
pto→	PropTypes.object.,
ptor→	PropTypes.object.isRequired,
pts→	PropTypes.string,
ptsr→	PropTypes.string.isRequired,
ptnd→	PropTypes.node,
ptndr→	PropTypes.node.isRequired,
ptel→	PropTypes.element,
ptelr→	PropTypes.element.isRequired,
pti→	PropTypes.instanceOf(ClassName),
ptir→	PropTypes.instanceOf(ClassName).isRequired,
pte→	PropTypes.oneOf(['News', 'Photos']),
pter→	PropTypes.oneOf(['News', 'Photos']).isRequired,
ptet→	PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
ptetr→	PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
ptao→	PropTypes.arrayOf(PropTypes.number),
ptaor→	PropTypes.arrayOf(PropTypes.number).isRequired,
ptoo→	PropTypes.objectOf(PropTypes.number),
ptoor→	PropTypes.objectOf(PropTypes.number).isRequired,
ptsh→	PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}),
ptshr→	PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}).isRequired,


```



# bad no `;`

```js
{
    "reactClassCompoment": {
        "prefix": "rcc",
        "body": "import React, { Component } from 'react'\n\nclass ${1:componentName} extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t$0\n\t\t\t</div>\n\t\t)\n\t}\n}\n\nexport default ${1:componentName}",
        "description": "Creates a React component class with ES6 module system"
    }
}

``` 

# good `;`

```js

{
    "reactClassComponent": {
        "prefix": "rcc",
        "body": "import React, {Component} from 'react'; \n\n class ${1:componentName} extends Component {\n\t render() {\n\t\t return (\n\t\t\t <div>\n\t\t\t\t$0\n\t\t\t</div>\n\t\t);\n\t}\n}\n\n export default ${1:componentName};",
        "description": "Creates a React component class with ES6 module system"
    }
}

```


















