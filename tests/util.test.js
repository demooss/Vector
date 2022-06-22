/* 
    Vector 0.1.0 - TestReleases
    (c) 2022 Inpyung SkillClass OSS
    MIT License - Released under the MIT License.
    https://github.com/SkillClass/Vector/blob/main/LICENSE
*/

(function () {
    const createStyle = (selector,style)=>{
        if(!document.querySelector('head style')){
            let createStyleElement = document.createElement('style');
            document.querySelector('head').appendChild(createStyleElement);
            createStyleElement.sheet.insertRule(`${selector}{${style}}`);
        }else{
            document.querySelector('head style').sheet.insertRule(`${selector}{${style}}`);
        }
     }
    const createStyleSelectorArray = (selector,style)=>{
        selector.forEach(element => {
            this.createStyle(element,style);
        });
    }

    createStyle('.btn',`
        transition: 0.5s;
        border: none;
        padding: 11px 20px;
        border-radius: 7px;
    `);
})();
