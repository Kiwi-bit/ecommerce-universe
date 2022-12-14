import React from "react";
import Context from "./context";

const withContext = WrappedComponent => {
    const withHOC = props => {
        return (
            <Context.Consumer>
                {context => <WrappedComponent {...props} context={context} />}
            </Context.Consumer>
        );
    };
    return withHOC;
};

export default withContext;