import axios from 'axios'
import { JOB_LIST_REQUEST, JOB_LIST_SUCCESS, JOB_LIST_FAIL } from "../constants/jobConstants"

export const listJobs =() => async (dispatch) =>{

    try {
        dispatch({
            type: JOB_LIST_REQUEST,
          })

          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
          const { data } = await axios.get(
            '/api/proposal/allWithStatus',
            config
          )
          dispatch({
            type: JOB_LIST_SUCCESS,
            payload: data,
          })
          
    } catch (error) {
        dispatch({
            type: JOB_LIST_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        
    }
}

