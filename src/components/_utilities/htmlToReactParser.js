import HtmlToReactParser from 'html-to-react'

const tempHtmlToReactParser = htmlInput => {
    const htmlToReactParser = new HtmlToReactParser.Parser()
    return htmlToReactParser.parse(htmlInput)
}
export default tempHtmlToReactParser
