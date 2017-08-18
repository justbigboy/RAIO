import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * xgqfrms
 * 2017.08.06
 * 
 * @class SCT
 * @extends {Component}
 */

import {urls} from '../../app/urls.js';
import {color} from '../../app/color';
import {debug} from '../../app/debug';

import {TCB} from './TabsContentBox';


let arr = [],
    arrout = [];

class SCT extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: this.props.data,
            new_data: {},
            input_datas: [],
            output_datas: [],
            in_out_data: [],
            in_data: [],
            out_data: [],
            developer: "",
            url_name: this.props.urlname
        };
    }
    // url_name
    // fetch data by `ReportName` & `GetSchema`
    inputClick = (url) => {
        // http://localhost:7777/input
        let u = `${url}`;
        console.log(`url test = ${u}`, u);
        fetch(`${url}`)
        .then((response) => response.json())
        .then((json)=> {
            if (!debug) {
                console.log(`json = ${json}`);
                console.log(`json.length = ${json.length}`);
                console.log(`%c json.Info`, color.color_css1,json.Info.schema.Properties);
            }
            // Properties
            if(json.Info === "Does't Contain The undefined Report"){
                // "Info" : "Does't Contain The undefined Report"
                return arr;
            }
            let datas = json.Info.schema.Properties;
            if (!debug) {
                let {ApiName, SecuCode} = datas;
                console.log(`ApiName = ${ApiName}`, ApiName);
                console.log(`ApiName = ${ApiName.Description}`);
                console.log(`SecuCode = ${SecuCode.Description}`);
            }
            // Objects to Array
            // let arr = [];
            let i = 0;
            // reset arr
            arr.length = 0;
            // arr = [];
            for (let key in datas) {
                if(!datas.hasOwnProperty(key)) continue;
                if(datas.hasOwnProperty(key)) {
                    // datas[key].key = key;
                    // key: "ApiName"
                    // datas[key].key = i++;
                    datas[key].name = key;
                    datas[key].key = ("1000" + i++);
                    if(datas[key].Required !== undefined){
                        datas[key].Description += `(${datas[key].Required})`;
                    }else{
                        datas[key].Description += `(可选参数)`;
                    }
                    // key === index
                    arr.push(datas[key]);
                }
            }
            // console.log(`arr result = `, arr);
            this.setState(
                {
                    input_datas: arr
                }
            );
            return arr;
        });
        // console.log(`new arr = `, arr);
    };
    // fetch data by `ReportName` & `GetRowSchema`
    outputClick = (url) => {
        // https://cdn.xgqfrms.xyz/json/tables.json
        let u = `${url}`;
        // console.log(`url test = ${u}`, u);
        fetch(`${url}`)
        .then((response) => response.json())
        .then((json)=> {
            if(debug){
                console.log(`json = ${json}`); 
            }
            if (!debug) {
                console.log(`json.length = ${json.length}`);
                console.log(`json.Info.schema.Properties `, json.Info.schema.Properties);
            }
            // Properties
            let datas = [];
            if(json.Success === false){
                // "Info" : "Does't Contain The undefined Report"
                // "Info": "Does't Contain The xxxxxxx Report"
                // "Success": false
                return datas;
            }
            if(json.Info.name && json.Info.schema === undefined){
                // "Info" : {"name" : "StaticReportImageData"}
                // json.Info.name === "StaticReportImageData"
                return datas;
            } 
            if(json.Info.schema.Properties !== undefined){
                // json.Info.schema.Properties
                // single table
                let table = json.Info.schema;
                let arr = [],
                    new_obj = {},
                    i = 0;
                // no desc
                let objs = table.Properties;
                if(debug){
                    console.log(`%c @@@@@@@@@@@@ no tab.name === "" @@@@@@@@@@@@$`, color.color_css1);
                }
                // add Table.name = "Table1"
                for (let key in objs) {
                    if(!objs.hasOwnProperty(key)) continue;
                    if (objs.hasOwnProperty(key)) {
                        // A0 === name
                        objs[key].name =  key;
                        if(objs[key].Description){
                            // objs[key].name =  key;
                        }else{
                            // TestProtocol 暂无注释
                            objs[key].Description = "☹️ 暂无注释";
                            if (!debug) {
                                console.log(`%c objs[key].Description === "emoji ☹️ 暂无注释" `, color.color_css2, objs[key].Description);
                            }
                        }
                        objs[key].key = ("k000" + i++);
                    }
                    if (!debug) {
                        console.log(`%c objs[key] === {type: "string", Description: "A份额简称", name: "A1", key: "k0001"} `, color.color_css2, objs[key]);
                    }
                    arr.push(objs[key]);
                }
                new_obj.title = "";
                new_obj.datas = arr;
                datas.push(new_obj);
                // datas = [];
            }else{
                // multi tables
                // json.Info.schema.BasicInformationRow.Properties
                let tables = json.Info.schema;
                // let i = 0;
                for (let key in tables) {
                    let arr = [],
                        new_obj = {},
                        i = 0;
                    // tab.name === "AnyManagedFundsRow":[] ???
                    // results table
                    if(debug){
                        console.log(`%c $$$$$$$$$$  tab.name === "AnyManagedFundsRow":[] ??? $$$$$$$$$$`, color.css2);
                    }
                    // add Table.name = "AnyManagedFundsRow"
                    if(!tables.hasOwnProperty(key)) continue;
                    if (tables.hasOwnProperty(key)) {
                        let title = tables[key].desc,
                            objs = tables[key].Properties;
                        for (let key in objs) {
                            if (objs.hasOwnProperty(key)) {
                                // A0
                                // TestProtocol 暂无注释
                                objs[key].name =  key || "暂无注释";
                                objs[key].key = ("k000" + i++);
                            }
                            arr.push(objs[key]);
                            if (debug) {
                                console.log(`arr ${key}`, arr);
                            }
                        }
                        // console.log(`title ${key}`, title);
                        new_obj.title = tables[key].desc;
                        new_obj.datas = arr;
                        if (debug) {
                            console.log(`new obj = `, new_obj);
                        }
                    }
                    datas.push(new_obj);
                    if (!debug) {
                        console.log(`%c datas key = ${key} \n datas = `, color.css1, datas);
                        console.log(`%c datas i = ${i} \n datas = `, color.css2, datas[i-1]);
                    }
                    // i++;
                }
            }
            // console.log(`datas[0] = `, datas[0]);
            // console.log(`datas[0].length = `, datas[0].length);
            // Array.isArrray(datas[0]);
            // console.log(`Array.isArray(datas[0]) = `, Array.isArray(datas[0]));
            // console.log(`typeof datas[0] = `, typeof(datas[0]));
            this.setState(
                {
                    output_datas: datas
                }
            );
            return datas;
        });
    };
    in_out_data = () => {
        // input + output = in_out_data
        // filter data
    };
    componentDidMount() {
        let new_data = this.state.data;
        // get url
        // console.log(`this.state.url_name`, this.state.url_name);
        // undefined url_key ???
        let url_key = this.state.url_name,
            developer = "";
        // developer ? developer : "undefined"
        if(url_key === undefined){
            url_key = ""; 
        } 
        if(new_data.developer){
            developer = new_data.developer;
            this.setState(
                {
                    developer: developer
                }
            );
        }
        this.setState(
            {
                new_data: Object.assign({}, new_data)
            }
        );
        if(!debug){
            console.log(`%c new_data`, color.color_css2, new_data);
            console.log(`%c new_data url_key = \n`, color.color_css1, url_key);
            console.log(`%c developer = \n`, color.color_css3, developer);
            console.log(`typeof url_key`, (typeof url_key));
        }
        /* 
            fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail
            name === ReportName (唯一的 query key)
            GetSchema === input
            http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}
            GetRowSchema === output
            http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}
        */
        if (!debug) {
            console.log(`this.state.url_name url_key`, url_key);
        }
        const fixedInURL = `{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":`;
        const fixedOutURL = `{"Admin":"report","Action":"GetRowSchema","WriteType":"json", "ReportName":`;
        let url_in = `${urls.input}?${fixedInURL}"${url_key}"}`,
            url_out = `${urls.output}?${fixedOutURL}"${url_key}"}`;
        this.inputClick(url_in);
        // get developer
        this.outputClick(url_out);
    }
    render() {
        const {input_datas, output_datas, in_out_data} = this.state;
        // const {input_datas, output_datas} = this.props.datas;
        return (
            <div>
                {/* this.state.data = {JSON.stringify(this.state.data)} */}
                {/* {this.state.new_data.key}<br />  */}
                <hr/>
                <div style={{color: 'green'}}>
                    <TCB 
                        developer={this.state.developer || (Math.random()*10 > 5 ? "xgqfrms" : "admin")} 
                        input_datas={input_datas}
                        output_datas={output_datas}
                        in_out_data={in_out_data}
                    />
                </div>
            </div>
        );
    }
}

SCT.propTypes = {
    test: PropTypes.string,
    data: PropTypes.object.isRequired,
    urlname: PropTypes.string.isRequired,
};

export {SCT};
export default SCT;