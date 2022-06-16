/* 
    Vector 0.1.0
    (c) 2022 Inpyung SkillClass OSS
    MIT License - Released under the MIT License.
    https://github.com/SkillClass/Vector/blob/main/LICENSE
*/

(()=>{
    // createStyle 함수는 성능이슈가 생길 수 있음 : 코드 리팩토링이 필요할 수 있음 - 22/06/16 이민준
    const createStyle = (property,style,config)=>{
        if(document.querySelector('head style') == null){
            let styleElement = document.createElement("style");
            document.querySelector("head").appendChild(styleElement);

            if(Array.isArray(property)){
                property.forEach((name)=>{
                    if(typeof name === 'object'){
                       if(config.object){
                            Object.keys(style).forEach((s)=>{
                                Object.keys(style[s]).forEach((t)=>{
                                    let pr = Object.keys(name)[0];
                                    styleElement.sheet.insertRule(`.${pr}-${s}-${t}{${name[pr]}:${style[s][t]}}`);
                                    // hover, active 반응은 config Object에 reaction이 true되어야 작동됨
                                    if(config.reaction){
                                        styleElement.sheet.insertRule(`.hover\\\:${pr}-${s}-${t}:hover{${name[pr]}:${style[s][t]}}`);
                                        styleElement.sheet.insertRule(`.active\\\:${pr}-${s}-${t}:active{${name[pr]}:${style[s][t]}}`);
                                    }
                                });
                            });
                        }
                    }
                });
            }else{
                
            }
            
        }
    };


    /*
        TODO - 22/06/16
        - 제공 색상 추가
    */
    createStyle([{"bg":"background-color"},{"text":"color"}],{
        "red":{
            "50": "#FFEBEE",
            "100": "#FFCDD2",
            "200": "#EF9A9A",
            "300": "#E57373",
            "400": "#EF5350",
            "500": "#F44336",
            "600": "#E53935",
            "700": "#D32F2F",
            "800": "#C62828",
            "900": "#B71C1C"
        },
        "pink":{
            "50": "#FCE4EC",
            "100": "#F8BBD0",
            "200": "#F48FB1",
            "300": "#F06292",
            "400": "#EC407A",
            "500": "#E91E63",
            "600": "#D81B60",
            "700": "#C2185B",
            "800": "#AD1457",
            "900": "#880E4F",
        },
        "purple":{
            "50": "#F3E5F5",
            "100": "#E1BEE7",
            "200": "#CE93D8",
            "300": "#BA68C8",
            "400": "#AB47BC",
            "500": "#9C27B0",
            "600": "#8E24AA",
            "700": "#7B1FA2",
            "800": "#6A1B9A",
            "900": "#4A148C",
        }
    },{object:true,reaction:true});
})()
   
