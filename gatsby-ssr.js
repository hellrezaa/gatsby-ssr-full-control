exports.onPreRenderHTML = ({ getPostBodyComponents }) => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    
    const bodyComponents = getPostBodyComponents();
    //const headComponents = getHeadComponents();

    bodyComponents.forEach(element => {
      console.log(element);
    });
  
    /*headComponents.forEach(element => {
      if (element.type === 'style' && element.props['data-href']) {
        element.type = 'style';
        element.props.href = element.props['data-href'];
        element.props.rel = 'stylesheet';
        element.props.type = 'text/css';
  
        delete element.props['data-href'];
        delete element.props.dangerouslySetInnerHTML;
      }
    })*/
  };