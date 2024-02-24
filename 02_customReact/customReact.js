const customRender = ((reactElement,container)=>{
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    /* // one by one set atributes
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    */
   // more better to use for loop
   for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop])
   }
    container.appendChild(domElement);
});

const reactElement ={
    type:'a',
    props:{
        href:'https://github.com/sanjeetbth7',
        target:'_blank'
    },
    children:'Click here to go on my github'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer)