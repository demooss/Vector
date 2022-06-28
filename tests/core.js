/* 
    Vector 0.1.0 - TestReleases
    (c) 2022 Inpyung SkillClass OSS
    MIT License - Released under the MIT License.
    https://github.com/SkillClass/Vector/blob/main/LICENSE
*/

(function () {
    
       // Create a style element if there is no style element and add a style rule
    const createStyle=(selector,style)=>{
        if(!document.querySelector('head style')){
            let createStyleElement = document.createElement('style');
            document.querySelector('head').appendChild(createStyleElement);
            createStyleElement.sheet.insertRule(`${selector}{${style}}`);
        }else{
            document.querySelector('head style').sheet.insertRule(`${selector}{${style}}`);
        }
    };

    // When a style value becomes a class directly
    const createStyleArrayClass=(selector,style,firstName)=>{
        if(firstName){
            selector.forEach(element => {
                createStyle(`.${firstName}-${element}`,`${style}:${element};`)
            });
        }else{
            selector.forEach(element => {
                createStyle(`.${element}`,`${style}:${element};`)
            });
        }
    };

    const newCreateStyle=(selector,style,firstName)=>{
        if(firstName){
            selector.forEach(element => {
                createStyle(`.${firstName}-${element.name}`,`${style}:${element.value};`);
            });
        }else{
            selector.forEach(element => {
                createStyle(`.${element.name}`,`${style}:${element.value};`);
            });
        }
    };
   
})();
