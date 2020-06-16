const React = require("react")
const { GlobalContextProvider } = require("./src/utils/GlobalContextProvider")

exports.wrapRootElement = ({ element }) => {
    return (
        <GlobalContextProvider>
            { element }
        </GlobalContextProvider>
    )
}