/**
 * You are implementing your own HTML editor. To make it more comfortable
 * for developers you would like to add an auto-completion feature to it.
 * Given the starting HTML tag, find the appropriate end tag which your
 * editor should propose.
 * 
 * Example:
 * For startTag = "<button type='button' disabled>", the output should be
 * solution(startTag) = "</button>";
 * 
 * For startTag = "<i>", the output should be
 * solution(startTag) = "</i>".
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string startTag
 * 
 * [output] string
 * 
 * Tests passed: 12/12.
 */
function solution(startTag) {
    let openingTag = '',
        closingTag = '',
        ref = [];

    startTag.split('');
    for (let i = 0; i < startTag.length; i++) {
        if (startTag[i] === ' ') {
            ref.push(i);
            openingTag = startTag.slice(1, ref[0]);
            closingTag = '</'+openingTag+'>';
            break;
        } else if (startTag[i] === '>') {
            openingTag = startTag.slice(1, i);
            closingTag = '</'+openingTag+'>';
        }
    }
    return closingTag;
}