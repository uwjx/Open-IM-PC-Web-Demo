import { Dispatch } from "redux";
import { Cve } from "../../@types/open_im";
import { im } from "../../utils";
import { CveActionTypes, SET_CUR_CVE, SET_CVE_INIT_LOADING, SET_CVE_LIST } from "../types/cve";

export const setCveList = (value: Cve[]): CveActionTypes => {
  return {
    type: SET_CVE_LIST,
    payload: value,
  };
};

export const setCurCve = (value: Cve): CveActionTypes => {
  return {
    type: SET_CUR_CVE,
    payload: value,
  };
};

export const setCveInitLoading = (value: boolean): CveActionTypes => {
    return {
      type: SET_CVE_INIT_LOADING,
      payload: value,
    };
  };


export const getCveList = () => {
    return (dispatch:Dispatch) => {
        dispatch(setCveInitLoading(true))
        im.getAllConversationList()
        .then(res=>{
          // console.log(JSON.parse(res.data));
            dispatch(setCveList(JSON.parse(res.data)))
            dispatch(setCveInitLoading(false))
        })
    }
}