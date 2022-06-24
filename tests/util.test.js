/* 
    Vector 0.1.0 - TestReleases
    (c) 2022 Inpyung SkillClass OSS
    MIT License - Released under the MIT License.
    https://github.com/SkillClass/Vector/blob/main/LICENSE
*/

(function () {
    const createStyle=(selector,style)=>{
        if(!document.querySelector('head style')){
            let createStyleElement = document.createElement('style');
            document.querySelector('head').appendChild(createStyleElement);
            createStyleElement.sheet.insertRule(`${selector}{${style}}`);
        }else{
            document.querySelector('head style').sheet.insertRule(`${selector}{${style}}`);
        }
    };
    const createStyleSelectorArray=(selector,style)=>{
        selector.forEach(element => {
            createStyle(element,style);
        });
    };
    const createStyleArrayClass=(selector,style)=>{
        selector.forEach(element => {
            createStyle(`.${element}`,`${style}:${element};`);
        });
    };

    createStyleArrayClass(['none','inline','block','contents','flex','grid','inline-block','inline-flex','inline-grid','inline-table','list-item','run-in','table','table-caption','table-column-group','table-header-group','table-footer-group','table-row-group','table-cell','table-column','table-row','initial'],'display');

})();
