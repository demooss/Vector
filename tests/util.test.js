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

    // Text Decoration Line
    newCreateStyle([{name:'bottom',value:'underline'},{name:'overline',value:'overline'},{name:'through',value:'line-through'},{name:'none',value:'none'}],'text-decoration','line');
    
    // Text Decoration Style
    createStyleArrayClass(['solid','double','dotted','dashed','wavy'],'text-decoration-style','line');

    // Display
    createStyleArrayClass(['none','inline','block','contents','flex','grid','inline-block','inline-flex','inline-grid','inline-table','list-item','run-in','table','table-caption','table-column-group','table-header-group','table-footer-group','table-row-group','table-cell','table-column','table-row','initial'],'display');

    // Font Weight
    createStyleArrayClass(['100','200','300','400','500','600','900','bold','bolder'],'font-weight','text');

    // Text Align
    createStyleArrayClass(['left','center','right','justify','start','end'],'text-align','text');

})();
