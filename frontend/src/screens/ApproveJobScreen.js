import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'


const ApproveJobScreen = ({history}) => {
    const [jobs,setJobs]= useState([]);
    
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const fetchApproveJobs = () =>{
        axios.get(`/api/proposal/alljobsWithApproved`,config)
             .then(response =>{
                 console.log(response);
                 setJobs(response.data.jobs)
             })
             .catch(err =>{
                 console.log('error')
             })
    }

    useEffect(()=>{
        if(userInfo){
            fetchApproveJobs();
        }
        else{
            history.push('/login')
        }
        
    }, []);


    return (
        <>
        <h1> List of Approve jobs</h1>
             <Table striped bordered hover responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>STATUS</th>
                    <th>TITLE</th>
                    <th>PRICE</th>
                    <th>COMPANY</th>
                   
                </tr>
            </thead>
            <tbody>
            {jobs.map((job,i) => (
              <tr key={job._id}>
                <td>{job._id}</td>
                <td>{job.status}</td>
                <td>
                  {job.job_id.title}
                </td>
                <td>
                {job.job_id.price}
                </td>
                <td>
                {job.company_id.name}
                </td>
                
              </tr>
            ))}
            </tbody>
        </Table>
            
        </>

    )
}

export default ApproveJobScreen
