/* 
    Vector 0.1.0
    (c) 2022 Inpyung SkillClass OSS
    MIT License - Released under the MIT License.
    https://github.com/SkillClass/Vector/blob/main/LICENSE
*/

(()=>{ 
    const createStyle = (property,style)=>{
        if(!document.querySelector('head style')){
            let createStyleElement = document.createElement('style');
            document.querySelector('head').appendChild(createStyleElement);
            createStyleElement.sheet.insertRule(`${property}{${style}}`);
        }else{
            document.querySelector('head style').sheet.insertRule(`${property}{${style}}`);
        }
    };

    const elementClassNamePrefix = (prefix)=>{
        if(document.querySelectorAll(`[class*='${prefix}']`)){
            return document.querySelectorAll(`[class*='${prefix}']`);
        }else{
            return null;
        }
    };
})()
