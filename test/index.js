const temp = `<div a={6546754 / 3} text="fasdf" fnCallback={()=>{ }} onClick={(e)=>{}} ><span>测试行内</span>
    {'8976987'}
    <div>fasdfa</div>
    <div style={{width: '23px', minWidth: '44px'}}>
        <span>
            4444444
        </span>
        <Hello value={123456}></Hello>
    </div>
</div>`


// 词法分析器
function jsx_tokenization(code){
    let tokens = []
    let pos = 0;
    let currentToken = ''

    while (pos < code.length){
        let char = code.charAt(pos);
        currentToken += char
        if(char === '<'){
            currentToken = ''
            if(code.charAt(pos + 1) !== '/'){
                console.log('标签开始')
            }

            if(code.charAt(pos + 1) === '/'){
                console.log('标签结束')
            }
        }
        if(char === '>'){
            if(code.charAt(pos - 1) !== "'" || code.charAt(pos - 1) !== '"' || code.charAt(pos - 1) !== "}" || code.charAt(pos - 1) === "{"){
                currentToken = ''
                console.log('内容')
            }

        }



        console.log(currentToken)
        pos++;
    }



    // while (pos < code.length){
    //     // 开始结束标签
    //     if(code.charAt(pos) === "<"){
    //         pos++;
    //         if(code.charAt(pos) === "/"){
    //             pos++;
    //             const value = getTokenName()
    //             endTag(value)
    //             console.log(value, "结束")
    //         }else{
    //             const value = getTokenName()
    //             startTag(value)
    //             console.log(value, "开始")
    //         }
    //     }else {
    //         pos++;
    //     }
        // 标签属性
        // if(code.charAt(pos) === "="){
        //     console.log("value", "标签属性")
        // }

        // 标签中间的内容
        // if(code.charAt(pos) === "'" || code.charAt(pos) === '"' || code.charAt(pos) === "}"){
        //     pos++
        //     if(code.charAt(pos) === ">"){
        //         pos++;
        //         console.log(code.charAt(pos), "内容")
        //     }
        // }




    // }

    function getContent(){
        let startIndex = pos;
        while (pos < code.length && code.charAt(pos) !== "<"){
            pos++;
        }
        return code.slice(startIndex, pos)
    }

    function getValue(){
        let startIndex = pos;
        if(code.charAt(pos) === "'"){
            while (pos < code.length){
                if(code.charAt(pos) === "'") {
                    pos++;
                    break;
                }
                pos++;
            }
        }
        if(code.charAt(pos) === '"'){
            while (pos < code.length){
                if(code.charAt(pos) === '"') {
                    pos++;
                    break;
                }
                pos++;
            }
        }
        if(code.charAt(pos) === "{"){
            while (pos < code.length){
                if(code.charAt(pos) === "}") {
                    pos++;
                    break;
                }
                pos++;
            }
        }
        return code.slice(startIndex, pos)
    }
    function getTokenName(){
        let startIndex = pos;
        while (pos < code.length){
            if(/^[a-zA-Z0-9_]/.test(code.charAt(pos))){
                pos++;
            }else {
                break;
            }
        }
        return code.slice(startIndex, pos)
    }
    function endTag(value){
        addToken('endTag', value);
    }
    function startTag(value){
        addToken('startTag', value)
    }

    function attributes(name, value){
        addToken('attribute', {name, value})
    }



    function addToken(type, value){
        tokens.push({type, value})
    }


    return tokens;
}

console.log(jsx_tokenization(temp))
