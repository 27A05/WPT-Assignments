import { useEffect, useState } from "react";

export default function DisplayDropdown()
{
    // function btnHandler(e) {
    //     data.push(e.target.value);// textfield 
    //     // 4 
    // }

    // useEffect(getListData(), [data]);



    // function getListData()
    // {
    //     let data = [];
    //     for (var i = 0; i < data.length; i++)
    //         {
    //             let item =<option>{data[i]}</option>
    //             data.push(item)
    //         }

    //         return data;
    // }



    return <>
        <h2>DropDown</h2>
        <select>
            <option>C</option>
            <option>C++</option>
            <option>Java</option>
            <option>AdvJava</option>
            <option>WPT</option>
        </select>
        
    </>
}